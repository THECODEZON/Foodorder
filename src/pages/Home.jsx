import React, { useContext, useState } from 'react'
import Nav from '../components/Nav'
import Categories from '../Category'
import Card from '../components/Card'
import { food_items } from '../food'
import { dataContext } from '../context/UserContext'
import { RxCross2 } from "react-icons/rx";
import Card2 from '../components/Card2'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import ImageSlider from '../components/ImageSlider'
import SpecialOffers from '../components/SpecialOffers'
import OrderTracking from '../components/OrderTracking'

function Home() {
    let {cate,setCate,input,showCart,setShowCart}=useContext(dataContext)
    const [showOrderTracking, setShowOrderTracking] = useState(false)
    const [currentOrderId, setCurrentOrderId] = useState(null)

function filter(category){
    if(category==="All"){
        setCate(food_items)
    }else{
        let newList=food_items.filter((item)=>( item.food_category===category))
        setCate(newList)
    }
}

let items=useSelector(state=>state.cart)

let subtotal=items.reduce((total,item)=>total+item.qty*item.price,0)
let deliveryFee=20;
let taxes=subtotal*0.5/100;
let total = Math.floor(subtotal+deliveryFee+taxes)



  return (
    <div className='bg-slate-200 dark:bg-gray-900 w-full min-h-screen transition-colors duration-300'>
     <Nav/>
     <ImageSlider />
     <SpecialOffers />
     {!input?<div className='flex flex-wrap justify-center items-center gap-5 w-[100%]'>
        {Categories.map((item)=>{
    return <div className='w-[140px] h-[150px] bg-white dark:bg-gray-800 flex flex-col items-start gap-5 p-5 justify-start text-[20px] font-semibold text-gray-600 dark:text-gray-300 rounded-lg shadow-xl hover:bg-yellow-200 dark:hover:bg-yellow-700 cursor-pointer transition-all duration-200' onClick={()=>filter(item.name)}>
        {item.icon}
        {item.name}
         </div>
          
        })}
     </div>:null}
     
     <div className='w-full flex flex-wrap gap-5 px-5 justify-center items-center pt-8 pb-8'>
        {cate.length>1?cate.map((item)=>(
            <Card name={item.food_name} image={item.food_image} price={item.price} id={item.id} type={item.food_type}/>
        )):<div className='text-center text-2xl text-yellow-500 font-semibold pt-5'>no dish Found</div>}
        
     </div>

     <div className={`w-full md:w-[40vw] h-[100%] fixed top-0 right-0 bg-white dark:bg-gray-800 shadow-xl p-6 transition-all duration-500 flex flex-col items-center overflow-auto ${showCart?"translate-x-0":"translate-x-full"} `} >
        <header className='w-[100%] flex justify-between items-center'>
<span className='text-yellow-400 dark:text-yellow-300 text-[18px] font-semibold'>Order items</span>
<RxCross2 className='w-[30px] h-[30px] text-yellow-400 dark:text-yellow-300 text-[18px] font-semibold cursor-pointer hover:text-gray-600 dark:hover:text-gray-400' onClick={()=>setShowCart(false)}/>
        </header>

        {items.length>0? <>
       <div className='w-full mt-9 flex flex-col gap-8'>
      {items.map((item)=>(
        <Card2 name={item.name} price={item.price} image={item.image} id={item.id} qty={item.qty}/>
      ))}
       </div>
       <div className='w-full border-t-2 border-b-2 border-gray-400 dark:border-gray-600 mt-7 flex flex-col gap-2 p-8'>
<div className='w-full flex justify-between items-center'>
    <span className='text-lg text-gray-600 dark:text-gray-300 font-semibold'>Subtotal</span>
    <span className='text-yellow-400 dark:text-yellow-300 font-semibold text-lg'>Rs {subtotal}/-</span>
</div>
<div className='w-full flex justify-between items-center'>
    <span className='text-lg text-gray-600 dark:text-gray-300 font-semibold'>Delivery Fee</span>
    <span className='text-yellow-400 dark:text-yellow-300 font-semibold text-lg'>Rs {deliveryFee}/-</span>
</div>
<div className='w-full flex justify-between items-center'>
    <span className='text-lg text-gray-600 dark:text-gray-300 font-semibold'>Taxes</span>
    <span className='text-yellow-400 dark:text-yellow-300 font-semibold text-lg'>Rs {taxes}/-</span>
</div>
       </div>
       <div className='w-full flex justify-between items-center p-9'>
    <span className='text-2xl text-gray-600 dark:text-gray-300 font-semibold'>Total</span>
    <span className='text-yellow-400 dark:text-yellow-300 font-semibold text-2xl'>Rs {total}/-</span>
</div>
<button className='w-[80%] p-3 rounded-lg bg-yellow-500 text-white hover:bg-yellow-400 transition-all' onClick={()=>{
    const orderId = 'ORD-' + Date.now()
    setCurrentOrderId(orderId)
    toast.success("Order Placed! Order ID: " + orderId)
    setShowCart(false)
    setTimeout(() => setShowOrderTracking(true), 1000)
}}>Place Order</button>
</>
:
<div className='text-center text-2xl text-yellow-500 font-semibold pt-5'>
    Empty Cart
</div>
}
       
     </div>
     
     {showOrderTracking && (
      <OrderTracking 
        orderId={currentOrderId} 
        onClose={() => setShowOrderTracking(false)} 
      />
    )}
  </div>
  )
}

export default Home
