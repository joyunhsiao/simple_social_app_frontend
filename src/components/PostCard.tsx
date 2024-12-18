import { useNavigate } from "react-router";
import { CircularImageWrapper } from "./CircularImageWrapper";
import { SquareImageWrapper } from "./SquareImageWrapper";
import { CommentSection } from "./CommentSection";
import profilePhoto from "../assets/profile_photo.jpg";
import postPhoto from "../assets/post_photo.jpg";

interface PostCardProps {
  name: string;
  isImg?: boolean;
}

export const PostCard: React.FC<PostCardProps> = ({
  name,
  isImg = false
}) => {
  const navigate = useNavigate();

  const handleNameClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    navigate("/"); // todo
  };

  return <>
    <div className="
      bg-custom-white
      text-custom-black
      rounded-lg
      ring-2
      ring-custom-black
      p-6
      mb-4
    ">
      <div className="
        flex
        items-center
        gap-4
        mb-4
      ">
        <CircularImageWrapper
          imgSrc={profilePhoto}
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
            text-xs
          ">
            8/12/2024 12:00
          </p>
        </div>
      </div>
      <p>
        Content
      </p>
      {isImg && (
        <div className="mt-4">
          <SquareImageWrapper
            imgSrc={postPhoto}
            alt="post photo"
          />
        </div>
      )}
      <CommentSection />
    </div>
  </>
}