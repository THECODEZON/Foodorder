import React from 'react'
import image1 from "../assets/image1.avif"
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import { useDispatch } from 'react-redux';
import { AddItem } from '../redux/cartSlice';
import { toast } from 'react-toastify';
function Card({name,image,id,price,type}) {
   let dispatch=useDispatch() 
  return (
    <div className='w-[280px] sm:w-[300px] h-[380px] sm:h-[400px] bg-white p-3 rounded-lg flex flex-col gap-3 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-yellow-300 cursor-pointer'>
      <div className='w-[100%] h-[60%] overflow-hidden rounded-lg relative group'>
<img src={image} alt={name} className='object-cover w-full h-full group-hover:scale-110 transition-transform duration-300'/>
<div className='absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300'></div>
      </div>
      <div className='text-2xl font-semibold text-gray-800'>
{name}
      </div>
      <div className='w-full flex justify-between items-center'>
<div className='text-lg font-bold text-yellow-400'>Rs {price}/-</div>
<div className='flex justify-center items-center gap-2 text-yellow-400 text-lg font-semibold'>{type==="veg"?<LuLeafyGreen />:<GiChickenOven />} <span>{type}</span></div>
      </div>
      <button className='w-full p-3 rounded-lg bg-yellow-400 text-white hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105 font-semibold' onClick={()=>{
        dispatch(AddItem({id:id, name:name,price:price,image:image,qty:1}));
        toast.success(`${name} added to cart!`)
}
}>Add to Cart</button>
    </div>
  )
}

export default Card
