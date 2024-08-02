import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../AuthContext/AuthContex";

export default function Login() {
  const navigate = useNavigate();
  const { currentUser, signInWithGoogle } = UserAuth();
  console.log("Current User in Login:", currentUser); // Debug log

  const handleLogin = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      console.log("Login Error:", error); // Debug log
    }
  };

  useEffect(() => {
    if (currentUser) {
      navigate("/chat");
    }
  }, []);

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hello there</h1>
          <p className="py-6">
            Join the conversation, meet new people, and make connections in one
            shared room.
          </p>
          <button onClick={handleLogin} className="btn btn-primary">
            LOGIN WITH GOOGLE
          </button>
        </div>
      </div>
    </div>
  );
}
