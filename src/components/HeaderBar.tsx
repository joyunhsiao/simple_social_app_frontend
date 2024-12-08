import { useState } from "react";
import { CircularImageWrapper } from "./CircularImageWrapper"
import { useNavigate } from "react-router";

export const HeaderBar: React.FC = () => {
  const navigate = useNavigate();

  const [isMenuShow, setIsMenuShow] = useState(false);
  
  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    navigate("/");
  };

  const handleAvatarClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setIsMenuShow(prev => !prev);
  };

  const handleAccountSettingsClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    navigate("/profile/edit");
    handleAvatarClick(e);
  };

  return <>
    <div className="
      h-10
      sm:h-16
      bg-custom-white
      border-b-2
      border-custom-black
    ">
      <div className="
        max-w-4xl
        h-full
        flex
        justify-between
        items-center
        px-2
        mx-auto
      ">
        <h1 className="
          font-paytone
          text-custom-black
          text-2xl
        ">
          <a href="#" onClick={(e) => {handleLogoClick(e)}}>
            MetaWall
          </a>
        </h1>
        <div className="relative inline-block text-left">
          <a onClick={(e) => handleAvatarClick(e)} className="
            flex
            gap-1
            sm:gap-2
            cursor-pointer
          ">
            <CircularImageWrapper
              imgSrc="../src/assets/profile_photo.jpg"
              size="sm"
              alt="profile photo"
            />
            <p className="
              font-azeret
              font-bold
              pb-0
              px-1
              border-b-2
              border-custom-black
            ">
              Member
            </p>
          </a>
          <div className={`
            absolute
            right-0
            z-10
            mt-2
            w-56
            bg-white
            ring-2
            ring-custom-black
            focus:outline-none
            ${isMenuShow ? "" : "hidden"}
          `}>
            <a href="#" onClick={(e) => handleAccountSettingsClick(e)} className="
              block
              px-4
              py-2
              text-sm
              text-custom-black
              border-b-2
              border-custom-black
              hover:bg-custom-gray-light
            ">
              Account settings
            </a>
            <form method="POST" action="#">
              <button type="submit" className="
                block
                w-full
                px-4
                py-2
                text-left
                text-sm
                text-custom-black
                hover:bg-custom-gray-light
              ">
                Sign out
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </>
}