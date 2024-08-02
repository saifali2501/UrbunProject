import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function ProtectedRouter({Component}) {
    const navigate = useNavigate()
    const data = useSelector((state) => state.AuthSlice)
    useEffect(() => {
        if (!data?.token || Object?.keys(data?.user || {}).length === 0) {
            navigate("/login")
            alert("you are not admin")
        }
    })

  return (
    <div>
      
      {Component}
    </div>
  )
}