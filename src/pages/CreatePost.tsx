import { useState } from "react";
import { Button, PageHeader, SquareImageWrapper, UploadButton } from "../components";
import postPhoto from "../assets/post_photo.jpg";

export const CreatePost: React.FC = () => {
  const [textValue, setTextValue] = useState("");
  const [imgValue, setImgValue] = useState("");

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextValue(e.target.value);
  };

  const handleImgChange = () => {
    setImgValue(""); // todo
  };

  const handleSubmit = () => {
    console.log("Input Value:", textValue, imgValue);
  };

  return <>
    <PageHeader text="Create Post" />
    <div className="
      bg-custom-white
      ring-2
      ring-custom-black
      rounded-lg
      p-8
    ">
      <div className="mb-4">
        <p className="mb-1">
          Post Content
        </p>
        <textarea
          value={textValue}
          onChange={handleTextChange}
          placeholder="Enter your post content"
          rows={5}
          className="
            w-full
            border-2
            border-custom-black
            py-3
            px-4
            placeholder:text-custom-gray
            focus:outline-none
            focus:ring-inset
            focus:ring-2
        "/>
      </div>
      <div className="mb-4">
        <UploadButton
          text="Upload Image"
          onClick={handleImgChange}
        />
      </div>
      <div className="
        mb-8
      ">
        <SquareImageWrapper
          imgSrc={postPhoto}
          alt="post photo"
        />
      </div>
      <div className="
        w-80
        mx-auto
      ">
        <Button
          text="Submit Post"
          disabled={false}
          onClick={handleSubmit}
        />
      </div>
    </div>
  </>
}
