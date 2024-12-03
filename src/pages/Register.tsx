import { useState } from "react";
import { Button, InputField } from "../components"
import { useNavigate } from "react-router";

export const Register: React.FC = () => {
  const navigate = useNavigate();

  const [nickNameValue, setNickNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const handleEmailChange = (value: string) => {
    setEmailValue(value);
  };

  const handlePasswordChange = (value: string) => {
    setPasswordValue(value);
  };

  const handleNickNameChange = (value: string) => {
    setNickNameValue(value);
  };

  const handleSubmit = () => {
    console.log("Input Value:", nickNameValue, emailValue, passwordValue);
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return <>
    <h2 className="
      text-custom-black
      text-xl
      mb-9
    ">
      註冊
    </h2>

    <div className="mb-4">
      <InputField
        type="text"
        placeholder="暱稱"
        value={nickNameValue}
        onChange={handleNickNameChange}
      />
    </div>

    <div className="mb-4">
      <InputField
        type="text"
        placeholder="Email"
        value={emailValue}
        onChange={handleEmailChange}
      />
    </div>

    <div className="mb-8">
      <InputField
        type="password"
        placeholder="Password"
        value={passwordValue}
        onChange={handlePasswordChange}
      />
    </div>

    <div className="mb-4">
      <Button
        text="註冊"
        onClick={handleSubmit}
      />
    </div>

    <div className="flex justify-center">
      <Button
        text="登入"
        theme="secondary"
        onClick={handleLogin}
      />
    </div>
  </>
}