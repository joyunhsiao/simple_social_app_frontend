import { useNavigate } from "react-router";
import { CircularImageWrapper } from "./CircularImageWrapper"

interface FollowListItemProps {
  name: string;
}

export const FollowListItem: React.FC<FollowListItemProps> = ({
  name
}) => {
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
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
        <a href="#" onClick={(e) => handleClick(e)} className="
          text-custom-black
          font-bold
          hover:underline
          hover:text-custom-blue
        ">
          {name}
        </a>
        <div className="
          flex
          justify-between
          text-sm
        ">
          <p className="
            text-custom-gray
          ">
            Follow Time: 8/12/2024 12:00
          </p>
          <p className="
            text-custom-black
          ">
            You have followed for 90 days!
          </p>
        </div>
      </div>
    </div>
  </>
};