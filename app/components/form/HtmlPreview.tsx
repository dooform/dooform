import React from 'react';

interface HtmlPreviewProps {
  htmlContent: string;
  title?: string;
}

const HtmlPreview: React.FC<HtmlPreviewProps> = ({ htmlContent, title = "Preview" }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold py-4 text-ms-800 font-sans">{title}</h2>
      <div className="bg-white border border-gray-300 rounded-lg shadow-sm overflow-hidden">
        <div className="bg-gray-50 px-4 py-2 border-b border-gray-200">
          <span className="text-sm text-gray-600">Document Preview</span>
        </div>
        <div className="p-4 max-h-[80vh] overflow-auto">
          <div
            className="w-full max-w-full overflow-hidden prose prose-sm max-w-none [&>*]:max-w-full [&_table]:w-full [&_table]:table-fixed"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        </div>
      </div>
    </div>
  );
};

export default HtmlPreview;