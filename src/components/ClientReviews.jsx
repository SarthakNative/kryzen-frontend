import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import manIconPath from '../assets/images/man.png';

const ClientReviews = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [translateX, setTranslateX] = useState(0);
  const animationRef = useRef();

  // Sample review data - replace with your actual reviews
  const reviews = [
    {
      id: 1,
      text: "Sapphire Software Solutions delivered an exceptional real estate app that exceeded our expectations. Their team's expertise in mobile development and attention to detail resulted in a seamless user experience.",
      author: "Sarah Johnson",
      role: "CEO, RealtyTech Inc",
      country: "United States",
      avatar: manIconPath,
      rating: 5
    },
    {
      id: 2,
      text: "Working with Sapphire was a game-changer for our home services platform. They understood our vision perfectly and delivered a robust solution that has transformed how we connect with customers.",
      author: "Michael Chen",
      role: "Founder, HomeServe Pro",
      country: "Canada",
      avatar: manIconPath,
      rating: 5
    },
    {
      id: 3,
      text: "The stress management app developed by Sapphire has helped thousands of users. Their innovative approach to mental health technology and user-centric design made all the difference.",
      author: "Dr. Emily Roberts",
      role: "Clinical Director",
      country: "United Kingdom",
      avatar: manIconPath,
      rating: 5
    },
    {
      id: 4,
      text: "Sapphire's expertise in fintech is unmatched. They built us a secure, scalable trading platform that handles millions of transactions daily. Their support throughout the process was outstanding.",
      author: "James Wilson",
      role: "CTO, TradeX Global",
      country: "Australia",
      avatar: manIconPath,
      rating: 5
    },
    {
      id: 5,
      text: "The team at Sapphire transformed our business idea into a powerful mobile application. Their agile development process and regular communication made the entire journey smooth and efficient.",
      author: "Maria Garcia",
      role: "Product Manager",
      country: "Spain",
      avatar: manIconPath,
      rating: 5
    }
  ];

  // Duplicate reviews for seamless loop
  const duplicatedReviews = [...reviews, ...reviews, ...reviews];

  useEffect(() => {
    const animate = () => {
      if (!isPaused) {
        setTranslateX(prev => {
          // Reset position when first set is completely scrolled
          if (prev <= -(reviews.length * 375)) {
            return 0;
          }
          return prev - 1; // Adjust speed here (higher = faster)
        });
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused, reviews.length]);

  const handleManualScroll = (direction) => {
    setIsPaused(true);
    
    if (direction === 'left') {
      setTranslateX(prev => prev + 375);
    } else {
      setTranslateX(prev => prev - 375);
    }

    // Resume animation after 3 seconds
    setTimeout(() => {
      setIsPaused(false);
    }, 3000);
  };

  return (
    <div className="bg-[#005d89] py-12 px-4 relative overflow-hidden">
      <div className="mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Our Clients Say
          </h1>
          <p className="text-lg text-white/90 max-w-4xl mx-auto">
            Discover how we've helped businesses transform their ideas into successful digital solutions. 
            Read testimonials from our satisfied clients across various industries.
          </p>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div 
            className="overflow-hidden mx-auto" 
            style={{ 
              maxWidth: '1440px'
            }}
          >
            <div 
              className="flex"
              style={{
                transform: `translateX(${translateX}px)`,
                willChange: 'transform'
              }}
            >
              {duplicatedReviews.map((review, index) => (
                <div
                  key={`${review.id}-${index}`}
                  className="flex-shrink-0 px-2.5"
                  style={{ width: '375px' }}
                >
                  <div className="bg-white rounded-lg shadow-xl p-6 h-[320px] flex flex-col justify-between">
                    {/* Stars + Platform */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex text-yellow-400">
                        {[...Array(review.rating)].map((_, i) => (
                          <span key={i} className="text-xl">★</span>
                        ))}
                      </div>
                      <span className="text-lg font-semibold text-gray-700">
                        Clutch
                      </span>
                    </div>

                    {/* Review Text */}
                    <p className="text-gray-700 text-sm leading-relaxed flex-1 overflow-hidden line-clamp-6">
                      "{review.text}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center mt-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-3 bg-gray-200">
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
                        <div className="text-xs text-gray-600">{review.role}</div>
                        <div className="text-xs text-gray-500">{review.country}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={() => handleManualScroll('left')}
              className="p-3 bg-white/10 text-white hover:bg-white/20 rounded-lg transition-colors backdrop-blur-sm"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => handleManualScroll('right')}
              className="p-3 bg-white/10 text-white hover:bg-white/20 rounded-lg transition-colors backdrop-blur-sm"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientReviews;