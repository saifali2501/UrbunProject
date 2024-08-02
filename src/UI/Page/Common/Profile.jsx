import React from "react"

import { useNavigate } from "react-router-dom"
import { logOut } from "../../../Redux/Feature/Auth/AuthSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Profile() {
    let { user } = useSelector((state) => state.AuthSlice);
  
    const navigate = useNavigate()

    const disptch = useDispatch()
 
    // logout handler
    const logoutHandler = () => {
       
        navigate("/")
        disptch(logOut())
       
    }

    return (
        <div className="ml-36 mr-36">
            <h1 className="text-center mb-14 text-4xl font-semibold mt-3">ACCOUNT</h1>
            <h3 className="font-semibold text-xl mb-9">ACCOUNT DETAILS</h3>
            <div>
                <ul>
                    <li className="py-3 border-b-2">
                       Name :{user?.tittle || "user"}
                    </li>
                    <li className="py-3 border-b-2">Email : {user?.email} </li>
                    <li className="py-3 border-b-2">User Type :{user?.userType} </li>
                    {
                        user?.userType !== "admin" &&
                        <>
                            <li className="py-3 border-b-2">
                                ADDRESS : {user?.address?.[0]?.add}
                            </li>
                            <li className="py-3 border-b-2">COUNTRY: India</li>
                            <li className="py-3 border-b-2">
                                ZIP: {user?.address?.[0]?.pinCode}
                            </li>
                            <li className="py-3 mb-5 border-b-2">
                                PHONE: {user?.number}
                            </li>
                        </>
                    }
                    
                </ul>
                <button className="p-2 mt-4 rounded-md !border-2 font-semibold !border-[#d11e33] text-[#d11e33] hover:text-white hover:bg-[#d11e33]" onClick={() => logoutHandler()}>LOGOUT</button>
            </div>
        </div>
    )
}
