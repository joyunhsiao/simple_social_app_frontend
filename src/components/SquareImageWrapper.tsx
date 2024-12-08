interface SquareImageWrapperProps {
  imgSrc: string;
  alt?: string;
}

export const SquareImageWrapper: React.FC<SquareImageWrapperProps> = ({
  imgSrc,
  alt = ""
}) => {
  return <>
    <img src={imgSrc} alt={alt} className="
      w-full
      h-40
      rounded-lg
      ring-2
      ring-custom-black
    " />
  </>
}