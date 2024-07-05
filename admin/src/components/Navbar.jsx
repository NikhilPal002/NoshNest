import React from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center p-2'>
            <div class="flex items-center ml-20" >
                <div>
                    <h1 className='font-bold text-2xl sm:text-3xl flex flex-wrap w-36'>
                        <span className='text-orange-400 '>Nosh</span>
                        <span className='text-orange-600 '>Nest.</span>
                    </h1>
                    <p class="text-sm text-gray-500">Admin Panel</p>
                </div>
            </div>
            <img className='w-10 mr-20' src={assets.profile_image} alt='' />
        </div>
    )
}

export default Navbar
