import React, { useState } from 'react'
import { assets } from '../assets/assets'

const LoginPopUp = ({ setShowLogin }) => {

    const [currState, setCurrState] = useState("Sign Up")

    return (
        <div className='fixed inset-0 z-10 bg-black/60 grid'>
            <form className='place-self-center w-[max(23vw,330px)] text-gray-500 bg-white flex flex-col gap-6 p-6 rounded-lg text-sm animate-fadeIn'>
                <div className='flex justify-between items-center text-black'>
                    <h2>{currState}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt='' className='w-4 cursor-pointer' />
                </div>
                <div className='flex flex-col gap-5'>
                    {currState === "Login" ? null : <input type="text" placeholder='Your Name' required className='outline-none border border-gray-300 p-2 rounded-md' />}

                    <input type="email" placeholder='Your Email' required className='outline-none border border-gray-300 p-2 rounded-md' />
                    <input type="password" placeholder='Password' required className='outline-none border border-gray-300 p-2 rounded-md' />
                </div>
                <button className='border-none p-2 rounded-md text-white bg-orange-600 text-base cursor-pointer'>{currState === "Sign Up" ? "Create an account" : "Login"}</button>
                <div className='flex items-start gap-2 -mt-4'>
                    <input type='checkbox' required className='mt-1' />
                    <p>By continuing, I agree to terms of use & privacy policy.</p>
                </div>
                {currState === "Login" ? <p>Create a new account? <span onClick={() => setCurrState("Sign Up")} className='text-orange-600 font-medium cursor-pointer'>Click Here</span></p>
                    : <p>Already have an account? <span onClick={() => setCurrState("Login")} className='text-orange-600 font-medium cursor-pointer'>Login here</span></p>}
            </form>
        </div>
    )
}

export default LoginPopUp
