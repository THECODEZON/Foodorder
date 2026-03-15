import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import image1 from '../assets/image1.avif';
import image2 from '../assets/image2.avif';
import image3 from '../assets/image3.avif';
import image4 from '../assets/image4.avif';
import image5 from '../assets/image5.avif';

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: image1,
      title: "Delicious Pancakes",
      description: "Start your day with our fluffy pancakes",
      discount: "20% OFF"
    },
    {
      image: image2,
      title: "Hearty Chicken Soup",
      description: "Warm up with our signature soup",
      discount: "15% OFF"
    },
    {
      image: image3,
      title: "Fresh Minestrone",
      description: "Healthy and flavorful vegetable soup",
      discount: "10% OFF"
    },
    {
      image: image4,
      title: "Classic Pasta Carbonara",
      description: "Italian tradition at its best",
      discount: "25% OFF"
    },
    {
      image: image5,
      title: "Veg Alfredo Pasta",
      description: "Creamy and satisfying vegetarian delight",
      discount: "18% OFF"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden rounded-lg shadow-2xl mb-8">
      {/* Slides */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
              <div className="text-white">
                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold mb-4 inline-block">
                  {slide.discount}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-2">{slide.title}</h2>
                <p className="text-lg md:text-xl mb-4">{slide.description}</p>
                <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all"
      >
        <FaChevronLeft size={20} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all"
      >
        <FaChevronRight size={20} />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? 'bg-white w-8' : 'bg-white/50'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
