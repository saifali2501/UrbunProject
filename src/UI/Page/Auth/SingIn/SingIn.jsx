import axios from "axios";
import { Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../../../Redux/Feature/Auth/AuthSlice";
import { useDispatch } from "react-redux";

export default function SingIn() {
  let [user, setUser] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    axios({
      method: "post",
      url: "http://localhost:9999/user/signin",
      data: user,
    })
      .then((res) => {
        console.log("Login successful:", res.data);
        dispatch(login(res.data));
        alert("User login successful");
        setUser({ email: "", password: "" }); 
        if (res?.data?.data?.userType === "admin") {
          navigate("/dashbord");
        } else {
          navigate("/");
        }
      })
      .catch((err) => {
        console.error("Login error:", err);
        alert("Something went wrong during login. Please try again.");
      });
  };

  return (
    <div className="">
      <h1 className="text-center p-10 font-medium text-3xl text-[#191919]">
        ALREADY REGISTERED?
      </h1>
      <div className="container">
        <div className="flex justify-center gap-3">
          <div className="border border-[#e9e7e7] w-[50%] px-[40px] py-[30px]">
            <h3 className="text-[#191919] text-2xl font-normal pb-3">
              NEW CUSTOMER
            </h3>
            <p className="text-[#777777] text-[13px] leading-5">
              By creating an account with our store, you will be able to move
              through the checkout process faster, store multiple shipping
              addresses, view and track your orders in your account and more.
            </p>
            <button
              type="submit"
              className="text-sm mt-3 transition-colors duration-500 hover:text-white border-2 border-[#d11e33] py-2 px-4 rounded-md hover:!bg-[#d11e33] !bg-white text-[#d11e33]"
              onClick={() => navigate("/singup")}
            >
              CREATE AN ACCOUNT
            </button>
          </div>
          <div className="border border-[#e9e7e7] px-[40px] py-[30px] ml-2 w-[50%] [&_input]:rounded-md [&_label]:font-semibold">
            <h3 className="text-[#191919] text-2xl font-normal pb-3">LOGIN</h3>
            <p className="text-sm text-[#777777]">
              If you have an account with us, please log in.
            </p>
            <form onSubmit={submitHandler} autoComplete="off">
              <label
                htmlFor="email"
                className="w-[100%] flex justify-between text-[#191919]"
              >
                <span>Email *</span>{" "}
                <span className="text-[#777777]">* Required Fields</span>
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter Your Email"
                className="mb-3 mt-2 w-full border-none bg-[#f7f8fa] focus:!ring-[#d11e33] focus:ring-1"
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                required
              />
              <label htmlFor="password">Password *</label>
              <div className="relative mb-4">
                <input
                  type="password"
                  id="password"
                  placeholder="Enter Your Password"
                  className="mt-2 w-full border-none bg-[#f7f8fa] focus:!ring-[#d11e33] focus:ring-1"
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                  required
                />
                <EyeOff className="absolute top-[32%] right-[3%] cursor-pointer hover:text-[#777777] text-[#d11e33]" />
                <Eye className="absolute top-[32%] right-[3%] cursor-pointer hover:text-[#d11e33] text-[#777777]" />
              </div>
              <div className="flex justify-between items-end">
                <button
                  type="submit"
                  className="text-sm transition-colors duration-500 hover:text-white border-2 border-[#d11e33] py-2 px-12 rounded-md hover:!bg-[#d11e33] !bg-white text-[#d11e33] me-4"
                >
                  Login
                </button>
                <p className="text-[#d11e33] cursor-pointer hover:text-[#191919] m-0">
                  Lost your password?
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
