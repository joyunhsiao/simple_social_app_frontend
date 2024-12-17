import { useState } from "react";
import { Button, InputField, RadioGroup, UploadButton } from "../../components";
import { Gender } from "../../constants";
import { MdPerson } from "react-icons/md";

export const UpdateProfile: React.FC = () => {
  const [nickname, setNickname] = useState("");
  const [gender, setGender] = useState("");

  const handleNicknameChange = (value: string) => {
    setNickname(value);
  };

  const handleGenderChange = (value: string) => {
    setGender(value);
  };

  const handleUploadAvatar = () => {
    console.log("Upload Avatar Clicked");
  };

  const handleSubmit = () => {
    console.log("Input Value:", nickname, gender);
  };

  const options = [
    { label: "Male", value: Gender.Male },
    { label: "Female", value: Gender.Female },
    { label: "Non Binary", value: Gender.NonBinary },
    { label: "Prefer not to say", value: Gender.PreferNotToSay },
  ];

  return <>
    <div className="
      text-center
      mb-3
    ">
      <div className="
        w-28
        h-28
        flex
        justify-center
        rounded-full
        ring-2
        ring-custom-black
        mb-4
        mx-auto
        overflow-hidden
      ">
        <MdPerson size={110}/>
      </div>
      <UploadButton
        text="Upload Avatar"
        onClick={handleUploadAvatar}
      />
    </div>
    <div className="mb-4">
      <span className="
        text-custom-black
        mb-1
      ">
        Nickname
      </span>
      <InputField
        type="text"
        placeholder="Please enter new password"
        value={nickname}
        onChange={handleNicknameChange}
      />
    </div>

    <div className="mb-8">
      <span className="
        text-custom-black
        mb-1
      ">
        Gender
      </span>
      <RadioGroup
        options={options}
        selectedValue={gender}
        onChange={handleGenderChange}
      />
    </div>

    <Button
      text="Submit Update"
      onClick={handleSubmit}
    />
  </>
}