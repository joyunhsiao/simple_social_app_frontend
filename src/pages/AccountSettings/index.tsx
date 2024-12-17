import { PageHeader, Tabs } from "../../components";
import { ResetPassword } from "./ResetPassword";
import { UpdateProfile } from "./UpdateProfile";

export const AccountSettings: React.FC = () => {

  return <>
    <PageHeader text="Account Settings" />
    <Tabs
      tabOne="Update profile"
      tabTwo="Reset pwd"
      childrenOne={<UpdateProfile />}
      childrenTwo={<ResetPassword />}
    />
  </>
}