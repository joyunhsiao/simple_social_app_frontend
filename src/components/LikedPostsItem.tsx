import { useNavigate } from "react-router";
import { CircularImageWrapper } from "./CircularImageWrapper";
import { BiLike } from "react-icons/bi";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

interface LikedPostsItemProps {
  name: string;
}

export const LikedPostsItem: React.FC<LikedPostsItemProps> = ({
  name
}) => {
  const navigate = useNavigate();

  const handleNameClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    navigate("/"); // todo
  };

  const handleCancelClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    navigate("/"); // todo
  };

  const handleCheckClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    navigate("/"); // todo
  };

  return <>
    <div className="
      flex
      items-center
      gap-4
      bg-custom-white
      ring-2
      ring-custom-black
      rounded-lg
      p-4
      mb-4
    ">
      <CircularImageWrapper
        imgSrc="../src/assets/profile_photo.jpg"
      />
      <div className="
        w-full
      ">
        <a href="#" onClick={(e) => handleNameClick(e)} className="
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
        ">
          Post Time: 8/12/2024 12:00
        </p>
      </div>
      <div className="
        flex
        gap-9
      ">
        <a href="#" onClick={(e) => handleCancelClick(e)} className="
          text-sm
          flex
          flex-col
          items-center
          hover:text-custom-blue
        ">
          <BiLike size={20} />
          Cancel
        </a>
        <a href="#" onClick={(e) => handleCheckClick(e)} className="
          text-sm
          flex
          flex-col
          items-center
          hover:text-custom-blue
        ">
          <FaRegArrowAltCircleRight size={20} />
          Check
        </a>
      </div>
    </div>
  </>
};