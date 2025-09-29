import React, { useRef, useEffect } from 'react';
import { GroupedField } from './utils/placeholderParser';

interface OtpInputProps {
  groupedField: GroupedField;
  values: Record<string, string>;
  onChange: (key: string, value: string) => void;
}

const OtpInput: React.FC<OtpInputProps> = ({ groupedField, values, onChange }) => {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, groupedField.fields.length);
  }, [groupedField.fields.length]);

  const handleInputChange = (index: number, value: string, fieldKey: string) => {
    // Only allow single character
    const newValue = value.slice(-1);
    onChange(fieldKey, newValue);

    // Auto-focus next input
    if (newValue && index < groupedField.fields.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    // Handle backspace to move to previous input
    if (e.key === 'Backspace' && !e.currentTarget.value && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
    // Handle arrow keys for navigation
    else if (e.key === 'ArrowLeft' && index > 0) {
      inputRefs.current[index - 1]?.focus();
    } else if (e.key === 'ArrowRight' && index < groupedField.fields.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').slice(0, groupedField.fields.length);

    groupedField.fields.forEach((field, index) => {
      if (index < pastedData.length) {
        onChange(field.key, pastedData[index]);
      }
    });

    // Focus the next empty input or the last input
    const nextEmptyIndex = groupedField.fields.findIndex((field, index) =>
      index < pastedData.length && index < groupedField.fields.length - 1
    );
    const focusIndex = nextEmptyIndex !== -1 ? Math.min(nextEmptyIndex + pastedData.length, groupedField.fields.length - 1) : groupedField.fields.length - 1;
    inputRefs.current[focusIndex]?.focus();
  };

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        {groupedField.label}
        <span className="text-xs text-gray-500 ml-2">({groupedField.groupKey})</span>
      </label>

      <div className="flex gap-2 flex-wrap">
        {groupedField.fields.map((field, index) => (
          <div key={field.key} className="flex flex-col items-center">
            <input
              ref={(el) => {
                inputRefs.current[index] = el;
              }}
              type="text"
              maxLength={1}
              value={values[field.key] || ''}
              onChange={(e) => handleInputChange(index, e.target.value, field.key)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              onPaste={handlePaste}
              className="w-12 h-12 text-center text-lg font-mono border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-on-500 focus:border-on-500"
              placeholder="0"
            />
            <span className="text-xs text-gray-400 mt-1">{index + 1}</span>
          </div>
        ))}
      </div>

      <div className="text-xs text-gray-500">
        Tip: You can paste a sequence of numbers to fill multiple fields at once
      </div>
    </div>
  );
};

export default OtpInput;