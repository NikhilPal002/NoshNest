import React, { useContext, useEffect, useState } from 'react';
import { StoreContext } from '../context/StoreContext';
import { assets } from '../assets/assets';
import axios from 'axios';

const MyOrders = () => {
  const { url, token } = useContext(StoreContext);
  const [data, setData] = useState([]);

  const fetchOrders = async () => {
    const response = await axios.post(url + '/api/order/userorders', {}, { headers: { token } });
    setData(response.data.data);
    console.log(response.data.data);
  }

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);

  return (
    <div className=" mt-12 mb-12">
      <h2 className='text-xl font-bold'>My Orders</h2>
      <div className="flex flex-col gap-5 mt-8">
        {data.map((order, index) => {
          return (
            <div
              key={index}
              className="grid md:grid-cols-[0.5fr_2fr_1fr_1fr_2fr_1fr] items-center gap-7 p-2 text-xs text-gray-700 border border-orangered
                grid-cols-[1fr_2fr_1fr] md:gap-1 md:text-sm"
            >
              <img src={assets.parcel_icon} alt="" className="w-[50px]" />
              <p className='font-semibold'>
                {order.items.map((item, index) => {
                  if (index === order.items.length - 1) {
                    return item.name + " x " + item.quantity;
                  } else {
                    return item.name + " x " + item.quantity + ", ";
                  }
                })}
              </p>
              <p>${order.amount}.00</p>
              <p>Items: {order.items.length}</p>
              <p>
                <span className="text-orangered">&#x25cf;</span>
                <b className="font-medium text-gray-700">{order.status}</b>
              </p>
              <button onClick={fetchOrders} className="border-none py-3 md:py-2 text-md font-semibold rounded bg-[#ffe1e1] cursor-pointer text-gray-700">
                Track Order
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MyOrders;
