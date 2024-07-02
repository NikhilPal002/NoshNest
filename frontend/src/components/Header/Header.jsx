import React from 'react';
import headerImg from '../../assets/header_img.png'; 


const Header = () => {
    return (
        <div className='relative h-[34vw] mx-auto my-30 bg-cover bg-no-repeat rounded-2xl overflow-hidden' style={{ backgroundImage: `url(${headerImg})` }}>
            <div className='absolute inset-0 flex flex-col items-start justify-end p-6 md:p-12 bg-none bg-opacity-50 transition duration-300 animate-fadeIn'>
                <h2 className='font-semibold text-white text-xl md:text-4xl mb-6 md:mb-8'>Order your favourite food here</h2>
                <p className='text-white text-sm md:text-base mb-8 md:mb-8'>Discover culinary delights at our doorstep. Explore a diverse menu of mouth-watering dishes crafted with passion and quality ingredients. Indulge in an unforgettable dining experience with us.</p>
                <button className='bg-white text-gray-700 font-semibold py-3 px-8 rounded-full hover:bg-[#fff4f2] transition duration-300'>View Menu</button>
            </div>
        </div>
    );
}

export default Header;



