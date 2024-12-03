import React from "react";

interface InputFieldProps {
  type: "text" | "password";
  placeholder?: string;
  value?: string;
  onChange: (value: string) => void;
}

export const InputField: React.FC<InputFieldProps> = ({
  type,
  placeholder = "",
  value = "",
  onChange
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return <>
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      className="
      w-full
      bg-custom-white
      border-2
      border-custom-black
      py-4
      px-6
      placeholder:text-custom-gray
      focus:outline-none
      focus:ring-2
    "/>
  </>
}