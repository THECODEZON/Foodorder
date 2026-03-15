import React from 'react'
import image1 from "../assets/image1.avif"
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { DecrementQty, IncrementQty, RemoveItem } from '../redux/cartSlice';
function Card2({name,id,price,image,qty}) {
    let dispatch=useDispatch()
  return (
    <div className='w-full h-[100px] sm:h-[120px] p-2 shadow-lg flex justify-between'>
      <div className='w-[60%] h-full flex gap-3 sm:gap-5'>
        <div className='w-[60%] h-full overflow-hidden rounded-lg'>
            <img src={image} alt={name} className='object-cover w-full h-full'/>
        </div>
        <div className='w-[40%] h-full flex flex-col gap-2 sm:gap-3'>
            <div className='text-sm sm:text-lg text-gray-600 font-semibold'>{name}</div>
            <div className='w-[90px] sm:w-[110px] h-[40px] sm:h-[50px] bg-slate-400 flex rounded-lg overflow-hidden shadow-lg font-semibold border-2 border-yellow-400 text-sm sm:text-xl'>
                <button className='w-[30%] h-full bg-white flex justify-center items-center text-yellow-400 hover:bg-gray-200' onClick={()=>{
                  qty>1?dispatch(DecrementQty(id)):1
                }}>-</button>
                <span className='w-[40%] h-full bg-slate-200 flex justify-center items-center text-yellow-400'>{qty}</span>
                <button className='w-[30%] h-full bg-white flex justify-center items-center text-yellow-400 hover:bg-gray-200' onClick={()=>{
                  dispatch(IncrementQty(id))
                }}>+</button>
            </div>
        </div>
      </div>
      <div className='flex flex-col justify-start items-end gap-4 sm:gap-6'>
<span className='text-lg sm:text-xl text-yellow-400 font-semibold'>Rs {price}/-</span>
<RiDeleteBin6Line className='w-[25px] h-[25px] sm:w-[30px] sm:h-[30px] text-red-400 cursor-pointer' onClick={()=>dispatch(RemoveItem(id))}/>
      </div>
    </div>
  )
}

export default Card2
