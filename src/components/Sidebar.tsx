import { useNavigate } from "react-router";
import { Button } from "./Button"
import { CircularImageWrapper } from "./CircularImageWrapper";
import { FaRegBell } from "react-icons/fa";
import { BiLike } from "react-icons/bi";


export const Sidebar = () => {
  const navigate = useNavigate();

  const handleCreatePost = () => {
    navigate("/post");
  };
  const handleMyPostsClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    navigate("/");
  };
  const handleFollowersClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    navigate("/following-list");
  };
  const handleLikedPostsClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    navigate("/liked-posts");
  };

  return <>
    <div className="
      bg-custom-white
      ring-2
      ring-custom-black
      px-6
      py-8
    ">
      <div className="
        mb-6
      ">
        <Button
          text="Create Post"
          onClick={handleCreatePost}
        />
      </div>
      <a onClick={handleMyPostsClick} className="
        flex
        gap-4
        items-center
        text-custom-black
        font-bold
        px-2
        mb-6
        cursor-pointer
        hover:text-custom-blue
      ">
        <CircularImageWrapper
          imgSrc="../src/assets/profile_photo.jpg"
          size="lg"
          alt="profile photo"
        />
        My Posts
      </a>
      <a href="#" onClick={(e) => handleFollowersClick(e)} className="
        flex
        gap-4
        items-center
        text-custom-black
        font-bold
        px-2
        mb-6
        cursor-pointer
        group
        hover:text-custom-blue
      ">
        <div className="
          min-w-12
          w-12
          h-12
          flex
          justify-center
          items-center
          rounded-full
          ring-2
          ring-custom-black
          text-custom-black
          bg-custom-blue-light
          group-hover:text-custom-white
          group-hover:bg-custom-blue
        ">
          <FaRegBell size={20} />
        </div>
        Followed Accounts
      </a>
      <a href="#" onClick={(e) => handleLikedPostsClick(e)} className="
        flex
        gap-4
        items-center
        text-custom-black
        font-bold
        px-2
        mb-6
        cursor-pointer
        group
        hover:text-custom-blue
      ">
        <div className="
          min-w-12
          w-12
          h-12
          flex
          justify-center
          items-center
          rounded-full
          ring-2
          ring-custom-black
          text-custom-black
          bg-custom-blue-light
          group-hover:text-custom-white
          group-hover:bg-custom-blue
        ">
          <BiLike size={20} />
        </div>
        Posts I Liked
      </a>
    </div>
  </>
}