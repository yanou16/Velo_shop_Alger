import React from 'react';
import { colorOptions, colorLabels } from '../data/colors';

interface ColorPickerProps {
  colors: string[];
  selectedColor: string;
  onColorSelect: (color: string) => void;
}

export default function ColorPicker({ colors, selectedColor, onColorSelect }: ColorPickerProps) {
  return (
    <div className="flex gap-2 mt-3">
      {colors.map((color) => (
        <button
          key={color}
          onClick={() => onColorSelect(color)}
          className={`w-6 h-6 rounded-full ${colorOptions[color]} ${
            selectedColor === color ? 'ring-2 ring-offset-2 ring-indigo-600' : ''
          }`}
          title={colorLabels[color]}
        />
      ))}
    </div>
  );
}