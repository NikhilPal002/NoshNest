import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';
import { StoreContext } from '../context/StoreContext';

const Navbar = ({ setShowLogin }) => {

  const [menu, setMenu] = useState('home');
  const [dropdownVisible, setDropdownVisible] = useState(false);
  
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  
  const navigate = useNavigate()
  
  const logout = () =>{
    localStorage.removeItem("token");
    setToken("");
    navigate('/');
  }


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
            <div className={getTotalCartAmount() === 0 ? "" : "absolute w-2.5 h-2.5 bg-orange-500 rounded-full top-[-8px] right-[-8px]"}></div>
          </div>
          {!token ? (
            <button
              onClick={() => setShowLogin(true)}
              className="bg-transparent text-[#49557e] text-base border border-orange-500 py-2 px-5 rounded-full cursor-pointer transition duration-300 hover:bg-[#fff4f2]"
            >
              Sign In
            </button>
          ) : (
            <div className="relative" onMouseEnter={() => setDropdownVisible(true)} onMouseLeave={() => setDropdownVisible(false)}>
              <img src={assets.profile_icon} alt="Profile" className="cursor-pointer" />
              {dropdownVisible && (
                <ul className="absolute right-0 z-10 flex-col gap-2.5 bg-[#fff2ef] p-3 pr-7 border border-orange-500 rounded-md outline outline-white list-none">
                  <li className="flex items-center gap-2.5 hover:bg-gray-100 cursor-pointer hover:text-orange-500">
                    <img src={assets.bag_icon} alt="Orders" className="w-5" />
                    <p>Orders</p>
                  </li>
                  <hr className="border-t border-gray-200" />
                  <li onClick={logout} className="flex items-center gap-2.5 cursor-pointer hover:text-orange-500 hover:bg-gray-100">
                    <img src={assets.logout_icon} alt="Logout" className="w-5" />
                    <p>Logout</p>
                  </li>
                </ul>
              )}
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default Navbar;
