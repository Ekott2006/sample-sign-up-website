import React from 'react';

interface CheckboxInputProps {
  label: React.ReactNode;
}

const CheckboxInput: React.FC<CheckboxInputProps> = ({ label }) => {
  return (
    <label className="flex items-center gap-1">
      <input type="checkbox" className="w-auto" />
      {label}
    </label>
  );
};

export default CheckboxInput;
