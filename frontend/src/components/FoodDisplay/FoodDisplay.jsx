import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem';

const FoodDisplay = ({category}) => {

    const {food_list} = useContext(StoreContext);

  return (
    <div className='mt-8' id='food-display'>
    <h2 className='text-[max(2vw,24px)] font-semibold'>Top dishes near you</h2>
      <div className='grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] mt-8 gap-8 row-gap-12'>
        {food_list.map((item,index)=>{
            return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
        })}
      </div>
    </div>
  )
}

export default FoodDisplay
