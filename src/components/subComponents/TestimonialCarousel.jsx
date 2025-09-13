import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const TestimonialCarousel = ({ reviews }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevReview = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? reviews.length - 1 : prev - 1
    );
  };

  const nextReview = () => {
    setCurrentIndex((prev) =>
      prev === reviews.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* Carousel Wrapper */}
      <div className="relative w-[350px] h-[320px] overflow-hidden shadow-[0_4px_6px_rgba(0,0,0,0.1)]">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {reviews.map((review, index) => (
            <div
              key={index}
              className="min-w-[350px] h-[320px] bg-white rounded-lg shadow-md p-6 flex flex-col justify-between"
            >
              {/* Stars + Clutch */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-xl">★</span>
                  ))}
                </div>
                <span className="text-xl font-semibold text-gray-700">
                  Clutch
                </span>
              </div>

              {/* Review Text */}
              <p className="text-gray-700 text-sm leading-relaxed flex-1 overflow-hidden">
                {review.text}
              </p>

              {/* Author */}
              <div className="flex items-center mt-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
                  <img
                    src={review.avatar}
                    alt={review.author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">
                    {review.author}
                  </div>
                  <div className="text-sm text-gray-600">{review.country}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-center items-center space-x-6 mt-4">
        <button
          className="p-2 text-gray-600 hover:text-gray-800"
          onClick={prevReview}
        >
          <ChevronLeftIcon className="w-6 h-6" />
        </button>
        <button
          className="p-2 text-gray-600 hover:text-gray-800"
          onClick={nextReview}
        >
          <ChevronRightIcon className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
