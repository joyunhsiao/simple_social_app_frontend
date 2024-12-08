import { HeaderBar } from "../components"
import { Outlet } from "react-router";

export const AuthenticatedLayout: React.FC = () => {
  return <>
    <HeaderBar />
    <div className="
      max-w-4xl
      pt-12
      px-2
      mx-auto
    ">
      <Outlet />
    </div>
  </>
}