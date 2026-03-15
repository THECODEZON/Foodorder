import React from 'react';
import { FaPercent, FaClock, FaTruck } from 'react-icons/fa';

const SpecialOffers = () => {
  const offers = [
    {
      id: 1,
      title: "Happy Hour Deal",
      description: "Get 30% off on all items between 2-5 PM",
      icon: <FaPercent className="text-yellow-500" />,
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200"
    },
    {
      id: 2,
      title: "Free Delivery",
      description: "Free delivery on orders above Rs 500",
      icon: <FaTruck className="text-blue-500" />,
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      id: 3,
      title: "Flash Sale",
      description: "Limited time offer - 25% off on selected items",
      icon: <FaClock className="text-red-500" />,
      bgColor: "bg-red-50",
      borderColor: "border-red-200"
    },
    {
      id: 4,
      title: "Weekend Special",
      description: "Buy 2 Get 1 Free on all pasta items",
      icon: <FaPercent className="text-purple-500" />,
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200"
    }
  ];

  return (
    <div className="w-full px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Special Offers
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {offers.map((offer) => (
          <div
            key={offer.id}
            className={`${offer.bgColor} ${offer.borderColor} border-2 rounded-lg p-4 hover:shadow-lg transition-all duration-300 cursor-pointer`}
          >
            <div className="flex items-center mb-3">
              <div className="text-2xl mr-3">
                {offer.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                {offer.title}
              </h3>
            </div>
            <p className="text-gray-600 text-sm">
              {offer.description}
            </p>
            <button className="mt-3 text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
              Learn More →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecialOffers;
