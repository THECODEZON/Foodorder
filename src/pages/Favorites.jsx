import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../components/Card';
import { FaHeart } from 'react-icons/fa';

const Favorites = () => {
  const favorites = useSelector(state => state.favorites);

  return (
    <div className='bg-slate-200 w-full min-h-screen pt-20'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-8'>
          <FaHeart className='text-yellow-500 text-5xl mx-auto mb-4' />
          <h1 className='text-3xl font-bold text-gray-800 mb-2'>My Favorites</h1>
          <p className='text-gray-600'>
            {favorites.length > 0 
              ? `You have ${favorites.length} favorite items`
              : 'No favorites yet. Start adding some delicious items!'}
          </p>
        </div>
        
        {favorites.length > 0 ? (
          <div className='w-full flex flex-wrap gap-5 justify-center items-center pb-8'>
            {favorites.map((item) => (
              <Card 
                key={item.id}
                name={item.food_name || item.name}
                image={item.food_image || item.image}
                price={item.price}
                id={item.id}
                type={item.food_type || item.type}
              />
            ))}
          </div>
        ) : (
          <div className='text-center py-20'>
            <div className='bg-white rounded-lg p-8 max-w-md mx-auto shadow-lg'>
              <FaHeart className='text-gray-300 text-6xl mx-auto mb-4' />
              <h3 className='text-xl font-semibold text-gray-700 mb-2'>
                No Favorites Yet
              </h3>
              <p className='text-gray-500 mb-4'>
                Start exploring our menu and add your favorite items to see them here!
              </p>
              <button 
                onClick={() => window.history.back()}
                className='bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600 transition-colors'
              >
                Browse Menu
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;
