import React, { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <form className='flex flex-col md:flex-row items-start justify-between gap-12 mt-24 px-4 md:px-0'>
      <div className='w-full max-w-[max(30%,500px)]'>
        <p className='text-[30px] font-semibold mb-12'>Delivery Information</p>
        <div className='flex flex-col md:flex-row gap-2'>
          <input type='text' placeholder='First Name' className='mb-4 w-full p-2 rounded-sm border border-[#c5c5c5] outline-orange-600' />
          <input type='text' placeholder='Last Name' className='mb-4 w-full p-2 rounded-sm border border-[#c5c5c5] outline-orange-600' />
        </div>
        <input type='email' placeholder='Email address' className='mb-4 w-full p-2 rounded-sm border border-[#c5c5c5] outline-orange-600' />
        <input type='text' placeholder='Street' className='mb-4 w-full p-2 rounded-sm border border-[#c5c5c5] outline-orange-600' />
        <div className='flex flex-col md:flex-row gap-2'>
          <input type='text' placeholder='City' className='mb-4 w-full p-2 rounded-sm border border-[#c5c5c5] outline-orange-600' />
          <input type='text' placeholder='State' className='mb-4 w-full p-2 rounded-sm border border-[#c5c5c5] outline-orange-600' />
        </div>
        <div className='flex flex-col md:flex-row gap-2'>
          <input type='text' placeholder='Pin code' className='mb-4 w-full p-2 rounded-sm border border-[#c5c5c5] outline-orange-600' />
          <input type='text' placeholder='Country' className='mb-4 w-full p-2 rounded-sm border border-[#c5c5c5] outline-orange-600' />
        </div>
        <input type='text' placeholder='Phone' className='mb-4 w-full p-2 rounded-sm border border-[#c5c5c5] outline-orange-600' />
      </div>

      <div className='w-full max-w-[max(40%,500px)]'>
        <div className='flex-1 flex flex-col gap-5'>
          <h2 className='text-[26px] font-semibold mb-4'>Cart Totals</h2>
          <div>
            <div className='flex justify-between text-gray-700'>
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr className='my-2 bg-gray-600 ' />
            <div className='flex justify-between text-gray-700'>
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr className='my-2 bg-gray-600' />
            <div className='flex justify-between text-gray-700'>
              <p className='font-bold'>Total</p>
              <p className='font-bold'>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</p>
            </div>
          </div>
          <button className='w-full md:w-[max(15vw,200px)] mt-6 p-3 text-white bg-orange-600 rounded-md cursor-pointer'>
            PROCEED TO PAYMENT
          </button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
