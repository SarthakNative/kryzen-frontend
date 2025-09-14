import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, X } from 'lucide-react';
import rvp1Path from '../assets/images/rvp1.png'
import rvp2Path from '../assets/images/rvp2.png'
import rvp3Path from '../assets/images/rvp3.png'
import rvp4Path from '../assets/images/rvp4.png'
import rvp5Path from '../assets/images/rvp5.png'
import rvp6Path from '../assets/images/rvp6.png'
import rvp7Path from '../assets/images/rvp7.png'
import rvp8Path from '../assets/images/rvp8.png'

const VideoCarousel2 = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [translateX, setTranslateX] = useState(0);

    // Replace these with actual YouTube video IDs
    const initialVideos = [
        {
            id: 'dQw4w9WgXcQ',
            title: 'Leading Real Estate App Development',
            thumbnail: rvp1Path,
            description: 'THE ON-DEMAND REAL ESTATE APP'
        },
        {
            id: 'dQw4w9WgXcQ',
            title: 'Leading Home Service App Development',
            thumbnail: rvp2Path,
            description: 'Overview - AllySOne is an innovative marketplace...'
        },
        {
            id: 'dQw4w9WgXcQ',
            title: 'Leading Stress Management App',
            thumbnail: rvp3Path,
            description: 'STRESS RELIEF'
        },
        {
            id: 'dQw4w9WgXcQ',
            title: 'Leading Trading App Development',
            thumbnail: rvp4Path,
            description: 'AITradeX - Digital Financial Markets'
        },
        {
            id: 'dQw4w9WgXcQ',
            title: 'Another App Development',
            thumbnail: rvp5Path,
            description: 'Good service'
        },
         {
            id: 'dQw4w9WgXcQ',
            title: 'Another App Development',
            thumbnail: rvp6Path,
            description: 'Best apps'
        },
         {
            id: 'dQw4w9WgXcQ',
            title: 'Another App Development',
            thumbnail: rvp7Path,
            description: 'Satisfied'
        },
         {
            id: 'dQw4w9WgXcQ',
            title: 'Another App Development',
            thumbnail: rvp8Path,
            description: 'very good work'
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
            <div className="bg-[#DCEEF6] py-4 px-4 relative overflow-hidden">

                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-2xl md:text-3xl font-bold text-BLACK mb-4">
                            Our story, Their Words
                        </h1>
                        <p className="text-lg text-BLACK/90 max-w-4xl mx-auto">
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
                                                {/* Video Thumbnail */}
                                                <div className="relative aspect-video bg-gray-900">
                                                    <img
                                                        src={video.thumbnail}
                                                        alt={video.title}
                                                        className="w-full h-full object-cover"
                                                    />

                                                    {/* Play Button */}

                                                </div>

                                                {/* Video Title */}
                                                <div className="p-4  flex items-center justify-between">
                                                    <h3 className="text-sm font-semibold text-gray-800 truncate">
                                                        {video.description}
                                                    </h3>
                                                    <button
                                                        onClick={() => setSelectedVideo(video)}
                                                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform"
                                                    >
                                                        <Play className="w-5 h-5 text-gray-900 ml-0.5" fill="currentColor" />
                                                    </button>
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
                                className="p-2 text-black hover:bg-white/20 rounded-lg transition-colors disabled:opacity-50"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>
                            <button
                                onClick={handleNext}
                                disabled={isTransitioning}
                                className="p-2 text-black hover:bg-white/20 rounded-lg transition-colors disabled:opacity-50"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>
                        </div>
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

export default VideoCarousel2;