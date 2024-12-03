import React from "react";

interface ButtonProps {
  text: string;
  disabled?: boolean;
  theme?: "primary" | "secondary";
  onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  text,
  disabled = false,
  theme = "primary",
  onClick
}) => {
  const handleClick = () => {
    onClick();
  };

  return <>
    <button
      type="button"
      title={text}
      disabled={disabled}
      onClick={handleClick}
      className={
        disabled === true ? (
          "w-full font-bold bg-custom-gray-medium-light text-custom-white border-2 border-custom-gray-darker rounded-lg p-4"
        ) : (
          theme === "primary" ? (
            "w-full font-bold bg-custom-blue text-custom-white border-2 border-custom-black rounded-lg p-4 hover:bg-custom-yellow"
          ) : ("text-custom-black")
        )
      }>
      {text}
    </button>
  </>
}