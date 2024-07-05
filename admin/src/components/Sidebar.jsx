import React from 'react';
import { assets } from '../assets/assets';

const Sidebar = () => {
  return (
    <div className="w-[18%] min-h-screen border border-gray-400 border-t-0 text-[max(1vw,10px)]">
      <div className="pt-12 pl-[20%] flex flex-col gap-5">
        <div className="flex items-center gap-3 border border-gray-400 border-r-0 p-2.5 rounded-l-md cursor-pointer">
          <img src={assets.add_icon} alt="" />
          <p className="hidden md:block">Add items</p>
        </div>
        <div className="flex items-center gap-3 border border-gray-400 border-r-0 p-2.5 rounded-l-md cursor-pointer">
          <img src={assets.order_icon} alt="" />
          <p className="hidden md:block">List items</p>
        </div>
        <div className="flex items-center gap-3 border border-gray-400 border-r-0 p-2.5 rounded-l-md cursor-pointer">
          <img src={assets.order_icon} alt="" />
          <p className="hidden md:block">Orders</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
