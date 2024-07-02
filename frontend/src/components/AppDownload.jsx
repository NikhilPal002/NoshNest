import React from 'react';
import { assets } from '../assets/assets';

const AppDownload = () => {
    return (
        <div className='flex flex-col items-center mt-24' id='app-download'>
            <p className='text-center text-lg sm:text-4xl font-semibold mb-8'>
                For Better Experience Download <br />NoshNest App
            </p>
            <div className='flex justify-center gap-6 sm:gap-10'>
                <img
                    src={assets.play_store}
                    alt="Download from Play Store"
                    className='w-36 sm:w-44 lg:w-48 hover:scale-105 transition-transform cursor-pointer'
                />
                <img
                    src={assets.app_store}
                    alt="Download from App Store"
                    className='w-36 sm:w-44 lg:w-48 hover:scale-105 transition-transform cursor-pointer'
                />
            </div>
        </div>
    );
};

export default AppDownload;

