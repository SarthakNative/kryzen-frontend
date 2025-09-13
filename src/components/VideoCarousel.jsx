import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Play, X } from 'lucide-react';

const VideoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Replace these with actual YouTube video IDs
  const videos = [
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

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };

  const getVisibleVideos = () => {
    const visible = [];
    for (let i = -1; i <= 3; i++) {
      const index = (currentIndex + i + videos.length) % videos.length;
      visible.push({ ...videos[index], position: i });
    }
    return visible;
  };

  return (
    <>
      <div className="bg-[#005d89] min-h-screen py-8 px-4 relative overflow-hidden">

        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Unveiling Our Innovative Solution
            </h1>
            <p className="text-lg text-white/90 max-w-4xl mx-auto">
              From cutting-edge technology to revolutionary concepts, get ready to be inspired and intrigued. This is more than just a
              video - it's a glimpse into the future of innovation.
            </p>
          </div>

          {/* Carousel */}
          <div className="relative">
            <div className="flex items-center justify-center gap-4 overflow-hidden">
              {getVisibleVideos().map((video, index) => (
                <div
                  key={`${video.id}-${index}`}
                  className={`
                    transition-all duration-300 cursor-pointer
                    ${video.position === -1 || video.position === 3 ? 'w-1/2 opacity-50 scale-95' : 'w-full'}
                    ${video.position === -1 ? '-mr-1/4' : ''}
                    ${video.position === 3 ? '-ml-1/4' : ''}
                  `}
                  style={{
                    maxWidth: video.position === -1 || video.position === 3 ? '200px' : '350px'
                  }}
                  onClick={() => setSelectedVideo(video)}
                >
                  <div className="relative bg-white rounded-lg overflow-hidden shadow-xl">
                    {/* Sapphire Logo */}
                    <div className="absolute top-2 left-2 z-10 bg-black/50 px-2 py-1 rounded">
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
              ))}
            </div>

            {/* Navigation Arrows */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={handlePrevious}
                className="p-2 text-white hover:bg-white/20 rounded-lg transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNext}
                className="p-2 text-white hover:bg-white/20 rounded-lg transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-12">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
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