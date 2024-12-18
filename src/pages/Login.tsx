import { useState } from "react";
import { Button, InputField } from "../components"
import { useNavigate } from "react-router";
import { axiosInstance } from "../connections/axios";

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
    axiosInstance.post("/users/login", {
      email: emailValue,
      password: passwordValue
    })
      .then(response => {
        const token = response.data.user.token;
        localStorage.setItem('jwt', token);
        navigate("/");
      })
      .catch(error => {
        console.error("Error fetching public data:", error);
      });
  };

  const handleRegister = () => {
    navigate("/register");
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