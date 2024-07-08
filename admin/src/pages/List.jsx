import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

const List = ({url}) => {

  const [list, setList] = useState([]);

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`)
    if (response.data.success) {
      setList(response.data.data);
    }
    else {
      toast.error("Error")
    }
  }

  const removeFood = async (foodId) => {
    const response = await axios.post(`${url}/api/food/remove`,{id:foodId})
    await fetchList();
    if(response.data.success) {
      toast.success(response.data.message);
    }
    else{
      toast.error("Error")
    }
  }

  useEffect(() => {
    fetchList();
  }, []);


  return (
    <div className=' w-[80%] p-12 flex flex-col gap-2 '>
      <p className='text-xl font-semibold'>All Foods List</p>
      <div className='list-table'>
        <div className='grid grid-cols-[0.5fr_2fr_1fr_1fr_0.5fr] items-center gap-[12px_15px] p-[12px_15px] border border-gray-300 text-md bg-gray-100'>
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item, index) => {
          return (
            <div key={index} className='grid grid-cols-[0.5fr_2fr_1fr_1fr_0.5fr] items-center gap-[12px_15px] p-[12px_15px] border border-gray-300 text-md'>
              <img src={`${url}/images/` + item.image} alt='' className='w-12' />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>${item.price}</p>
              <p onClick={() => { removeFood(item._id) }} className='cursor-pointer font-semibold text-md'>X</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default List
