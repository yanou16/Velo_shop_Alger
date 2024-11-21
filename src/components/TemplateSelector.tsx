import React from 'react';
import { Layout, Columns, Rows } from 'lucide-react';
import type { CVTemplate } from '../types';

interface TemplateSelectorProps {
  selectedTemplate: CVTemplate;
  onTemplateChange: (template: CVTemplate) => void;
}

const TemplateSelector: React.FC<TemplateSelectorProps> = ({
  selectedTemplate,
  onTemplateChange,
}) => {
  const templates: { id: CVTemplate; name: string; icon: React.ReactNode }[] = [
    { id: 'modern', name: 'Modern', icon: <Layout className="w-5 h-5" /> },
    { id: 'classic', name: 'Classic', icon: <Columns className="w-5 h-5" /> },
    { id: 'minimal', name: 'Minimal', icon: <Rows className="w-5 h-5" /> },
  ];

  return (
    <div className="flex space-x-4 mb-6">
      {templates.map((template) => (
        <button
          key={template.id}
          onClick={() => onTemplateChange(template.id)}
          className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
            selectedTemplate === template.id
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          {template.icon}
          <span className="ml-2">{template.name}</span>
        </button>
      ))}
    </div>
  );
};

export default TemplateSelector;