import React from 'react';
import { assets } from '../assets/assets';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-[18%] min-h-screen border border-gray-400 border-t-0 text-[max(1vw,10px)]">
      <div className="pt-12 pl-[20%] flex flex-col gap-5">
        <NavLink 
          to='/add' 
          className={({ isActive }) => 
            `flex items-center gap-3 border border-gray-400 border-r-0 p-2.5 rounded-l-md cursor-pointer ${isActive ? 'bg-[#fff0ed] border-orange-400' : ''}`
          }
        >
          <img src={assets.add_icon} alt="Add Icon" />
          <p className="hidden md:block">Add items</p>
        </NavLink>
        <NavLink 
          to='/list' 
          className={({ isActive }) => 
            `flex items-center gap-3 border border-gray-400 border-r-0 p-2.5 rounded-l-md cursor-pointer ${isActive ? 'bg-[#fff0ed] border-orange-400' : ''}`
          }
        >
          <img src={assets.order_icon} alt="List Icon" />
          <p className="hidden md:block">List items</p>
        </NavLink>
        <NavLink 
          to='/orders' 
          className={({ isActive }) => 
            `flex items-center gap-3 border border-gray-400 border-r-0 p-2.5 rounded-l-md cursor-pointer ${isActive ? 'bg-[#fff0ed] border-orange-400' : ''}`
          }
        >
          <img src={assets.order_icon} alt="Orders Icon" />
          <p className="hidden md:block">Orders</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
