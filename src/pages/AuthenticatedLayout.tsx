import { HeaderBar } from "../components"
import { Outlet } from "react-router";

export const AuthenticatedLayout: React.FC = () => {
  return <>
    <HeaderBar />
    <Outlet />
  </>
}