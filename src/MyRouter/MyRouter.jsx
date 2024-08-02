import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../INSTA_CHAT/Pages/Login";
import ChatRoom from "../INSTA_CHAT/Pages/ChatRoom";
import Navbar from "../INSTA_CHAT/Component/Navbar";
import PrivateRouter from "./PrivateRouter";
import { AuthProvider } from "../AuthContext/AuthContex";

export default function MyRouter() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="chat" element={<PrivateRouter><ChatRoom /></PrivateRouter>} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
