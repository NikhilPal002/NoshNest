import React from 'react';
import { menu_list } from '../assets/assets';

const ExploreMenu = ({ category, setCategory }) => {
    return (
        <div className='flex flex-col gap-5' id='explore-menu'>
            <h1 className='text-[#262626] font-medium pt-5 text-3xl'>Explore our menu</h1>
            <p className='max-w-[60%] text-[#808080] md:max-w-full md:text-md'>
                Choose from a diverse menu featuring a delectable array of sweet and tasty foods. Explore a diverse menu of mouth-watering dishes crafted with passion and quality ingredients
            </p>
            <div className='flex justify-between items-center gap-8 text-center my-5 overflow-x-auto scrollbar-hide'>
                {menu_list.map((item, index) => {
                    return (
                        <div onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)}
                            key={index}
                            className='flex flex-col items-center cursor-pointer'>
                            <img
                                className={`w-[7.5vw] min-w-[80px] cursor-pointer rounded-full transition duration-200 ${category === item.menu_name ? 'border-4 border-orange-500 p-1' : ''}`}
                                src={item.menu_image}
                                alt='' />
                            <p className='mt-2 text-[#747474] text-[max(1.4vw,16px)]'>{item.menu_name}</p>
                        </div>
                    )
                })}
            </div>
            <hr className='my-2 h-[2px] bg-[#e2e2e2] border-none' />
        </div>
    );
}

export default ExploreMenu;
