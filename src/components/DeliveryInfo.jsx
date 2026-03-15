import React from 'react';
import { RxCross2 } from "react-icons/rx";

function DeliveryInfo({ showDeliveryInfo, setShowDeliveryInfo }) {
  return (
    <div className={`w-full md:w-[40vw] h-[100%] fixed top-0 right-0 bg-white shadow-xl p-4 sm:p-6 transition-all duration-500 flex flex-col items-center overflow-auto ${showDeliveryInfo ? "translate-x-0" : "translate-x-full"}`}>
      <header className='w-[100%] flex justify-between items-center mb-6'>
        <span className='text-yellow-400 text-[16px] sm:text-[18px] font-semibold'>Delivery Information</span>
        <RxCross2 className='w-[25px] h-[25px] sm:w-[30px] sm:h-[30px] text-yellow-400 text-[16px] sm:text-[18px] font-semibold cursor-pointer hover:text-gray-600' onClick={() => setShowDeliveryInfo(false)} />
      </header>

      <div className='w-full flex flex-col gap-6 p-4'>
        <div className='w-full'>
          <h3 className='text-lg font-semibold text-gray-700 mb-2'>Address:</h3>
          <p className='text-gray-600'>
            Flat No. 302, Shanti Residency<br />
            Gurugram<br />
            India
          </p>
        </div>

        <div className='w-full'>
          <h3 className='text-lg font-semibold text-gray-700 mb-2'>Estimated Delivery:</h3>
          <p className='text-gray-600'>3:15 PM</p>
        </div>

        <div className='w-full'>
          <h3 className='text-lg font-semibold text-gray-700 mb-2'>Delivery Partner:</h3>
          <p className='text-gray-600'>Deepa Das</p>
        </div>

        <div className='w-full'>
          <h3 className='text-lg font-semibold text-gray-700 mb-2'>Contact Number:</h3>
          <p className='text-gray-600'>6267093990</p>
        </div>
      </div>
    </div>
  );
}

export default DeliveryInfo;
