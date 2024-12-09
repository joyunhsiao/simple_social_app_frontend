import { useState } from "react";
import { useNavigate } from "react-router";

interface UserInfoCardProps {
  name: string;
}

export const UserInfoCard: React.FC<UserInfoCardProps> = ({
  name
}) => {
  const navigate = useNavigate();

  const [isFollowing, setIsFollowing] = useState(false);

  const handleNameClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    navigate("/"); // todo
  };

  const handleFollowClick = () => {
    setIsFollowing(prev => !prev);
    // todo
  };

  return <>
    <div className="
      bg-custom-white
      flex
      rounded-lg
      ring-2
      ring-custom-black
      overflow-hidden
      mb-4
    ">
      <div className="
        w-20
        border-r-2
        border-custom-black
      ">
        <img src="../src/assets/profile_photo.jpg" alt="profile photo" className="
          h-full
        "/>
      </div>
      <div className="
        flex-grow
        flex
        justify-between
        items-center
        p-4
      ">
        <div>
          <a href="#" onClick={(e) => handleNameClick(e)} className="
            text-custom-black
            font-bold
            hover:underline
            hover:text-custom-blue
          ">
            {name}
          </a>
          <p className="
            text-custom-black
          ">
            987,987 people are following
          </p>
        </div>
        <button
          type="button"
          title={isFollowing ? "Unfollow" : "Follow"}
          onClick={handleFollowClick}
          className={
            isFollowing === true ? (
              "font-bold bg-custom-gray-light text-custom-black ring-2 ring-custom-black rounded-lg py-1 px-8"
            ) : (
              "font-bold bg-custom-yellow text-custom-black ring-2 ring-custom-black rounded-lg py-1 px-8"
            )
          }>
          {isFollowing ? "Unfollow" : "Follow"}
        </button>
      </div>
    </div>
  </>
}
