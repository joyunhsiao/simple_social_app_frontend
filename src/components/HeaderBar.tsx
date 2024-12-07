import { useState } from "react";
import { CircularImageWrapper } from "./CircularImageWrapper"

export const HeaderBar: React.FC = () => {
  const [isMenuShow, setIsMenuShow] = useState(false);
  const handleAvatarClick = () => {
    setIsMenuShow(prev => !prev);
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
          MetaWall
        </h1>
        <div className="relative inline-block text-left">
          <a onClick={handleAvatarClick} className="
            flex
            gap-1
            sm:gap-2
            cursor-pointer
          ">
            <CircularImageWrapper
              imgSrc="./src/assets/profile_photo.jpg"
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
            <a href="#" className="
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
            <a href="#" className="
              block
              px-4
              py-2
              text-sm
              text-custom-black
              border-b-2
              border-custom-black
              hover:bg-custom-gray-light
            ">
              Support
            </a>
            <a href="#" className="
              block
              px-4
              py-2
              text-sm
              text-custom-black
              border-b-2
              border-custom-black
              hover:bg-custom-gray-light
            ">
              License
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