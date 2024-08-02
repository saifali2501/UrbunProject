// import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { login } from "../../../../Redux/Feature/Auth/AuthSlice";
import { useDispatch } from "react-redux";
import { login } from "../../../../Redux/Feature/Auth/AuthSlice";
import axios from "axios";
// import { BE_URL } from "../../../../Config";
// import { toast } from "react-toastify";
// import { useCookies } from "react-cookie";

export default function SingUp() {
  const initialUser = {
    name: "",
    email: "",
    num: "",
    password: "",
    conPassword: "",

    age: "",
  };

  const initialAddress = {
    add: "",
    city: "",
    state: "",
    pinCode: "",
  };
  const disptch=useDispatch()
  const [user, setuser] = useState(initialUser);
  const [address, setAddress] = useState(initialAddress);

  const handler = (e) => {
    console.log("🚀 ~ handler ~ e:==>", e)
    e.preventDefault();
    if (user.password !== user.conPassword)
      return alert("Password and confirm password does not match");
    axios({
      method: "post",
      url: "http://localhost:9999/user/signup",
      data: { ...user, address: [address] },
    })
      .then((res) => {
        console.log("🚀 ~ .then ~ res:============>", res)
       
        disptch(login(res.data));
        alert("User login success");
        setuser(initialUser);
        setAddress(initialAddress);
        
      })
      .catch((err) => {
        console.log(err)
        alert("Somthing is wrong");
      });
  };
  const navigate = useNavigate();
  return (
    <>
      <div className="py-8 flex items-center flex-col">
        <h1 className="font-medium text-3xl mb-12 text-[#191919]">
          CREATE AN ACCOUNT
        </h1>
        <div className="[&_input]:rounded-md [&_label]:font-semibold flex flex-col items-start border w-[50%] px-8 text-sm py-9">
          <h3 className="font-medium text-xl mb-4">PERSONAL INFORMATION</h3>
          <form method="post" autoComplete="off" onSubmit={(e)=>{handler(e)}}>
            <label
              htmlFor="name"
              className="w-[100%] flex justify-between text-[#191919]"
            >
              <span>Name *</span>{" "}
              <span className="text-[#777777]">* Required Fields</span>
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter Your Name"
              className="mb-3 mt-2 w-full border-none bg-[#f7f8fa] focus:!ring-[#d11e33] focus:ring-1"
              required
            />
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              value={user.email}
              onChange={(e) => setuser({ ...user, email: e.target.value })}
              placeholder="Enter Your Email"
              className="mb-3 mt-2 w-full border-none bg-[#f7f8fa] focus:!ring-[#d11e33] focus:ring-1"
              required
            />
            <label htmlFor="number">Number *</label>
            <input
              type="text"
              id="number"
              value={user.num}
              onChange={(e) => setuser({ ...user, num: e.target.value })}
              placeholder="Enter Your Number"
              className="mb-3 mt-2 w-full border-none bg-[#f7f8fa] focus:!ring-[#d11e33] focus:ring-1"
              required
              maxLength="10"
              minLength="2"
            />
            <label htmlFor="age">Age *</label>
            <input
              type="text"
              id="age"
              value={user.age}
              onChange={(e) => setuser({ ...user, age: e.target.value })}
              placeholder="Enter Your Number"
              className="mb-3 mt-2 w-full border-none bg-[#f7f8fa] focus:!ring-[#d11e33] focus:ring-1"
              required
            />

            <label htmlFor="add">Address-1 *</label>
            <input
              type="text"
              id="add"
              value={address.add}
              onChange={(e) => setAddress({ ...address, add: e.target.value })}
              placeholder="Enter Your Number"
              className="mb-3 mt-2 w-full border-none bg-[#f7f8fa] focus:!ring-[#d11e33] focus:ring-1"
              required
            />
            <label htmlFor="city">City *</label>
            <input
              type="text"
              id="city"
              value={address.city}
              onChange={(e) => setAddress({ ...address, city: e.target.value })}
              placeholder="Enter Your Number"
              className="mb-3 mt-2 w-full border-none bg-[#f7f8fa] focus:!ring-[#d11e33] focus:ring-1"
              required
            />
            <label htmlFor="state">State *</label>
            <input
              type="text"
              id="state"
              placeholder="Enter Your Number"
              value={address.state}
              onChange={(e) => setAddress({ ...address, state: e.target.value })}
              className="mb-3 mt-2 w-full border-none bg-[#f7f8fa] focus:!ring-[#d11e33] focus:ring-1"
              required
            />
            <label htmlFor="pincode">Pincode *</label>
            <input
              type="text"
              id="pincode"
              placeholder="Enter Your Number"
              value={address.pinCode}
              onChange={(e) => setAddress({ ...address, pinCode: e.target.value })}
              className="mb-3 mt-2 w-full border-none bg-[#f7f8fa] focus:!ring-[#d11e33] focus:ring-1"
              required
            />
            <label htmlFor="password">Password *</label>
            <input
              type="password"
              id="password"
              value={user?.password}
              onChange={(e)=>setuser({...user,password:e.target.value})}
              placeholder="Enter Your Number"
              className="mb-3 mt-2 w-full border-none bg-[#f7f8fa] focus:!ring-[#d11e33] focus:ring-1"
              required
            />
            <label htmlFor="conPassword">Confirm Password *</label>
            <input
              type="password"
              id="conPassword"
              placeholder="Enter Your Number"
              value={user?.conPassword}
              onChange={(e)=>setuser({...user,conPassword:e.target.value})}
              className="mb-3 mt-2 w-full border-none bg-[#f7f8fa] focus:!ring-[#d11e33] focus:ring-1"
              required
            />
            <div>
              <button className="mt-4 ring-2 ring-red-600 px-6 py-2 rou text-red-600 hover:bg-red-600 hover:text-white rounded-md" type="submit">
                CREATE
              </button>
              <span className="text-[#777777] ms-7">or</span>
              <span
                className="text-[#d11e33] hover:text-[#191919] cursor-pointer ps-1"
                onClick={(e) => navigate("/")}
              >
                Return to Store
              </span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
