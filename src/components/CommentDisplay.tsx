import { useNavigate } from "react-router";
import { CircularImageWrapper } from "./CircularImageWrapper";
import profilePhoto from "../assets/profile_photo.jpg";

interface CommentDisplayProps {
  name: string;
}

export const CommentDisplay: React.FC<CommentDisplayProps> = ({
  name
}) => {
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    navigate("/"); // todo
  };

  return <>
    <div className="
      bg-custom-gray-light
      rounded-xl
      flex
      gap-3
      p-4
      mt-4
    ">
      <CircularImageWrapper
        imgSrc={profilePhoto}
        alt="profile photo"
        size="sm"
      />
      <div className="
        w-full
      ">
        <a href="#" onClick={(e) => handleClick(e)} className="
          text-custom-black
          font-bold
          hover:underline
          hover:text-custom-blue
        ">
          {name}
        </a>
        <p className="
          text-custom-gray
          text-sm
          mb-2
        ">
          8/12/2024 12:00
        </p>
        <p className="
          text-custom-black
        ">
          Comment
        </p>
      </div>
    </div>
  </>
};