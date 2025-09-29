import React from 'react';
import { PlaceholderField, GroupedField } from './utils/placeholderParser';
import OtpInput from './OtpInput';

interface DynamicFormProps {
  fields: (PlaceholderField | GroupedField)[];
  values: Record<string, string>;
  onChange: (key: string, value: string) => void;
}

const DynamicForm: React.FC<DynamicFormProps> = ({ fields, values, onChange }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold py-4 text-ms-800 font-sans">Form Fields</h2>
      {fields.length === 0 ? (
        <p className="text-gray-500">No placeholders found in the HTML file.</p>
      ) : (
        <div className="grid gap-6">
          {fields.map((field) => {
            // Check if it's a grouped field (OTP style)
            if ('fields' in field && field.type === 'otp') {
              return (
                <OtpInput
                  key={field.groupKey}
                  groupedField={field}
                  values={values}
                  onChange={onChange}
                />
              );
            }

            // Regular single field
            const singleField = field as PlaceholderField;
            return (
              <div key={singleField.key} className="space-y-2">
                <label
                  htmlFor={singleField.key}
                  className="block text-sm font-medium text-gray-700"
                >
                  {singleField.label}
                  <span className="text-xs text-gray-500 ml-2">({singleField.key})</span>
                </label>
                <input
                  type={singleField.type}
                  id={singleField.key}
                  value={values[singleField.key] || ''}
                  onChange={(e) => onChange(singleField.key, e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-on-500 focus:border-on-500"
                  placeholder={`Enter ${singleField.label.toLowerCase()}`}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default DynamicForm;