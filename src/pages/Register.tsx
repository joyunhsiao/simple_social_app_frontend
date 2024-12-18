import { useState } from "react";
import { Button, InputField } from "../components"
import { useNavigate } from "react-router";
import { axiosInstance } from "../connections/axios";

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
    axiosInstance.post("/users/register", {
      name: nicknameValue,
      email: emailValue,
      password: passwordValue
    })
      .then(response => {
        const token = response.data.user.token;
        localStorage.setItem('jwt', token);
      })
      .catch(error => {
        console.error("Error fetching public data:", error);
      });
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return <>
    <h2 className="
      font-azeret
      text-center
      text-custom-black
      text-xl
      mt-2
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