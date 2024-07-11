import React, { useContext, useEffect, useState } from 'react';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PlaceOrder = () => {
  const { getTotalCartAmount, token, food_list, cartItems, url } = useContext(StoreContext);

  const [data, setdata] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    pincode: "",
    country: "",
    phone: "",
  })

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setdata(data => ({ ...data, [name]: value }))
  }

  const placeOrder = async (event) => {
    event.preventDefault();
    let orderItems = [];
    food_list.map((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo);
      }
    })
    let orderData = {
      address: data,
      items: orderItems,
      amount:getTotalCartAmount()+2,
    }
    let response = await axios.post(url+"/api/order/place",orderData,{headers:{token}});
    if(response.data.success){
      const{session_url} = response.data;
      window.location.replace(session_url);
    }
    else{
      alert("Error");
    }
  }

  const navigate = useNavigate();

  useEffect(() =>{
    if(!token){
      navigate('/cart');
    }
    else if(getTotalCartAmount()===0){
      navigate('/cart')
    }
  },[token]);


  return (
    <form onSubmit={placeOrder} className='flex flex-col md:flex-row items-start justify-between gap-12 mt-24 px-4 md:px-0'>
      <div className='w-full max-w-[max(30%,500px)]'>
        <p className='text-[30px] font-semibold mb-12'>Delivery Information</p>
        <div className='flex flex-col md:flex-row gap-2'>
          <input required name='firstName' onChange={onChangeHandler} value={data.firstName} type='text' placeholder='First Name' className='mb-4 w-full p-2 rounded-sm border border-[#c5c5c5] outline-orange-600' />
          <input required name='lastName' onChange={onChangeHandler} value={data.lastName} type='text' placeholder='Last Name' className='mb-4 w-full p-2 rounded-sm border border-[#c5c5c5] outline-orange-600' />
        </div>
        <input required name='email' onChange={onChangeHandler} value={data.email} type='email' placeholder='Email address' className='mb-4 w-full p-2 rounded-sm border border-[#c5c5c5] outline-orange-600' />
        <input required name='street' onChange={onChangeHandler} value={data.street} type='text' placeholder='Street' className='mb-4 w-full p-2 rounded-sm border border-[#c5c5c5] outline-orange-600' />
        <div className='flex flex-col md:flex-row gap-2'>
          <input required name='city' onChange={onChangeHandler} value={data.city} type='text' placeholder='City' className='mb-4 w-full p-2 rounded-sm border border-[#c5c5c5] outline-orange-600' />
          <input required name='state' onChange={onChangeHandler} value={data.state} type='text' placeholder='State' className='mb-4 w-full p-2 rounded-sm border border-[#c5c5c5] outline-orange-600' />
        </div>
        <div className='flex flex-col md:flex-row gap-2'>
          <input required name='pincode' onChange={onChangeHandler} value={data.pincode} type='text' placeholder='Pin code' className='mb-4 w-full p-2 rounded-sm border border-[#c5c5c5] outline-orange-600' />
          <input required name='country' onChange={onChangeHandler} value={data.country} type='text' placeholder='Country' className='mb-4 w-full p-2 rounded-sm border border-[#c5c5c5] outline-orange-600' />
        </div>
        <input required name='phone' onChange={onChangeHandler} value={data.phone} type='text' placeholder='Phone' className='mb-4 w-full p-2 rounded-sm border border-[#c5c5c5] outline-orange-600' />
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
          <button type='submit' className='w-full md:w-[max(15vw,200px)] mt-6 p-3 text-white bg-orange-600 rounded-md cursor-pointer'>
            PROCEED TO PAYMENT
          </button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
