import React from 'react';
import { Plus, Trash2 } from 'lucide-react';
import type { Language } from '../types';

interface LanguageSectionProps {
  languages: Language[];
  onChange: (languages: Language[]) => void;
}

const LanguageSection: React.FC<LanguageSectionProps> = ({ languages, onChange }) => {
  const proficiencyLevels = ['Basic', 'Intermediate', 'Advanced', 'Native'] as const;

  const addLanguage = () => {
    onChange([...languages, { name: '', level: 'Basic' }]);
  };

  const removeLanguage = (index: number) => {
    onChange(languages.filter((_, i) => i !== index));
  };

  const updateLanguage = (index: number, field: keyof Language, value: string) => {
    const newLanguages = [...languages];
    newLanguages[index] = {
      ...newLanguages[index],
      [field]: value,
    };
    onChange(newLanguages);
  };

  return (
    <section className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Languages</h2>
        <button
          onClick={addLanguage}
          className="flex items-center text-blue-600 hover:text-blue-700"
        >
          <Plus className="w-4 h-4 mr-1" /> Add Language
        </button>
      </div>
      {languages.map((language, index) => (
        <div key={index} className="mb-4 p-4 border rounded relative">
          <button
            onClick={() => removeLanguage(index)}
            className="absolute top-2 right-2 text-red-500 hover:text-red-700"
          >
            <Trash2 className="w-4 h-4" />
          </button>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Language"
              className="p-2 border rounded"
              value={language.name}
              onChange={(e) => updateLanguage(index, 'name', e.target.value)}
            />
            <select
              className="p-2 border rounded"
              value={language.level}
              onChange={(e) => updateLanguage(index, 'level', e.target.value as Language['level'])}
            >
              {proficiencyLevels.map((level) => (
                <option key={level} value={level}>
                  {level}
                </option>
              ))}
            </select>
          </div>
        </div>
      ))}
    </section>
  );
};

export default LanguageSection;