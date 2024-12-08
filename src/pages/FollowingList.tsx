import { FollowListItem, PageHeader } from "../components"

export const FollowingList: React.FC = () => {
  return <>
    <PageHeader text="Following List" />
    <FollowListItem name="A" />
    <FollowListItem name="B" />
    <FollowListItem name="C" />
    <FollowListItem name="D" />
  </>
}