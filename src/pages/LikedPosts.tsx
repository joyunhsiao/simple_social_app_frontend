import { LikedPostsItem, PageHeader } from "../components"

export const LikedPosts = () => {
  return <>
    <PageHeader text="Posts I Liked" />
    <LikedPostsItem name="A" />
    <LikedPostsItem name="B" />
    <LikedPostsItem name="C" />
    <LikedPostsItem name="D" />
  </>
}