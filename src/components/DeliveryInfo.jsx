import React from 'react';
import { RxCross2 } from "react-icons/rx";

function DeliveryInfo({ showDeliveryInfo, setShowDeliveryInfo }) {
  return (
    <div className={`w-full md:w-[40vw] h-[100%] fixed top-0 right-0 bg-white shadow-xl p-6 transition-all duration-500 flex flex-col items-center overflow-auto ${showDeliveryInfo ? "translate-x-0" : "translate-x-full"}`}>
      <header className='w-[100%] flex justify-between items-center mb-6'>
        <span className='text-green-400 text-[18px] font-semibold'>Delivery Information</span>
        <RxCross2 className='w-[30px] h-[30px] text-green-400 text-[18px] font-semibold cursor-pointer hover:text-gray-600' onClick={() => setShowDeliveryInfo(false)} />
      </header>

      <div className='w-full flex flex-col gap-6 p-4'>
        <div className='w-full'>
          <h3 className='text-lg font-semibold text-gray-700 mb-2'>Address:</h3>
          <p className='text-gray-600'>
            Flat No. 302, Shanti Residency<br />
            MG Road, Sector 21<br />
            Gurugram, Haryana – 122001<br />
            India
          </p>
        </div>

        <div className='w-full'>
          <h3 className='text-lg font-semibold text-gray-700 mb-2'>Estimated Delivery:</h3>
          <p className='text-gray-600'>3:15 PM</p>
        </div>

        <div className='w-full'>
          <h3 className='text-lg font-semibold text-gray-700 mb-2'>Delivery Partner:</h3>
          <p className='text-gray-600'>Rahul Sharma</p>
        </div>

        <div className='w-full'>
          <h3 className='text-lg font-semibold text-gray-700 mb-2'>Contact Number:</h3>
          <p className='text-gray-600'>+91 98765 43210</p>
        </div>
      </div>
    </div>
  );
}

export default DeliveryInfo;
