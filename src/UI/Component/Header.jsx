import React from "react";
import { faHeart, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CarFront, User } from "lucide-react";
import logo from "../../../public/logoTv.avif";
import { NavItem, Tooltip } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const menuItem = [
    { label: "Track Order", redirect: "" },
    { label: "All Products", redirect: "/product/all" },
    { label: "Casual Backpacks", redirect: "/product/casual" },
    { label: "Professional", redirect: "/product/professional" },
    { label: "Travel", redirect: "/product/travel" },
    { label: "Sports", redirect: "/product/sports" },
    { label: "School Bags", redirect: "/product/school" },
    { label: "Corporate gifting", redirect: "" },
    { label: "Best Offer", redirect: "" },
    { label: "Lunch Bags", redirect: "/product/lunchBag" },
    { label: "Blogs", redirect: "" },
    { label: "Contact Us", redirect: "" },
  ];

  const adminMenuItems = [
    { label: "Dashboard", link: "/dashboard" },
    { label: "Product", link: "/product" },
    { label: "User", link: "/user" },
    { label: "Order", link: "/admin-order" },
  ];

  const navigate = useNavigate();
  const data = useSelector((state) => {
    return state.AuthSlice;
  });
  const isAdmin = data?.user?.userType === "admin";

  return (
    <>
      <div>
        <p className="text-center py-1 text-sm text-white bg-[#d11e33] m-0">
          <marquee>
            Get Rs 100 Off on Prepaid Orders | Free Shipping All Over India
          </marquee>
        </p>
        <div className="bg-[#f7f8fa] border-b border-gray-200 flex px-2 py-2 justify-around text-[#777777]">
          <ul className='flex gap-3 text-sm py-2 m-0 p-0 items-center'>
            {menuItem?.map((item, index) => (
              <li key={index}>
                <NavLink to={item.redirect} className="text-decoration-none text-black hover:!text-[#d11e33]">
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="border border-gray-400 rounded-md flex justify-center items-center pl-3 pr-1 bg-white">
            <FontAwesomeIcon
              icon={faSearch}
              className="text-gray-400 cursor-pointer"
            />
            <input
              placeholder="SEARCH PRODUCTS..."
              className="border-none shadow-none focus:outline-none ps-2 py-1"
            />
          </div>
        </div>
      </div>

      <div className="border-b border-gray-200 flex items-center justify-between px-8 py-2">
        <div className="cursor-pointer pb-2" onClick={() => navigate("/")}>
          <img src={logo} alt="Logo" />
        </div>
        {isAdmin && (
          <ul className="flex items-center gap-5 [*_&]:mx-3 [&_a]:!no-underline m-0 p-0 [&_a]:text-[#191919] w-[37%]">
            {adminMenuItems.map((menuItem, index) => (
              <NavItem key={index}>
                <NavLink
                  to={menuItem.link}
                  className="hover:!text-[#d11e33] font-semibold"
                >
                  {menuItem.label}
                </NavLink>
              </NavItem>
            ))}
          </ul>
        )}

        <div className="flex gap-6 items-center">
          <div>
            <User
              onClick={() => navigate("/profile")}
              className="text-[#d11e33]"
              role="button"
            />
          </div>
          <p className="text-[#d11e33] m-0 flex gap-1 text-sm">
            <span
              onClick={() => navigate("/signin")}
              className="hover:text-black cursor-pointer"
            >
              Sign In
            </span>
            <span className="text-gray-300">or</span>
            <span
              onClick={() => navigate("/signup")}
              className="hover:text-black cursor-pointer"
            >
              Register
            </span>
          </p>

          <Tooltip
            content="Wishlist"
            placement="bottom"
            animation="duration-500"
          >
            <NavLink className="text-decoration-none group/item">
              <div className="flex items-center">
                <FontAwesomeIcon
                  icon={faHeart}
                  className="text-2xl pr-2.5 text-[#d11e33] group-hover/item:!text-black"
                />
                <span className="text-black">WISHLIST</span>
              </div>
            </NavLink>
          </Tooltip>

          <Tooltip content="Cart" placement="bottom" animation="duration-500">
            <NavLink className="text-decoration-none group/item">
              <div className="flex items-center relative">
                <CarFront className="text-4xl pr-2.5 text-[#d11e33] group-hover/item:!text-black" />
                <span className="text-black">MY CART</span>
              </div>
            </NavLink>
          </Tooltip>
        </div>
      </div>
    </>
  );
}
