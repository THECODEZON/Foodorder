import React, { useState } from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const RatingReview = ({ foodId, foodName }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [review, setReview] = useState('');
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "John Doe",
      rating: 5,
      comment: "Amazing food! Very fresh and tasty.",
      date: "2024-03-10"
    },
    {
      id: 2,
      name: "Jane Smith",
      rating: 4,
      comment: "Good quality and fast delivery.",
      date: "2024-03-09"
    }
  ]);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else if (i - 0.5 <= rating) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-400" />);
      }
    }
    return stars;
  };

  const handleSubmitReview = (e) => {
    e.preventDefault();
    if (rating === 0 || review.trim() === '') {
      alert('Please provide both rating and review');
      return;
    }

    const newReview = {
      id: reviews.length + 1,
      name: "Current User",
      rating: rating,
      comment: review,
      date: new Date().toISOString().split('T')[0]
    };

    setReviews([newReview, ...reviews]);
    setRating(0);
    setReview('');
  };

  const averageRating = reviews.length > 0 
    ? (reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length).toFixed(1)
    : 0;

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <h3 className="text-2xl font-bold mb-4">Reviews for {foodName}</h3>
      
      {/* Rating Summary */}
      <div className="bg-gray-50 p-4 rounded-lg mb-6">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-3xl font-bold text-gray-800">{averageRating}</div>
            <div className="flex items-center">
              {renderStars(averageRating)}
              <span className="ml-2 text-gray-600">({reviews.length} reviews)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Add Review Form */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <h4 className="text-lg font-semibold mb-3">Write a Review</h4>
        <form onSubmit={handleSubmitReview}>
          <div className="mb-3">
            <label className="block text-gray-700 mb-2">Rating</label>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  className="text-2xl focus:outline-none"
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHover(star)}
                  onMouseLeave={() => setHover(0)}
                >
                  {star <= (hover || rating) ? (
                    <FaStar className="text-yellow-400 hover:text-yellow-500" />
                  ) : (
                    <FaRegStar className="text-yellow-400 hover:text-yellow-500" />
                  )}
                </button>
              ))}
            </div>
          </div>
          <div className="mb-3">
            <label className="block text-gray-700 mb-2">Your Review</label>
            <textarea
              value={review}
              onChange={(e) => setReview(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              rows="3"
              placeholder="Share your experience..."
            />
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
          >
            Submit Review
          </button>
        </form>
      </div>

      {/* Reviews List */}
      <div className="space-y-4">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center mr-3">
                  <span className="text-gray-600 font-semibold">
                    {review.name.charAt(0).toUpperCase()}
                  </span>
                </div>
                <div>
                  <div className="font-semibold">{review.name}</div>
                  <div className="text-sm text-gray-500">{review.date}</div>
                </div>
              </div>
              <div className="flex">
                {renderStars(review.rating)}
              </div>
            </div>
            <p className="text-gray-700">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RatingReview;
