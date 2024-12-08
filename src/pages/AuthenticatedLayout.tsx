import { HeaderBar, Sidebar } from "../components"
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
      <div className="flex gap-7">
        <div className="w-full">
          <Outlet />
        </div>
        <div className="max-w-80 w-full">
          <Sidebar />
        </div>
      </div>
    </div>
  </>
}