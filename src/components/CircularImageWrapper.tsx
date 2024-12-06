import React from "react";

interface CircularImageWrapperProps {
  imgSrc: string;
  size?: "sm" | "md" | "lg";
  alt?: string;
}

export const CircularImageWrapper: React.FC<CircularImageWrapperProps> = ({
  imgSrc,
  size = "md",
  alt = ""
}) => {
  return <>
    {size === "sm" ? (
      <img src={imgSrc} alt={alt} className="
        w-7
        h-7
        sm:w-8
        sm:h-8
        rounded-full
        ring-2
        ring-custom-black
      " />
    ) : ( size === "md" ? (
      <img src={imgSrc} alt={alt} className="
        w-11
        h-11
        rounded-full
        ring-2
        ring-custom-black
      " />
    ) : (
      <img src={imgSrc} alt={alt} className="
        w-12
        h-12
        rounded-full
        ring-2
        ring-custom-black
      " />
    ))}
  </>
}