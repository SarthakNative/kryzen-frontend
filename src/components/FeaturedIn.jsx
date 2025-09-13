import React from 'react';

const FeaturedIn = () => {
  const logos = [
    // First row
    [
      { name: 'Microsoft', type: 'custom-microsoft' },
      { name: 'Inc.', type: 'text', className: 'text-5xl font-bold' },
      { name: 'Google Play', type: 'google-play' },
      { name: 'App Store', type: 'app-store' },
      { name: 'Forbes', type: 'text', className: 'text-3xl font-bold bg-gray-800 text-white px-4 py-2' },
      { name: 'BBB', type: 'bbb' }
    ],
    // Second row
    [
      { name: 'YOURSTORY', type: 'text', className: 'text-2xl font-bold tracking-wider' },
      { name: 'Wikipedia', type: 'wikipedia' },
      { name: 'Entrepreneur', type: 'text', className: 'text-3xl font-serif' },
      { name: 'Mashable', type: 'text', className: 'text-3xl font-bold text-gray-500' },
      { name: 'Capterra', type: 'capterra' },
      { name: 'cnet', type: 'text', className: 'text-5xl font-bold tracking-tight' }
    ],
    // Third row
    [
      { name: 'The New York Times', type: 'text', className: 'text-xl font-serif' },
      { name: 'TC', type: 'tc' },
      { name: 'Clutch', type: 'text', className: 'text-3xl font-bold' },
      { name: 'PCMAG.COM', type: 'pcmag' },
      { name: 'G2 CROWD', type: 'g2crowd' },
      { name: 'The Telegraph', type: 'text', className: 'text-2xl font-serif' }
    ]
  ];

  const renderLogo = (logo) => {
    switch (logo.type) {
      case 'custom-microsoft':
        return (
          <div className="grid grid-cols-2 gap-1 w-12 h-12">
            <div className="bg-gray-700"></div>
            <div className="bg-gray-500"></div>
            <div className="bg-gray-500"></div>
            <div className="bg-gray-400"></div>
          </div>
        );
      
      case 'google-play':
        return (
          <div className="flex items-center gap-2">
            <svg className="w-6 h-6 text-gray-600" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12L3.84 21.85C3.34 21.6 3 21.09 3 20.5M16.81 15.12L6.05 21.34L14.54 12.85L16.81 15.12M20.16 10.81C20.5 11.08 20.75 11.5 20.75 12C20.75 12.5 20.53 12.9 20.18 13.18L17.89 14.5L15.39 12L17.89 9.5L20.16 10.81M6.05 2.66L16.81 8.88L14.54 11.15L6.05 2.66Z"/>
            </svg>
            <span className="text-xl text-gray-700">Google Play</span>
          </div>
        );
      
      case 'app-store':
        return (
          <div className="flex items-center gap-2">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5M13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
            </svg>
            <span className="text-xl">App Store</span>
          </div>
        );
      
      case 'bbb':
        return (
          <div className="flex items-center gap-2">
            <div className="flex flex-col items-center">
              <svg className="w-10 h-10 text-gray-700" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L3 7V11C3 16.5 6.8 21.7 12 23C17.2 21.7 21 16.5 21 11V7L12 2Z"/>
              </svg>
              <span className="text-xl font-bold">BBB</span>
              <span className="text-xs text-gray-600">Start With Trust</span>
            </div>
          </div>
        );
      
      case 'wikipedia':
        return (
          <svg className="w-16 h-16 text-gray-600" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1"/>
            <path d="M8 8L12 4L16 8M8 16L12 20L16 16M4 12H20" stroke="currentColor" strokeWidth="1" fill="none"/>
          </svg>
        );
      
      case 'capterra':
        return (
          <div className="flex items-center gap-2">
            <svg className="w-6 h-6 text-gray-600" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9"/>
            </svg>
            <span className="text-2xl text-gray-700">Capterra</span>
          </div>
        );
      
      case 'tc':
        return (
          <div className="bg-gray-700 text-white px-3 py-2">
            <span className="text-3xl font-bold">TC</span>
          </div>
        );
      
      case 'pcmag':
        return (
          <div className="bg-gray-800 text-white px-4 py-2">
            <span className="text-2xl font-bold">PC</span>
            <div className="text-xs">PCMAG.COM</div>
          </div>
        );
      
      case 'g2crowd':
        return (
          <div className="flex items-center gap-2">
            <div className="bg-gray-700 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold">
              G2
            </div>
            <span className="text-xl text-gray-700">CROWD</span>
          </div>
        );
      
      default:
        return <span className={logo.className || 'text-2xl text-gray-700'}>{logo.name}</span>;
    }
  };

  return (
    <div className="py-16 px-8 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-12">We Have Been Featured In</h2>
      
      <div className="max-w-5xl mx-auto">
        {logos.map((row, rowIndex) => (
          <div key={rowIndex} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12 items-center justify-items-center">
            {row.map((logo, logoIndex) => (
              <div key={logoIndex} className="flex items-center justify-center h-16">
                {renderLogo(logo)}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedIn;