import googleReviewPath from '../assets/images/google_review.png'
import goodFirmsReviewPath from '../assets/images/goodfirms_review.png'
import clutchReviewPath from '../assets/images/clutch_review.png'

const ReviewSection = () => {
  const reviewCards = [
    {
      id: 1,
      imageUrl: googleReviewPath, // Replace with your Google review PNG
      platform: "Google",
      reviews: "1012"
    },
    {
      id: 2,
      imageUrl: clutchReviewPath, // Replace with your Clutch review PNG
      platform: "Clutch",
      reviews: "201"
    },
    {
      id: 3,
      imageUrl: goodFirmsReviewPath, // Replace with your GoodFirms review PNG
      platform: "GoodFirms",
      reviews: "201"
    }
  ];

  return (
    <div className="relative w-full bg-[#005D89] overflow-hidden">
      <div className="relative z-10 flex items-center justify-between min-h-[160px] px-4 lg:px-8 py-8">
        
        {/* Left Decorative Wavy Line */}
        <div className="hidden lg:block flex-shrink-0 w-32">
          <svg
            viewBox="0 0 120 160"
            className="w-full h-40 text-teal-400/20"
            preserveAspectRatio="none"
          >
            <path
              d="M 0 40 Q 30 20 30 60 T 30 140 Q 30 160 0 160"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="opacity-60"
            />
            <path
              d="M 15 35 Q 45 15 45 55 T 45 135 Q 45 155 15 155"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="opacity-40"
            />
          </svg>
        </div>

        {/* Center Content */}
        <div className="flex-1 max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            
            {/* Text Section */}
            <div className="text-white flex-1 lg:max-w-md">
              <h2 className="text-xl lg:text-2xl font-bold leading-tight">
                We are proud to be one of the top-rated companies on best customer review sites.
              </h2>
            </div>

            {/* Cards Section - All Horizontal */}
            <div className="flex flex-row gap-4 items-center justify-center lg:justify-end flex-wrap lg:flex-nowrap ">
              {reviewCards.map((card) => (
                <div 
                  key={card.id}
                  className="bg-white rounded-lg w-40 h-24 flex items-center justify-center p-4
                 shadow-md transition duration-300 hover:brightness-125 hover:shadow-[0_0_25px_rgba(0,163,217,0.6)]
                  "
                >
                  <img 
                    src={card.imageUrl} 
                    alt={`${card.platform} reviews`}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `https://via.placeholder.com/160x96/ffffff/333333?text=${card.platform}+${card.reviews}+Reviews`;
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Decorative Wavy Line */}
        <div className="hidden lg:block flex-shrink-0 w-32">
          <svg
            viewBox="0 0 120 160"
            className="w-full h-40 text-teal-400/20"
            preserveAspectRatio="none"
          >
            <path
              d="M 120 40 Q 90 20 90 60 T 90 140 Q 90 160 120 160"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="opacity-60"
            />
            <path
              d="M 105 35 Q 75 15 75 55 T 75 135 Q 75 155 105 155"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="opacity-40"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;