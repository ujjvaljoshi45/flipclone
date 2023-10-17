import React from 'react'
import { BsFillCartFill } from "react-icons/bs";
function Header() {
  return (
    <div className="w-full bg-[#2874F0] flex justify-between items-center px-5 pt-1 pb-3">
        <img src="flipkart.png" className="h-10 w-30" alt="" />
        <h1 className="text-white text-xl"><BsFillCartFill  /></h1>
    </div>
  )
}

export default Header