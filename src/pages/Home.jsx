import React, { useContext, useState } from 'react'
import Nav from '../components/Nav'
import Categories from '../Category'
import Card from '../components/Card'
import { food_items } from '../food'
import { dataContext } from '../context/UserContext'
import { RxCross2 } from "react-icons/rx";
import Card2 from '../components/Card2'
import DeliveryInfo from '../components/DeliveryInfo'
import ImageSlider from '../components/ImageSlider'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { FaTruck, FaUtensils, FaClock, FaStar } from 'react-icons/fa'

function Home() {
    let {cate,setCate,input,showCart,setShowCart,showDeliveryInfo,setShowDeliveryInfo}=useContext(dataContext)

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
    <div className='bg-gradient-to-br from-yellow-50 to-yellow-100 min-h-screen'>
     <Nav/>
     
     {/* Hero Section with Image Slider */}
     <div className='container mx-auto px-4 py-8'>
       <ImageSlider />
       
       {/* Features Section */}
       <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12'>
         <div className='bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow'>
           <FaTruck className='text-4xl text-yellow-500 mx-auto mb-3' />
           <h3 className='font-semibold text-gray-800 mb-2'>Fast Delivery</h3>
           <p className='text-gray-600 text-sm'>Free delivery on orders above ₹300</p>
         </div>
         <div className='bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow'>
           <FaUtensils className='text-4xl text-yellow-400 mx-auto mb-3' />
           <h3 className='font-semibold text-gray-800 mb-2'>Fresh Food</h3>
           <p className='text-gray-600 text-sm'>Made with fresh ingredients daily</p>
         </div>
           <div className='bg-white p-4 sm:p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow'>
           <FaClock className='text-4xl text-yellow-300 mx-auto mb-3' />
           <h3 className='font-semibold text-gray-800 mb-2'>Quick Service</h3>
           <p className='text-gray-600 text-sm'>30 minutes delivery guarantee</p>
         </div>
           <div className='bg-white p-4 sm:p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow'>
           <FaStar className='text-4xl text-yellow-500 mx-auto mb-3' />
           <h3 className='font-semibold text-gray-800 mb-2'>Top Rated</h3>
           <p className='text-gray-600 text-sm'>4.8/5 stars from 10,000+ reviews</p>
         </div>
       </div>
       {/* Categories Section */}
       {!input && (
         <div className='mb-12'>
           <h2 className='text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6 text-center'>Food Categories</h2>
           <div className='flex flex-wrap justify-center items-center gap-5 w-[100%]'>
             {Categories.map((item)=>(
               <div key={item.name} className='w-[120px] sm:w-[140px] h-[130px] sm:h-[150px] bg-white flex flex-col items-start gap-3 sm:gap-5 p-3 sm:p-5 justify-start text-[16px] sm:text-[20px] font-semibold text-gray-600 rounded-lg shadow-xl hover:bg-yellow-200 cursor-pointer transition-all duration-200 transform hover:scale-105' onClick={()=>filter(item.name)}>
                 {item.icon}
                 {item.name}
               </div>
             ))}
           </div>
         </div>
       )}
     
       {/* Food Items Section */}
       <div className='mb-12'>
         <h2 className='text-3xl font-bold text-gray-800 mb-6 text-center'>
           {input ? `Search Results for "${input}"` : 'Popular Dishes'}
         </h2>
         <div className='w-full flex flex-wrap gap-5 px-5 justify-center items-center'>
           {cate.length > 0 ? (
             cate.map((item)=>(
               <Card key={item.id} name={item.food_name} image={item.food_image} price={item.price} id={item.id} type={item.food_type}/>
             ))
           ) : (
             <div className='text-center text-xl sm:text-2xl text-yellow-400 font-semibold pt-5 col-span-full'>
               {input ? 'No dishes found matching your search' : 'No dishes found'}
             </div>
           )}
         </div>
       </div>

       {/* About Foods Section */}
       <div className='mb-12 bg-white rounded-lg shadow-lg p-8'>
         <h2 className='text-3xl font-bold text-gray-800 mb-6 text-center'>About Our Food</h2>
         <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6'>
           <div>
             <h3 className='text-xl font-semibold text-gray-800 mb-4'>Fresh Ingredients, Authentic Taste</h3>
             <p className='text-gray-600 mb-4'>
               At FoodOrder, we believe that great food starts with great ingredients. 
               We source the freshest produce, premium meats, and authentic spices to create 
               dishes that delight your taste buds and nourish your body.
             </p>
             <p className='text-gray-600 mb-4'>
               Our team of experienced chefs brings years of culinary expertise to every dish, 
               ensuring that each bite is a perfect balance of flavors, textures, and aromas.
             </p>
           </div>
           <div>
             <h3 className='text-xl font-semibold text-gray-800 mb-4'>From Kitchen to Your Doorstep</h3>
             <p className='text-gray-600 mb-4'>
               Every meal is prepared in our state-of-the-art kitchen following strict hygiene 
               standards. We cook in small batches to maintain freshness and quality, ensuring 
               that your food arrives hot, fresh, and delicious.
             </p>
             <p className='text-gray-600'>
               Whether you're craving comfort food, healthy options, or indulgent treats, 
               our diverse menu has something for everyone. From classic favorites to innovative 
               creations, we're here to satisfy your hunger and exceed your expectations.
             </p>
           </div>
         </div>
         
         <div className='mt-8 grid grid-cols-1 md:grid-cols-3 gap-6'>
           <div className='text-center'>
             <div className='text-3xl sm:text-4xl font-bold text-yellow-400 mb-2'>500+</div>
             <div className='text-gray-600'>Daily Orders</div>
           </div>
           <div className='text-center'>
             <div className='text-3xl sm:text-4xl font-bold text-yellow-300 mb-2'>50+</div>
             <div className='text-gray-600'>Menu Items</div>
           </div>
           <div className='text-center'>
             <div className='text-3xl sm:text-4xl font-bold text-yellow-500 mb-2'>4.8★</div>
             <div className='text-gray-600'>Average Rating</div>
           </div>
         </div>
       </div>
     </div>

     <div className={`w-full md:w-[40vw] h-[100%] fixed top-0 right-0 bg-white shadow-xl p-4 sm:p-6 transition-all duration-500 flex flex-col items-center overflow-auto ${showCart?"translate-x-0":"translate-x-full"} `} >
        <header className='w-[100%] flex justify-between items-center'>
<span className='text-yellow-400 text-[16px] sm:text-[18px] font-semibold'>Order items</span>
<RxCross2 className='w-[25px] h-[25px] sm:w-[30px] sm:h-[30px] text-yellow-400 text-[16px] sm:text-[18px] font-semibold cursor-pointer hover:text-gray-600' onClick={()=>setShowCart(false)}/>
        </header>

        {items.length>0? <>
       <div className='w-full mt-9 flex flex-col gap-8'>
      {items.map((item)=>(
        <Card2 name={item.name} price={item.price} image={item.image} id={item.id} qty={item.qty}/>
      ))}
       </div>
       <div className='w-full border-t-2 border-b-2 border-gray-400 mt-7 flex flex-col gap-2 p-4 sm:p-8'>
<div className='w-full flex justify-between items-center'>
    <span className='text-sm sm:text-lg text-gray-600 font-semibold'>Subtotal</span>
    <span className='text-yellow-400 font-semibold text-sm sm:text-lg'>Rs {subtotal}/-</span>
</div>
<div className='w-full flex justify-between items-center'>
    <span className='text-sm sm:text-lg text-gray-600 font-semibold'>Delivery Fee</span>
    <span className='text-yellow-400 font-semibold text-sm sm:text-lg'>Rs {deliveryFee}/-</span>
</div>
<div className='w-full flex justify-between items-center'>
    <span className='text-sm sm:text-lg text-gray-600 font-semibold'>Taxes</span>
    <span className='text-yellow-400 font-semibold text-sm sm:text-lg'>Rs {taxes}/-</span>
</div>
       </div>
       <div className='w-full flex justify-between items-center p-4 sm:p-9'>
    <span className='text-xl sm:text-2xl text-gray-600 font-semibold'>Total</span>
    <span className='text-yellow-400 font-semibold text-xl sm:text-2xl'>Rs {total}/-</span>
</div>
<button className='w-[70%] sm:w-[80%] p-2 sm:p-3 rounded-lg bg-yellow-400 text-white hover:bg-yellow-500 transition-all' onClick={()=>{
    setShowCart(false)
    setShowDeliveryInfo(true)
    toast.success("Order Placed..")
}}>Place Order</button>
</>
:
<div className='text-center text-xl sm:text-2xl text-yellow-400 font-semibold pt-5'>
    Empty Cart
</div>
}
       
     </div>
     
     <DeliveryInfo showDeliveryInfo={showDeliveryInfo} setShowDeliveryInfo={setShowDeliveryInfo} />
     
    </div>
  )
}

export default Home
