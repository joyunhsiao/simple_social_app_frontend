import { BrowserRouter, Route, Routes } from "react-router";
import { Authform, EditProfile, Followers, Home, LikedPosts, Login, NotFound, Post, Register, UserProfile } from "../pages";

export const AppRoutes = () => {
  return <>
    <BrowserRouter>
      <Routes>
        <Route element={<Authform />}>
          <Route index path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route index path="/" element={<Home />} />
        <Route path="/followers" element={<Followers />} />
        <Route path="/liked-posts" element={<LikedPosts />} />
        <Route path="/post" element={<Post />} />
        <Route path="/profile">
          <Route index path="edit" element={<EditProfile />} />
          <Route path=":username" element={<UserProfile />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </>
}