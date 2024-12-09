interface UploadButtonProps {
  text: string;
  disabled?: boolean;
  onClick: () => void;
}

export const UploadButton: React.FC<UploadButtonProps> = ({
  text,
  disabled = false,
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
      className="
        bg-custom-black
        text-custom-white
        rounded-md
        py-1
        px-8
      ">
      {text}
    </button>
  </>
}