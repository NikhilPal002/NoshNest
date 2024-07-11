import React, { useContext, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { StoreContext } from '../context/StoreContext';
import axios from 'axios';

const Verify = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const success = searchParams.get('success');
    const orderId = searchParams.get('orderId');
    const {url} = useContext(StoreContext);
    const navigate = useNavigate();

    const verifyPayment = async () =>{
        const response = await axios.post(url+"/api/order/verify", {success, orderId})
        if(response.data.success){
            navigate("/myOrders")
        }
        else{
            navigate("/")
        }
    }

    useEffect(()=>{
        verifyPayment();
    },[]);

  return (
    <div className='min-h-[60vh] grid'>
      <div className='w-[100px] h-[100px] place-self-center border-[5px] border-solid border-gray-400 border-t-orangered rounded-full animate-rotate'>

      </div>
    </div>
  )
}

export default Verify
