import { useState } from "react";
import { BiLike } from "react-icons/bi";
import { CircularImageWrapper } from "./CircularImageWrapper";
import { CommentDisplay } from "./CommentDisplay";
import profilePhoto from "../assets/profile_photo.jpg";

export const CommentSection: React.FC = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [commentValue, setCommentValue] = useState("");

  const handleLikeClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setIsLiked(prev => !prev);
  };

  const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCommentValue(e.target.value);
  };

  const handleCommentSend = () => {
    console.log("Input Value:", commentValue);
  };

  return <>
    <div className="
      pt-4
      mb-4
    ">
      <div className="
        flex
        items-center
        text-sm
      ">
        <a href="#" onClick={(e) => handleLikeClick(e)} className={`
          me-1
          p-1
          rounded-full
          ${isLiked ?
            "bg-custom-blue text-custom-white" : "text-custom-black"
          }
        `}>
          <BiLike size={20} />
        </a>
        12
      </div>
    </div>

    {/* CommentCreator */}
    <div className="
      flex
      items-center
      gap-3
    ">
      <CircularImageWrapper
        imgSrc={profilePhoto}
        alt="profile photo"
        size="sm"
      />
      <div className="
        w-full
        flex
        ring-2
        ring-custom-black
      ">
        <input
          type="text"
          placeholder="Comment..."
          value={commentValue}
          onChange={handleCommentChange}
          className="
            w-full
            bg-custom-white
            border-r-2
            border-custom-black
            py-1
            px-4
            placeholder:text-custom-gray
            focus:outline-none
            focus:ring-inset
            focus:ring-2
        "/>
        <button
          type="button"
          title="comment"
          onClick={handleCommentSend}
          className="
            text-custom-white
            bg-custom-blue
            py-1
            px-12
            hover:bg-custom-yellow
        ">
          Comment
        </button>
      </div>
    </div>

    <CommentDisplay name="A" />
    <CommentDisplay name="B" />
    <CommentDisplay name="C" />
    <CommentDisplay name="D" />
  </>
}