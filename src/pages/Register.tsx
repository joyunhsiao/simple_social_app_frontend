import { useState } from "react";
import { Button, InputField } from "../components"
import { useNavigate } from "react-router";

export const Register: React.FC = () => {
  const navigate = useNavigate();

  const [nicknameValue, setNicknameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const handleEmailChange = (value: string) => {
    setEmailValue(value);
  };

  const handlePasswordChange = (value: string) => {
    setPasswordValue(value);
  };

  const handleNicknameChange = (value: string) => {
    setNicknameValue(value);
  };

  const handleSubmit = () => {
    console.log("Input Value:", nicknameValue, emailValue, passwordValue);
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
      Register
    </h2>

    <div className="mb-4">
      <InputField
        type="text"
        placeholder="Nickname"
        value={nicknameValue}
        onChange={handleNicknameChange}
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
        text="Register"
        onClick={handleSubmit}
      />
    </div>

    <div className="flex justify-center">
      <Button
        text="Login"
        theme="secondary"
        onClick={handleLogin}
      />
    </div>
  </>
}