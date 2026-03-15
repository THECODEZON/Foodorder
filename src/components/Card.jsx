import React from 'react'
import image1 from "../assets/image1.avif"
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { AddItem } from '../redux/cartSlice';
import { addToFavorites, removeFromFavorites } from '../redux/favoritesSlice';
import { toast } from 'react-toastify';
function Card({name,image,id,price,type}) {
   let dispatch=useDispatch() 
   let favorites=useSelector(state=>state.favorites)
   let isFavorite=favorites.some(item=>item.id===id)

   const toggleFavorites=()=>{
    if(isFavorite){
        dispatch(removeFromFavorites(id))
        toast.info("Removed from favorites")
    }else{
        dispatch(addToFavorites({id,name,price,image,type}))
        toast.success("Added to favorites")
    }
   } 
  return (
    <div className='w-[300px] h-[400px] bg-white p-3 rounded-lg flex flex-col gap-3 shadow-lg hover:border-2 border-yellow-300 '>
      <div className='w-[100%] h-[60%] overflow-hidden rounded-lg'>
<img src={image} alt="" className='object-cover'/>
      </div>
      <div className='text-2xl font-semibold'>
{name}
      </div>
      <div className='w-full flex justify-between items-center'>
<div className='text-lg font-bold text-yellow-500'>Rs {price}/-</div>
<div className='flex justify-center items-center gap-2'>
    <button onClick={toggleFavorites} className='text-red-500 hover:text-red-600 transition-colors'>
        {isFavorite ? <FaHeart size={20} /> : <FaRegHeart size={20} />}
    </button>
    <div className='flex justify-center items-center gap-2 text-yellow-500 text-lg font-semibold'>{type==="veg"?<LuLeafyGreen />:<GiChickenOven />} <span>{type}</span></div>
</div>
      </div>
      <button className='w-full p-3 rounded-lg bg-yellow-500 text-white hover:bg-yellow-400 transition-all' onClick={()=>{dispatch(AddItem({id:id, name:name,price:price,image:image,qty:1}));
      toast.success("item added")
}
}>Add to dish</button>
    </div>
  )
}

export default Card
