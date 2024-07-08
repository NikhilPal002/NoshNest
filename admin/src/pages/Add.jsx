import React, {useState } from 'react';
import { assets } from '../assets/assets';
import axios from 'axios';
import { toast } from 'react-toastify';

const Add = ({url}) => {


    const [image,setImage] = useState(false);
    const [data,setData] = useState({
        name: "",
        description:"",
        price:"",
        category:"Salad"
    })

    const onChangeHandler = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setData(data=>({...data,[name]:value}))
    };

    const onSubmitHandler = async (event) => {
      event.preventDefault();
      const formData = new FormData();
      formData.append("name",data.name);
      formData.append("description",data.description)
      formData.append("price",Number(data.price))
      formData.append("category",data.category)
      formData.append("image",image)
      const response = await axios.post(`${url}/api/food/add`,formData)
      if(response.data.success){
        setData({
          name: "",
        description:"",
        price:"",
        category:"Salad"
        })
        setImage(false)
        toast.success(response.data.message)
      }
      else{{
        toast.error(response.data.message)
      }}
    }

  
  return (
    <div className='w-[70%] ml-[5vw] mt-10 text-[#6d6d6d] text-base'>
      <form onSubmit={onSubmitHandler} className='grid grid-cols-1 gap-5'>
        <div className='flex flex-col gap-2'>
          <p>Upload Image</p>
          <label htmlFor='image' className='cursor-pointer'>
            <img src={image?URL.createObjectURL(image):assets.upload_area} alt='Upload' className='w-32' />
          </label>
          <input onChange={(e)=>setImage(e.target.files[0])} type='file' id='image' className='hidden' required />
        </div>

        <div className='flex flex-col gap-2 '>
          <p>Product name</p>
          <input onChange={onChangeHandler} value={data.name} type='text' name='name' placeholder='Type here' className=' w-full max-w-[500px] px-3 py-2 border border-black rounded-md ' />
        </div>

        <div className='flex flex-col gap-2 w-full max-w-[500px]'>
          <p>Product description</p>
          <textarea  onChange={onChangeHandler} value={data.description} name='description' rows="6" placeholder='Write Content here' className='px-3 py-2 border border-black rounded-md'></textarea>
        </div>

        <div className='flex gap-5'>
          <div className='flex flex-col gap-2'>
            <p>Product category</p>
            <select  onChange={onChangeHandler} name='category' className='w-full max-w-[120px] px-3 py-2 border border-black rounded-md'>
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>

          <div className='flex flex-col gap-2'>
            <p>Product price</p>
            <input  onChange={onChangeHandler} value={data.price} type="number" name='price' placeholder='$20' className='w-full max-w-[120px] px-3 py-2 border border-black rounded-md' />
          </div>
        </div>

        <button type='submit' className='max-w-[120px] bg-black text-white px-4 py-2 rounded-md cursor-pointer'>ADD</button>
      </form>
    </div>
  );
}

export default Add;
