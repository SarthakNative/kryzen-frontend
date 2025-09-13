import upworkPath from '../assets/images/upwork.png'
import freelancerPath from '../assets/images/freelancer.png'
import viewReviewPath from '../assets/images/view_ur_profile.png'
import clutchReview2Path from '../assets/images/clutch_review2.png'

const ReviewSection2 = () => {
  const reviewCards = [
    {
      id: 1,
      imageUrl: upworkPath,
    },
    {
      id: 2,
      imageUrl: clutchReview2Path, 
    },
    {
      id: 3,
      imageUrl: viewReviewPath, 
    },
    {
      id: 4,
      imageUrl: freelancerPath,
    }
  ];

  return (
    <div className="relative w-full bg-[#005D89] overflow-hidden">
      <div className="relative z-10 flex items-center justify-between min-h-[160px] px-4 lg:px-8 py-4">
        
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
        <div className="flex-1 max-w-7xl mx-auto px-4 lg:px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            
            {/* Text Section */}
            <div className="text-white flex-1 lg:max-w-md">
              <h2 className="text-xl lg:text-4xl font-bold leading-tight">
               Proud to have picked these up along way.
              </h2>
            </div>

            {/* Cards Section - All Horizontal */}
            <div className="flex flex-row gap-4 items-center justify-center lg:justify-end flex-wrap lg:flex-nowrap ">
              {reviewCards.map((card) => (
                <div 
                  key={card.id}
                  className="bg-white rounded-lg w-35 h-35 flex items-center justify-center p-4
                 shadow-md transition duration-300 hover:brightness-125 hover:shadow-[0_0_25px_rgba(0,163,217,0.6)]
                  "
                >
                  <img 
                    src={card.imageUrl} 
                    className="w-full h-full object-contain"
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

export default ReviewSection2;