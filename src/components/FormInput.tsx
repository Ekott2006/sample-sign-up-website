import React from 'react';

interface FormInputProps {
  label: string;
  type: string;
}

const FormInput: React.FC<FormInputProps> = ({ label, type }) => {
  return (
    <label className="grid gap-1">
      {label}
      <input
        type={type}
        className="block border border-[#e6e6e6] w-[19.765vw] px-5 py-3 rounded-[5px] focus-within:outline-none focus-within:border focus-within:border-form-link-color focus-visible:border focus-visible:border-form-link-color focus-visible:outline-none "
      />
    </label>
  );
};

export default FormInput;
