import { useState } from "react";
import { Button, InputField } from "../../components";

export const ResetPassword: React.FC = () => {
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");

  const handlePasswordChange = (value: string) => {
    setPassword(value);
  };

  const handlePasswordAgainChange = (value: string) => {
    setPasswordAgain(value);
  };

  const handleSubmit = () => {
    console.log("Input Value:", password, passwordAgain);
  };

  return <>
    <div className="mb-4">
      <span className="
        text-custom-black
        mb-1
      ">
        Enter New Password
      </span>
      <InputField
        type="password"
        placeholder="Please enter new password"
        value={password}
        onChange={handlePasswordChange}
      />
    </div>

    <div className="mb-8">
      <span className="
        text-custom-black
        mb-1
      ">
        Re-enter New Password
      </span>
      <InputField
        type="password"
        placeholder="Re-enter new password"
        value={passwordAgain}
        onChange={handlePasswordAgainChange}
      />
    </div>

    <Button
      text="Reset password"
      onClick={handleSubmit}
    />
  </>
}