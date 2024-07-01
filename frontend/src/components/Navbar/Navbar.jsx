import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { assets } from '../../assets/assets'

const Navbar = () => {
  const [menu, setMenu] = useState("home")

  return (
    <div>
      <div className='flex justify-between items-center max-w-6xl mx-auto py-5'>
        <Link to='/'>
          <h1 className='font-bold text-sm sm:text-xl flex flex-wrap w-36'>
            <span className='text-orange-400'>Nosh</span>
            <span className='text-orange-600'>Nest</span>
          </h1>
        </Link>
        <ul className='flex gap-4 items-center'>
          <Link to='/home' >
          <li onClick={() => setMenu("home")} className={menu === "home" ? "pb-0.5 border-b-2 border-[#49557e] text-slate-700 cursor-pointer" : "cursor-pointer"}>Home</li>
        </Link>
          <Link to='/menu'>
          <li onClick={() => setMenu("menu")} className={menu === "menu" ? "pb-0.5 border-b-2 border-[#49557e]  text-slate-700 cursor-pointer" : "cursor-pointer"}>Menu</li>
        
          </Link>
          <Link to='/mobile-app' >
          <li onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "pb-0.5 border-b-2 border-[#49557e] text-slate-700 cursor-pointer" : "cursor-pointer"}>Mobile App</li>
        </Link>
          <Link to='/contact-us' >
          <li onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "pb-0.5 border-b-2 border-[#49557e] text-slate-700 cursor-pointer" : "cursor-pointer" }>Contact Us</li>
          </Link>
        </ul>

        <div className="flex items-center gap-8">
          <img src={assets.search_icon} alt="" />
          <div className="relative">
            <img src={assets.basket_icon} alt="" />
            <div className="absolute w-2.5 h-2.5 bg-orange-500 rounded-full top-[-8px] right-[-8px]"></div>
          </div>
          <button className="bg-transparent text-[#49557e] text-base border border-orange-500 py-2 px-5 rounded-full cursor-pointer transition duration-300 hover:bg-[#fff4f2]">Sign In</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar

