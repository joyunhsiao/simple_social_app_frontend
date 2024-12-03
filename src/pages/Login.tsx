import { useState } from "react";
import { Button, InputField } from "../components"
import { useNavigate } from "react-router";

export const Login: React.FC = () => {
  const navigate = useNavigate();

  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const handleEmailChange = (value: string) => {
    setEmailValue(value);
  };

  const handlePasswordChange = (value: string) => {
    setPasswordValue(value);
  };

  const handleSubmit = () => {
    console.log("Input Value:", emailValue, passwordValue);
  };

  const handleRegister = () => {
    navigate("/register");
  };

  return <>
    <h2 className="
      text-custom-black
      text-xl
      mb-9
    ">
      Expand a new social circle
    </h2>

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
        text="Login"
        onClick={handleSubmit}
      />
    </div>

    <div className="flex justify-center">
      <Button
        text="Register"
        theme="secondary"
        onClick={handleRegister}
      />
    </div>
  </>
}