
import React, { FC, ChangeEvent } from 'react';

interface RadioOption {
  label: string;
  value: string;
}

interface RadioGroupProps {
  label: string;
  name: string;
  options: RadioOption[];
  selectedValue: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export const RadioGroup: FC<RadioGroupProps> = ({ label, name, options, selectedValue, onChange, className }) => (
  <div className={`flex flex-col space-y-2 ${className}`}>
    <p className="font-semibold text-slate-600 text-sm">{label}</p>
    <div className="flex flex-wrap gap-x-6 gap-y-2">
      {options.map((option) => (
        <label key={option.value} className="flex items-center space-x-2 cursor-pointer">
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={selectedValue === option.value}
            onChange={onChange}
            className="form-radio h-4 w-4 text-blue-600 border-slate-300 focus:ring-blue-500 transition duration-150 ease-in-out"
          />
          <span className="text-slate-700">{option.label}</span>
        </label>
      ))}
    </div>
  </div>
);
