import { useState } from 'react';
import companyLogo from '../assets/images/sapphire_logo.png'

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navItems = [
    { name: 'Company', hasDropdown: true },
    { name: 'Product', hasDropdown: true },
    { name: 'Services', hasDropdown: true },
    { name: 'Technology', hasDropdown: true },
    { name: 'Hire Developers', hasDropdown: true },
    { name: 'Our Work', hasDropdown: true },
  ];

  return (
    <header className="border-b border-gray-200">
      <div className="mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Left Side */}
          <div className="flex-shrink-0">
            <img
              src={companyLogo}
              alt="Company Logo"
              className="h-10 w-auto" // Adjust height as needed
            />
          </div>

          {/* Right Side Content */}
          <div className="flex items-center space-x-8">
            {/* Navigation */}
            <nav className="hidden lg:flex items-center space-x-2">
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

                {/* Static blue border - always visible */}
                <div className="absolute -inset-1 border-2 border-[#00A3D9] pointer-events-none rounded-sm"></div>

                {/* First animated blue border */}
                <div className="absolute -inset-1 border-2 border-[#00A3D9] animate-pop-pulse-1 pointer-events-none rounded-sm"></div>

                {/* Second animated blue border */}
                <div className="absolute -inset-1 border-2 border-[#00A3D9] animate-pop-pulse-2 pointer-events-none rounded-sm"></div>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button className="text-gray-700 hover:text-gray-900 p-2">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;