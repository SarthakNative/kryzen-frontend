import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, X } from 'lucide-react';

const VideoCarousel = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [translateX, setTranslateX] = useState(0);

  // Replace these with actual YouTube video IDs
  const initialVideos = [
    {
      id: 'dQw4w9WgXcQ',
      title: 'Leading Real Estate App Development',
      thumbnail: '/api/placeholder/400/300',
      description: 'THE ON-DEMAND REAL ESTATE APP'
    },
    {
      id: 'dQw4w9WgXcQ',
      title: 'Leading Home Service App Development',
      thumbnail: '/api/placeholder/400/300',
      description: 'Overview - AllySOne is an innovative marketplace...'
    },
    {
      id: 'dQw4w9WgXcQ',
      title: 'Leading Stress Management App',
      thumbnail: '/api/placeholder/400/300',
      description: 'STRESS RELIEF'
    },
    {
      id: 'dQw4w9WgXcQ',
      title: 'Leading Trading App Development',
      thumbnail: '/api/placeholder/400/300',
      description: 'AITradeX - Digital Financial Markets'
    },
    {
      id: 'dQw4w9WgXcQ',
      title: 'Another App Development',
      thumbnail: '/api/placeholder/400/300',
      description: 'Additional content'
    }
  ];

  const [videos, setVideos] = useState(initialVideos);

  const handlePrevious = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setTranslateX(320);
    
    setTimeout(() => {
      setVideos(prev => {
        const newVideos = [...prev];
        const lastItem = newVideos.pop();
        newVideos.unshift(lastItem);
        return newVideos;
      });
      setTranslateX(0);
      setIsTransitioning(false);
    }, 500);
  };

  const handleNext = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setTranslateX(-320);
    
    setTimeout(() => {
      setVideos(prev => {
        const newVideos = [...prev];
        const firstItem = newVideos.shift();
        newVideos.push(firstItem);
        return newVideos;
      });
      setTranslateX(0);
      setIsTransitioning(false);
    }, 500);
  };

  // Get visible videos (show 5 at a time for smooth infinite effect)
  const getVisibleVideos = () => {
    // For infinite effect, we'll show the last video, all current videos, and the first video again
    const lastVideo = videos[videos.length - 1];
    const firstVideo = videos[0];
    return [lastVideo, ...videos, firstVideo];
  };

  return (
    <>
      <div className="bg-[#005d89] min-h-screen py-4 px-4 relative overflow-hidden">

        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Unveiling Our Innovative Solution
            </h1>
            <p className="text-lg text-white/90 max-w-4xl mx-auto">
              From cutting-edge technology to revolutionary concepts, get ready to be inspired and intrigued. This is more than just a
              video - it's a glimpse into the future of innovation.
            </p>
          </div>

          {/* Carousel Container */}
          <div className="relative">
            <div 
              className="overflow-hidden mx-auto" 
              style={{ 
                maxWidth: '1440px' // Width for 3 cards (960px) minus half card on each side (160px each)
              }}
            >
              <div 
                className={`flex ${isTransitioning ? 'transition-transform duration-500 ease-in-out' : ''}`}
                style={{
                  transform: `translateX(${translateX - 160}px)` // Offset by half a card width to show partial cards
                }}
              >
                {getVisibleVideos().map((video, index) => (
                  <div
                    key={`${video.title}-${index}`}
                    className="flex-shrink-0 px-2"
                    style={{ width: '320px' }}
                  >
                    <div 
                      className="cursor-pointer"
                      onClick={() => setSelectedVideo(video)}
                    >
                      <div className="relative bg-white rounded-lg overflow-hidden shadow-xl">
                        {/* Sapphire Logo */}
                        <div className="absolute top-2 right-2 z-10 bg-black/50 px-2 py-1 rounded">
                          <span className="text-white text-xs font-bold">Sapphire</span>
                        </div>

                        {/* Video Thumbnail */}
                        <div className="relative aspect-video bg-gray-900">
                          <img
                            src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                            alt={video.title}
                            className="w-full h-full object-cover"
                          />
                          
                          {/* Play Button */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                              <Play className="w-8 h-8 text-gray-900 ml-1" fill="currentColor" />
                            </div>
                          </div>
                        </div>

                        {/* Video Title */}
                        <div className="p-4">
                          <h3 className="text-sm font-semibold text-gray-800 truncate">
                            {video.title}
                          </h3>
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
                onClick={handlePrevious}
                disabled={isTransitioning}
                className="p-2 text-white hover:bg-white/20 rounded-lg transition-colors disabled:opacity-50"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNext}
                disabled={isTransitioning}
                className="p-2 text-white hover:bg-white/20 rounded-lg transition-colors disabled:opacity-50"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-12">
            <button className="bg-white text-blue-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              View Insightful Videos
            </button>
          </div>
        </div>
      </div>

      {/* Video Popup */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="relative bg-white rounded-lg max-w-4xl w-full">
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300"
            >
              <X className="w-8 h-8" />
            </button>
            
            <div className="aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo.id}?autoplay=1`}
                title={selectedVideo.title}
                className="w-full h-full rounded-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoCarousel;