
import React, { FC, ChangeEvent } from 'react';

interface CheckboxFieldProps {
  label: string;
  name: string;
  checked: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  'data-category': string;
}

export const CheckboxField: FC<CheckboxFieldProps> = ({ label, name, checked, onChange, 'data-category': dataCategory }) => (
  <div className="col-span-1 flex items-center">
    <label className="flex items-center space-x-3 cursor-pointer select-none">
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        data-category={dataCategory}
        className="form-checkbox h-5 w-5 text-blue-600 border-slate-300 rounded focus:ring-blue-500 transition duration-150 ease-in-out"
      />
      <span className="text-slate-700">{label}</span>
    </label>
  </div>
);
