import React, { useContext, useEffect, useState } from 'react'
import { MdFastfood } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { LuShoppingBag } from "react-icons/lu";
import { FaUser, FaUserCircle } from "react-icons/fa";
import { dataContext } from '../context/UserContext';
import { food_items } from '../food';
import { useSelector } from 'react-redux';
import Auth from './Auth';
import UserProfile from './UserProfile';

function Nav() {
    let {input,setInput,cate,setCate,showCart,setShowCart}=useContext(dataContext)
    const [showAuth, setShowAuth] = useState(false);
    const [showProfile, setShowProfile] = useState(false);
    const { user, isAuthenticated } = useSelector(state => state.auth);
    
    useEffect(()=>{
        let newlist=food_items.filter((item)=>item.food_name.includes(input)||item.food_name.toLowerCase().includes(input))
        setCate(newlist)
    },[input])
    let items=useSelector(state=>state.cart)
    console.log(items);
    
  return (
    <>
    <div className='w-full h-auto min-h-[80px] flex flex-col md:flex-row justify-between items-center px-3 md:px-8 py-2 md:py-0 gap-2'>
      <div className='w-[50px] h-[50px] md:w-[60px] md:h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl'>
      <MdFastfood className='w-[25px] h-[25px] md:w-[30px] md:h-[30px] text-yellow-400'/>
      </div>
      <form className='w-full md:w-[45%] h-[50px] md:h-[60px] bg-white flex items-center px-3 md:px-5 gap-3 md:gap-5 rounded-md shadow-md' onSubmit={(e)=>e.preventDefault()}>
      <IoSearch  className='text-yellow-400 w-[18px] h-[18px] md:w-[20px] md:h-[20px] '/>
      <input type="text" placeholder='Search Items...'  className='w-[100%] outline-none text-[14px] md:text-[16px]'  onChange={(e)=>setInput(e.target.value)} value={input}/>
      </form>
      <div className='flex items-center gap-4'>
        {isAuthenticated ? (
          <div className='flex items-center gap-3'>
            <div className='text-right'>
              <p className='text-sm text-gray-600'>Welcome,</p>
              <p className='text-sm font-semibold text-yellow-400'>{user?.name}</p>
            </div>
            <div 
              className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl relative cursor-pointer'
              onClick={() => setShowProfile(true)}
            >
              <FaUserCircle className='w-[25px] h-[25px] md:w-[30px] md:h-[30px] text-yellow-400' />
            </div>
          </div>
        ) : (
          <button
            onClick={() => setShowAuth(true)}
            className='bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition-colors flex items-center gap-2'
          >
            <FaUser />
            <span>Login</span>
          </button>
        )}
        
        <div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl relative cursor-pointer' onClick={()=>{
          setShowCart(true)
        }}>
          <span className='absolute top-0 right-1 md:right-2 text-yellow-400 font-bold text-[14px] md:text-[18px]'>{items.length}</span>
          <LuShoppingBag className='w-[25px] h-[25px] md:w-[30px] md:h-[30px] text-yellow-400'/>
        </div>
      </div>
    </div>
    {showAuth && <Auth onClose={() => setShowAuth(false)} />}
    {showProfile && <UserProfile onClose={() => setShowProfile(false)} />}
    </>
  )
}

export default Nav