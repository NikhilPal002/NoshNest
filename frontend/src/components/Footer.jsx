import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex flex-col items-center gap-5 p-5 pt-20 text-slate-100 bg-slate-900 mt-24' id='footer'>
      <div className='w-full grid grid-cols-1 sm:grid-cols-footer gap-20'>
        <div className='flex flex-col items-start gap-5'>
          <h1 className='font-bold text-xl sm:text-3xl flex flex-wrap w-36'>
            <span className='text-orange-400 '>Nosh</span>
            <span className='text-orange-600 '>Nest.</span>
          </h1>
          <p>Bringing you the best flavors from around the world, one dish at a time. Thank you for choosing us to satisfy your culinary cravings.</p>
          <div className='flex gap-5'>
            <img src={assets.facebook_icon} alt='Facebook' className='w-10 h-10' />
            <img src={assets.twitter_icon} alt='Twitter' className='w-10 h-10' />
            <img src={assets.linkedin_icon} alt='LinkedIn' className='w-10 h-10' />
          </div>
        </div>
        <div className='flex flex-col items-start gap-5'>
          <h2 className='text-white'>COMPANY</h2>
          <ul className="list-none">
            <li className="mb-2 cursor-pointer">Home</li>
            <li className="mb-2 cursor-pointer">About Us</li>
            <li className="mb-2 cursor-pointer">Delivery</li>
            <li className="mb-2 cursor-pointer">Privacy Policy</li>
          </ul>
        </div>
        <div className='flex flex-col items-start gap-5'>
          <h2 className='text-white'>GET IN TOUCH</h2>
          <ul className="list-none">
            <li className="mb-2 cursor-pointer">+91-992-827-7262</li>
            <li className="mb-2 cursor-pointer">contact@noshnest.com</li>
          </ul>
        </div>
      </div>
      <hr  className='w-full h-1 bg-gray-500 my-5'/>
      <p className='text-center text-gray-500 text-sm'>copyright 2024 ©️ NushNest.com - All Right Reserved</p>
    </div>
  )
}

export default Footer
