import React from 'react';

interface ButtonProps {
  type: 'button' | 'submit';
  label: string;
  customStyles: string;
  icon?: string; 
}

const Button: React.FC<ButtonProps> = ({ type, label, customStyles, icon }) => {
  return (
    <button type={type} className={`w-[19.765vw] text-center border-none text-sm font-semibold tracking-tight h-12 rounded-md text-aside-white ${customStyles}`}>
      {icon && <img src={icon} alt="Icon" className="w-5 h-5" />}
      {label}
    </button>
  );
};

export default Button;
