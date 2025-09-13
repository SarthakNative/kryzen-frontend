import { useState, useEffect } from "react";
import americanExpressPath from "../assets/images/american_express.png";
import bayerPath from "../assets/images/bayer.png";
import cumminsPath from "../assets/images/cummins.jpg";
import holciumPath from "../assets/images/holcium.png";
import lorealPath from "../assets/images/loreal.png";
import orientCementPath from "../assets/images/orientCement.avif";
import almaraiPath from "../assets/images/almarai.png";
import tdsgPath from "../assets/images/tdsg.png";

const SmoothCarousel = () => {
  const [translateX, setTranslateX] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    { id: 1, name: "American Express", logoUrl: americanExpressPath },
    { id: 2, name: "Bayer", logoUrl: bayerPath },
    { id: 3, name: "LafargeHolcim", logoUrl: holciumPath },
    { id: 4, name: "Almarai", logoUrl: almaraiPath },
    { id: 5, name: "Orient Cement", logoUrl: orientCementPath },
    { id: 6, name: "TDSG", logoUrl: tdsgPath },
    { id: 7, name: "Cummins", logoUrl: cumminsPath },
    { id: 8, name: "L'Oreal", logoUrl: lorealPath },
  ];

  const CARD_WIDTH = 140; // Width + margin
  const DISPLAY_COUNT = cards.length;

  // Duplicate cards for seamless infinite loop
  const infiniteCards = [...cards, ...cards, ...cards];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentIndex >= cards.length * 2) {
      // Reset smoothly without flicker
      setTimeout(() => {
        setCurrentIndex(cards.length);
        setTranslateX(-cards.length * CARD_WIDTH);
      }, 700);
    } else {
      setTranslateX(-currentIndex * CARD_WIDTH);
    }
  }, [currentIndex]);

  return (
    <div className="py-2 overflow-hidden">
      <div className="max-w-8xl mx-auto px-0">
        <div className="relative h-32">
          {/* Viewport container */}
          <div className="overflow-hidden mx-auto" style={{ width: "1400px" }}>
            {/* Sliding track */}
            <div
              className="flex items-center space-x-4 transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(${translateX}px)`,
                width: `${infiniteCards.length * CARD_WIDTH}px`,
              }}
            >
              {infiniteCards.map((card, index) => (
                <div
                  key={`${card.id}-${index}`}
                  className="flex-shrink-0 bg-white rounded-xl border border-gray-200 shadow-md flex items-center justify-center p-3 w-32 h-24"
                >
                  <img
                    src={card.logoUrl}
                    alt={card.name}
                    className="max-w-full max-h-full object-contain"
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/120x60/6366f1/ffffff?text=${encodeURIComponent(
                        card.name
                      )}`;
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmoothCarousel;
