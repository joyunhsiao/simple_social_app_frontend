import { Outlet } from "react-router";
import { AuthBox } from "../components";

export const Authform: React.FC = () => {
  return <>
    <div className="
      h-dvh
      flex
      justify-center
      items-center
      p-2
    ">
      <AuthBox>
        <Outlet />
      </AuthBox>
    </div>
  </>
}