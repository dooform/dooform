export interface PlaceholderField {
  key: string;
  label: string;
  type: 'text' | 'email' | 'date' | 'number' | 'otp';
  groupKey?: string;
  groupIndex?: number;
  groupSize?: number;
}

export interface GroupedField {
  groupKey: string;
  label: string;
  type: 'otp';
  fields: PlaceholderField[];
  groupSize: number;
}

export function extractPlaceholders(htmlContent: string): (PlaceholderField | GroupedField)[] {
  const placeholderRegex = /\{\{([^}]+)\}\}/g;
  const foundPlaceholders = new Set<string>();
  const placeholders: PlaceholderField[] = [];

  let match;
  while ((match = placeholderRegex.exec(htmlContent)) !== null) {
    const key = match[1].trim();
    if (!foundPlaceholders.has(key)) {
      foundPlaceholders.add(key);

      // Generate user-friendly label from key
      const label = key
        .replace(/([A-Z])/g, ' $1')
        .replace(/^./, str => str.toUpperCase())
        .replace(/_/g, ' ')
        .trim();

      // Determine field type based on key patterns
      let type: PlaceholderField['type'] = 'text';
      if (key.toLowerCase().includes('email')) {
        type = 'email';
      } else if (key.toLowerCase().includes('date')) {
        type = 'date';
      } else if (key.toLowerCase().includes('id') || key.toLowerCase().includes('no')) {
        type = 'number';
      }

      placeholders.push({ key, label, type });
    }
  }

  // Group ID fields that follow patterns like id_c_1, id_c_2, etc.
  const grouped = groupIdFields(placeholders);

  return grouped.sort((a, b) => {
    const aLabel = 'label' in a ? a.label : a.fields[0].label;
    const bLabel = 'label' in b ? b.label : b.fields[0].label;
    return aLabel.localeCompare(bLabel);
  });
}

function groupIdFields(placeholders: PlaceholderField[]): (PlaceholderField | GroupedField)[] {
  const grouped: Map<string, PlaceholderField[]> = new Map();
  const ungrouped: PlaceholderField[] = [];

  placeholders.forEach(field => {
    // Check if field matches ID pattern: prefix_suffix_number
    const idPatternMatch = field.key.match(/^(.+_[a-zA-Z]+)_(\d+)$/);

    if (idPatternMatch) {
      const groupKey = idPatternMatch[1]; // e.g., "id_c", "m_id", "w_id"
      const index = parseInt(idPatternMatch[2]);

      if (!grouped.has(groupKey)) {
        grouped.set(groupKey, []);
      }

      const groupedField: PlaceholderField = {
        ...field,
        type: 'otp',
        groupKey,
        groupIndex: index
      };

      grouped.get(groupKey)!.push(groupedField);
    } else {
      ungrouped.push(field);
    }
  });

  const result: (PlaceholderField | GroupedField)[] = [...ungrouped];

  // Convert groups to GroupedField objects
  grouped.forEach((fields, groupKey) => {
    if (fields.length > 1) {
      // Sort by index
      fields.sort((a, b) => (a.groupIndex || 0) - (b.groupIndex || 0));

      // Update group size for all fields
      fields.forEach(field => {
        field.groupSize = fields.length;
      });

      const groupedField: GroupedField = {
        groupKey,
        label: groupKey.replace(/_/g, ' ').replace(/^./, str => str.toUpperCase()),
        type: 'otp',
        fields,
        groupSize: fields.length
      };

      result.push(groupedField);
    } else {
      // Single field, add back as ungrouped
      result.push(fields[0]);
    }
  });

  return result;
}

export function replacePlaceholders(htmlContent: string, values: Record<string, string>): string {
  let result = htmlContent;

  Object.entries(values).forEach(([key, value]) => {
    const regex = new RegExp(`\\{\\{${key}\\}\\}`, 'g');
    result = result.replace(regex, value || `{{${key}}}`);
  });

  return result;
}