import { useState } from 'react';
import companyLogo from '../assets/images/sapphire_logo.png'

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);

  const navItems = [
    { name: 'Company', hasDropdown: true },
    { name: 'Product', hasDropdown: true },
    { name: 'Services', hasDropdown: true },
    { name: 'Hire Developers', hasDropdown: true },
    { name: 'Technology', hasDropdown: true },
    { name: 'Our Work', hasDropdown: true },
  ];

  return (
   <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/0 backdrop-blur-0 
  [&:has(+*:not(:hover))]:bg-white [&:has(+*:not(:hover))]:backdrop-blur-md">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo - Left Side */}
          <div className="flex-shrink-0">
            <img
              src={companyLogo}
              alt="Company Logo"
              className="h-8 w-auto sm:h-10 lg:h-12"
            />
          </div>

          {/* Desktop Right Side Content */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Navigation */}
            <nav className="flex items-center space-x-2">
              {navItems.map((item, index) => (
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(index)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="flex items-center text-gray-700 hover:text-gray-900 font-medium text-sm transition-colors duration-200">
                    {item.name}
                    {item.hasDropdown && (
                      <svg className="ml-1 h-4 w-4" viewBox="0 0 24 24" fill="black">
                        <path d="M7 10l5 5 5-5H7z" />
                      </svg>
                    )}
                  </button>

                  {/* Dropdown placeholder */}
                  {item.hasDropdown && activeDropdown === index && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-2 z-50">
                      <div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer">
                        Sample dropdown item
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="flex items-center space-x-4">
              <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-2 py-2 pr-3 rounded-lg font-medium text-sm hover:from-purple-600 hover:to-pink-600 transition-all duration-200 flex items-center">
                <span className="mr-2">✨</span>
                Let's Talk AI
              </button>
              <button className="relative bg-[#005D89] text-white px-3 py-2 font-medium text-sm border-white hover:shadow-lg hover:shadow-blue-400/50 transition-shadow duration-300 rounded-sm">
                Contact Us
                <div className="absolute -inset-1 border-2 border-[#00A3D9] pointer-events-none rounded-sm"></div>
                <div className="absolute -inset-1 border-2 border-[#00A3D9] animate-pop-pulse-1 pointer-events-none rounded-sm"></div>
                <div className="absolute -inset-1 border-2 border-[#00A3D9] animate-pop-pulse-2 pointer-events-none rounded-sm"></div>
              </button>
            </div>
          </div>

          {/* Mobile CTA and Menu Button */}
          <div className="flex lg:hidden items-center space-x-2">
            <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-3 py-1.5 rounded-lg font-medium text-xs sm:text-sm hover:from-purple-600 hover:to-pink-600 transition-all duration-200 flex items-center">
              <span className="mr-1">✨</span>
              <span className="hidden sm:inline">Let's Talk AI</span>
              <span className="sm:hidden">AI</span>
            </button>
            
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-gray-900 p-2"
            >
              {isMobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Slide Panel */}
      <div className={`lg:hidden fixed inset-0 z-[100] ${isMobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
        {/* Backdrop - clicking this will close the menu */}
        <div 
          className={`absolute inset-0 bg-black transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-50' : 'opacity-0'}`}
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        {/* Side Panel - 70% width */}
        <div className={`absolute left-0 top-0 h-screen w-[70%] bg-[#005D89] transform transition-transform duration-300 overflow-hidden shadow-2xl ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          {/* Close Button */}
          <div className="flex items-center h-14 px-4 border-b border-white/20">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center text-white hover:opacity-80"
            >
              <svg className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              <span className="text-lg font-medium">Close</span>
            </button>
          </div>

          {/* Navigation Items */}
          <div className="h-[calc(100vh-3.5rem)] overflow-y-auto">
            {navItems.map((item, index) => (
              <div key={index}>
                <button
                  onClick={() => setActiveMobileDropdown(activeMobileDropdown === index ? null : index)}
                  className="w-full flex items-center justify-between text-white hover:bg-white/10 px-6 py-4 text-lg font-normal border-b border-white/20 transition-colors duration-200"
                >
                  {item.name}
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                
                {/* Mobile Dropdown */}
                {item.hasDropdown && activeMobileDropdown === index && (
                  <div className="bg-white/10">
                    <div className="px-8 py-3 text-white/90 hover:text-white cursor-pointer">
                      Sample dropdown item
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            {/* Let's Talk AI */}
            <button className="w-full flex items-center justify-between text-white hover:bg-white/10 px-6 py-4 text-lg font-normal border-b border-white/20 transition-colors duration-200">
              Let's Talk AI
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            {/* Contact Us Section */}
            <div className="mt-8 px-6 pb-8">
              <h3 className="text-white text-lg font-medium mb-4">Contact Us</h3>
              
              {/* India Number */}
              <div className="flex items-center text-white/90 mb-3">
                <span className="mr-3 text-2xl">🇮🇳</span>
                <div>
                  <span className="text-sm">For Sales: </span>
                  <a href="tel:+919429709662" className="hover:text-white">+91-942-970-9662</a>
                </div>
              </div>
              
              {/* US Number */}
              <div className="flex items-center text-white/90">
                <span className="mr-3 text-2xl">🇺🇸</span>
                <div>
                  <span className="text-sm">For Sales: </span>
                  <a href="tel:+17542587670" className="hover:text-white">+1-754-258-7670</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;