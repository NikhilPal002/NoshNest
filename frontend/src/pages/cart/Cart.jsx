import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, food_list, removeFromCart,getTotalCartAmount,url } = useContext(StoreContext)

  const navigate = useNavigate()


  return (
    <div className='mt-20'>
      <div>
        <div className='grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-gray-500 text-[max(1vw,12px)]'>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr className='h-px bg-gray-300 border-none' />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={index}>
                <div className='grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center my-2 text-black'>
                  <img src={url+"/images/"+item.image} alt='' className='w-12' />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p onClick={() => removeFromCart(item._id)} className='cursor-pointer'>X</p>
                </div>
                <hr className='h-px bg-gray-300 border-none' />
              </div>
            )
          }
        })}
      </div>

      <div className='mt-20 flex justify-between gap-[max(12vw,20px)] flex-col-reverse md:flex-row'>
        <div className='flex-1 flex flex-col gap-5'>
          <h2 className='text-[30px] font-semibold mb-2' >Cart Totals</h2>
          <div>
            <div className='flex justify-between text-gray-700'>
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr className='my-2' />
            <div className='flex justify-between text-gray-700'>
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr className='my-2' />
            <div className='flex justify-between text-gray-700'>
              <p className='font-bold'>Total</p>
              <p className='font-bold'>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</p>
            </div>
          </div>
          <button onClick={()=>navigate('/place-order')} className='w-full md:w-[max(15vw,200px)] mt-6 p-3 text-white bg-orange-600 rounded-md cursor-pointer'>
            PROCEED TO CHECKOUT
          </button>
        </div>
        <div className='flex-1'>
          <div>
            <p className='text-gray-700'>If you have a promo code, Enter it here</p>
            <div className='mt-2 flex justify-between items-center bg-gray-200 rounded-md'>
              <input type='text' placeholder='promo code' className='bg-transparent border-none outline-none pl-2' />
              <button className='w-[max(10vw,150px)] p-3 bg-black text-white rounded-md'>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
