import { LikedPostsItem, PageHeader } from "../components"

export const LikedPosts: React.FC = () => {
  return <>
    <PageHeader text="Posts I Liked" />
    <LikedPostsItem name="A" />
    <LikedPostsItem name="B" />
    <LikedPostsItem name="C" />
    <LikedPostsItem name="D" />
  </>
}