import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { assets } from '../assets/assets';

const Orders = ({ url }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    try {
      const response = await axios.get(url + '/api/order/list');
      if (response.data.success) {
        setOrders(response.data.data);
        console.log(response.data.data);
      } else {
        toast.error('Error');
      }
    } catch (error) {
      toast.error('Error fetching orders');
    }
  };

  const statusHandler = async(event, orderId)=>{
    const response = await axios.post(url + '/api/order/status',{
      orderId,
      status:event.target.value
    })
    if (response.data.success) {
      await fetchAllOrders();
    }
  }

  useEffect(() => {
    fetchAllOrders();
  }, []);

  return (
    <div className="order add gap-2 p-12">
      <h3 className='text-xl font-semibold'>Order Page</h3>
      <div className="order-list">
        {orders.map((order, index) => (
          <div
            key={index}
            className="order-item grid grid-cols-[0.5fr_2fr_1fr_1fr_1fr] items-start gap-7 border border-orangered p-5 my-7 text-sm text-gray-700"
          >
            <img src={assets.parcel_icon} alt="" className="w-[50px]" />
            <div>
              <p className="order-item-food font-semibold">
                {order.items.map((item, index) => (
                  <span key={index}>
                    {item.name} x {item.quantity}
                    {index < order.items.length - 1 ? ', ' : ''}
                  </span>
                ))}
              </p>
              <p className="order-item-name font-semibold mt-7 mb-1">
                {order.address.firstName} {order.address.lastName}
              </p>
              <div className="order-item-address mb-2">
                <p>{order.address.street},</p>
                <p>
                  {order.address.city}, {order.address.state},{' '}
                  {order.address.country}, {order.address.zipcode}
                </p>
              </div>
              <p className="order-item-phone">{order.address.phone}</p>
            </div>
            <p>Items: {order.items.length}</p>
            <p>${order.amount}</p>
            <select onChange={(event)=>statusHandler(event,order._id)} value={order.status}
              className="bg-[#ffe8e4] border border-orangered w-[max(10vw,120px)] p-2 outline-none"
            >
              <option value="Food Processing">Food Processing</option>
              <option value="Out For Delivery">Out For Delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
