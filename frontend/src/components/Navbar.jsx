import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';
import { StoreContext } from '../context/StoreContext';

const Navbar = ({setShowLogin}) => {

  const [menu, setMenu] = useState('home');

  const {getTotalCartAmount} = useContext(StoreContext);

  return (
    <div>
      <div className='flex justify-between items-center max-w-6xl mx-auto py-5'>
        <Link to='/'>
          <h1 className='font-bold text-2xl sm:text-3xl flex flex-wrap w-36'>
            <span className='text-orange-400 '>Nosh</span>
            <span className='text-orange-600 '>Nest.</span>
          </h1>
        </Link>
        <ul className='hidden sm:flex gap-4 items-center'>
          <Link to='/' >
            <li onClick={() => setMenu("home")} className={menu === "home" ? "pb-0.5 border-b-2 border-[#49557e] text-slate-700 cursor-pointer" : "cursor-pointer"}>Home</li>
          </Link>
          <a href='#explore-menu'>
            <li onClick={() => setMenu("menu")} className={menu === "menu" ? "pb-0.5 border-b-2 border-[#49557e]  text-slate-700 cursor-pointer" : "cursor-pointer"}>Menu</li>

          </a>
          <a href='#app-download' >
            <li onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "pb-0.5 border-b-2 border-[#49557e] text-slate-700 cursor-pointer" : "cursor-pointer"}>Mobile App</li>
          </a>
          <a href='/#footer' >
            <li onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "pb-0.5 border-b-2 border-[#49557e] text-slate-700 cursor-pointer" : "cursor-pointer"}>Contact Us</li>
          </a>
        </ul>

        <div className="flex items-center gap-4 sm:gap-8">
          <img src={assets.search_icon} alt="" className='w-6 sm:w-8' />
          <div className="relative">
            <Link to='/cart'>
            <img src={assets.basket_icon} alt="" className='w-6 sm:w-8' />
            </Link>
            <div className={getTotalCartAmount()===0?"":"absolute w-2.5 h-2.5 bg-orange-500 rounded-full top-[-8px] right-[-8px]"}></div>
          </div>
          <button onClick={()=>setShowLogin(true)} className="bg-transparent text-[#49557e] text-base border border-orange-500 py-2 px-5 rounded-full cursor-pointer transition duration-300 hover:bg-[#fff4f2]">Sign In</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
