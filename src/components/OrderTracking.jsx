import React, { useState } from 'react';
import { FaCheckCircle, FaClock, FaTruck, FaHome, FaUtensils } from 'react-icons/fa';

const OrderTracking = ({ orderId, onClose }) => {
  const [currentStatus, setCurrentStatus] = useState(2); // 0: Confirmed, 1: Preparing, 2: On the way, 3: Delivered

  const orderSteps = [
    { id: 0, name: 'Order Confirmed', icon: <FaCheckCircle />, time: '2:30 PM' },
    { id: 1, name: 'Preparing', icon: <FaUtensils />, time: '2:35 PM' },
    { id: 2, name: 'On the way', icon: <FaTruck />, time: '2:50 PM' },
    { id: 3, name: 'Delivered', icon: <FaHome />, time: '3:15 PM' }
  ];

  const orderDetails = {
    orderId: 'ORD-2024-0315',
    items: [
      { name: 'Margherita Pizza', quantity: 1, price: 649 },
      { name: 'Chicken Burger', quantity: 2, price: 599 }
    ],
    total: 1847,
    deliveryAddress: '123 Main Street, Apt 4B, New York, NY 10001',
    estimatedDelivery: '3:15 PM',
    deliveryPartner: 'John Doe',
    partnerPhone: '+1 234-567-8900'
  };

  const getStepStatus = (stepId) => {
    if (stepId < currentStatus) return 'completed';
    if (stepId === currentStatus) return 'active';
    return 'pending';
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-yellow-500">Track Your Order</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ×
          </button>
        </div>

        {/* Order ID */}
        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <p className="text-sm text-gray-600">Order ID</p>
          <p className="text-lg font-semibold">{orderDetails.orderId}</p>
        </div>

        {/* Progress Tracker */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            {orderSteps.map((step, index) => (
              <div key={step.id} className="flex flex-col items-center flex-1">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${
                  getStepStatus(step.id) === 'completed' ? 'bg-yellow-500 text-white' :
                  getStepStatus(step.id) === 'active' ? 'bg-yellow-500 text-white animate-pulse' :
                  'bg-gray-300 text-gray-600'
                }`}>
                  {step.icon}
                </div>
                <p className={`text-xs text-center ${
                  getStepStatus(step.id) === 'completed' ? 'text-yellow-600 font-semibold' :
                  getStepStatus(step.id) === 'active' ? 'text-yellow-600 font-semibold' :
                  'text-gray-500'
                }`}>
                  {step.name}
                </p>
                <p className="text-xs text-gray-500 mt-1">{step.time}</p>
              </div>
            ))}
          </div>
          {/* Progress Line */}
          <div className="relative mt-4">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gray-300"></div>
            <div 
              className="absolute top-0 left-0 h-1 bg-yellow-500 transition-all duration-500"
              style={{ width: `${(currentStatus / (orderSteps.length - 1)) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Order Details */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Items */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-3">Order Items</h3>
            {orderDetails.items.map((item, index) => (
              <div key={index} className="flex justify-between mb-2">
                <span>{item.quantity}x {item.name}</span>
                <span className="font-semibold">Rs {item.price * item.quantity}/-</span>
              </div>
            ))}
            <div className="border-t pt-2 mt-2">
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span className="font-bold text-yellow-500">Rs {orderDetails.total}/-</span>
              </div>
            </div>
          </div>

          {/* Delivery Info */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-3">Delivery Information</h3>
            <div className="space-y-2 text-sm">
              <div>
                <span className="text-gray-600">Address:</span>
                <p className="font-medium">{orderDetails.deliveryAddress}</p>
              </div>
              <div>
                <span className="text-gray-600">Estimated Delivery:</span>
                <p className="font-medium">{orderDetails.estimatedDelivery}</p>
              </div>
              <div>
                <span className="text-gray-600">Delivery Partner:</span>
                <p className="font-medium">{orderDetails.deliveryPartner}</p>
                <p className="text-blue-500">{orderDetails.partnerPhone}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-6">
          <button
            onClick={onClose}
            className="flex-1 bg-gray-200 text-gray-800 py-2 rounded-lg hover:bg-gray-300 transition-colors"
          >
            Close
          </button>
          <button className="flex-1 bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600 transition-colors">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderTracking;
