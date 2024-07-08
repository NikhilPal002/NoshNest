import React, { useContext, } from 'react'
import { assets } from '../assets/assets'
import { StoreContext } from '../context/StoreContext';

const FoodItem = ({ id, name, price, description, image }) => {

    const {cartItems, addToCart, removeFromCart,url} = useContext(StoreContext);


    return (
        <div className='w-full mx-auto rounded-lg shadow-md transition duration-300 animate-fadeIn'>
            <div className='relative w-full rounded-t-lg overflow-hidden'>
                <img className='w-full' src={url+"/images/"+image} alt='' />
                {!cartItems[id]
                    ? <img className='w-[35px] absolute bottom-[15px] right-[15px] cursor-pointer rounded-full' onClick={() => addToCart(id)} src={assets.add_icon_white} alt='' />
                    : <div className='absolute bottom-[15px] right-[15px] flex items-center gap-2.5 p-1.5 rounded-full bg-white'>
                        <img className='w-[30px]' onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt='' />
                        <p>{cartItems[id]}</p>
                        <img className='w-[30px]' onClick={() => addToCart(id)} src={assets.add_icon_green} alt='' />
                    </div>
                }
            </div>
            <div className='p-5'>
                <div className='flex justify-between items-center mb-2.5'>
                    <p className='text-lg font-medium'>{name}</p>
                    <img src={assets.rating_starts} alt='' className='w-[70px]' />
                </div>
                <p className='text-sm text-gray-600'>{description}</p>
                <p className='text-xl font-medium text-orange-500 my-2.5'>${price}</p>
            </div>
        </div>
    )
}

export default FoodItem
