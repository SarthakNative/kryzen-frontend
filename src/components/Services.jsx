const Services = () => {
  return (
    <footer className="bg-gray-50 p-4">
     <div className="max-w-7xl mx-auto p-4 border border-gray-300 rounded-lg">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Section */}
          <div>
            <h3 className="text-blue-900 font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li className="relative pl-3 before:content-[''] before:absolute before:left-0 before:top-1.5 before:w-1.5 before:h-1.5 before:bg-[#0874a7] before:rounded-full">
                <a href="#" className="text-gray-600 hover:text-blue-600 text-xs">About Sapphire</a>
              </li>
              <li className="relative pl-3 before:content-[''] before:absolute before:left-0 before:top-1.5 before:w-1.5 before:h-1.5 before:bg-[#0874a7] before:rounded-full">
                <a href="#" className="text-gray-600 hover:text-blue-600 text-xs">Our Team</a>
              </li>
              <li className="relative pl-3 before:content-[''] before:absolute before:left-0 before:top-1.5 before:w-1.5 before:h-1.5 before:bg-[#0874a7] before:rounded-full">
                <a href="#" className="text-gray-600 hover:text-blue-600 text-xs">Events & Activities</a>
              </li>
              <li className="relative pl-3 before:content-[''] before:absolute before:left-0 before:top-1.5 before:w-1.5 before:h-1.5 before:bg-[#0874a7] before:rounded-full">
                <a href="#" className="text-gray-600 hover:text-blue-600 text-xs">Careers (Jobs)</a>
              </li>
              <li className="relative pl-3 before:content-[''] before:absolute before:left-0 before:top-1.5 before:w-1.5 before:h-1.5 before:bg-[#0874a7] before:rounded-full">
                <a href="#" className="text-gray-600 hover:text-blue-600 text-xs">Contact-Us</a>
              </li>
              <li className="relative pl-3 before:content-[''] before:absolute before:left-0 before:top-1.5 before:w-1.5 before:h-1.5 before:bg-[#0874a7] before:rounded-full">
                <a href="#" className="text-gray-600 hover:text-blue-600 text-xs">Portfolio</a>
              </li>
              <li className="relative pl-3 before:content-[''] before:absolute before:left-0 before:top-1.5 before:w-1.5 before:h-1.5 before:bg-[#0874a7] before:rounded-full">
                <a href="#" className="text-gray-600 hover:text-blue-600 text-xs">Awards & Recognition</a>
              </li>
              <li className="relative pl-3 before:content-[''] before:absolute before:left-0 before:top-1.5 before:w-1.5 before:h-1.5 before:bg-[#0874a7] before:rounded-full">
                <a href="#" className="text-gray-600 hover:text-blue-600 text-xs">Why Choose Us</a>
              </li>
            </ul>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="text-blue-900 font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="relative pl-3 before:content-[''] before:absolute before:left-0 before:top-1.5 before:w-1.5 before:h-1.5 before:bg-[#0874a7] before:rounded-full">
                <a href="#" className="text-gray-600 hover:text-blue-600 text-xs">Product Development</a>
              </li>
              <li className="relative pl-3 before:content-[''] before:absolute before:left-0 before:top-1.5 before:w-1.5 before:h-1.5 before:bg-[#0874a7] before:rounded-full">
                <a href="#" className="text-gray-600 hover:text-blue-600 text-xs">Cloud Development</a>
              </li>
              <li className="relative pl-3 before:content-[''] before:absolute before:left-0 before:top-1.5 before:w-1.5 before:h-1.5 before:bg-[#0874a7] before:rounded-full">
                <a href="#" className="text-gray-600 hover:text-blue-600 text-xs">UI/UX Design</a>
              </li>
              <li className="relative pl-3 before:content-[''] before:absolute before:left-0 before:top-1.5 before:w-1.5 before:h-1.5 before:bg-[#0874a7] before:rounded-full">
                <a href="#" className="text-gray-600 hover:text-blue-600 text-xs">Microsoft Development</a>
              </li>
              <li className="relative pl-3 before:content-[''] before:absolute before:left-0 before:top-1.5 before:w-1.5 before:h-1.5 before:bg-[#0874a7] before:rounded-full">
                <a href="#" className="text-gray-600 hover:text-blue-600 text-xs">IT Outsourcing</a>
              </li>
              <li className="relative pl-3 before:content-[''] before:absolute before:left-0 before:top-1.5 before:w-1.5 before:h-1.5 before:bg-[#0874a7] before:rounded-full">
                <a href="#" className="text-gray-600 hover:text-blue-600 text-xs">Testing & QA</a>
              </li>
              <li className="relative pl-3 before:content-[''] before:absolute before:left-0 before:top-1.5 before:w-1.5 before:h-1.5 before:bg-[#0874a7] before:rounded-full">
                <a href="#" className="text-gray-600 hover:text-blue-600 text-xs">Hire Dedicated Developers</a>
              </li>
            </ul>
          </div>

          {/* Technology Section */}
          <div>
            <h3 className="text-blue-900 font-bold text-lg mb-4">Technology</h3>
            <div className="grid grid-cols-2 gap-x-8">
              <ul className="space-y-2">
                {['.NET', 'PHP', 'Android', 'iOS', 'Flutter', 'Xamarin'].map((tech) => (
                  <li key={tech} className="relative pl-3 before:content-[''] before:absolute before:left-0 before:top-1.5 before:w-1.5 before:h-1.5 before:bg-[#0874a7] before:rounded-full">
                    <a href="#" className="text-gray-600 hover:text-blue-600 text-xs">{tech}</a>
                  </li>
                ))}
              </ul>
              <ul className="space-y-2">
                {[
                  'Taxi Booking App',
                  'Covid Tracker App',
                  'E-Commerce App',
                  'Product Finder App',
                  'Eyelash Booking App',
                  'Language Learning App',
                  'Barber shop Booking App',
                  'On Demand App Development',
                ].map((app) => (
                  <li key={app} className="relative pl-3 before:content-[''] before:absolute before:left-0 before:top-1.5 before:w-1.5 before:h-1.5 before:bg-[#0874a7] before:rounded-full">
                    <a href="#" className="text-gray-600 hover:text-blue-600 text-xs">{app}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Solutions Section */}
          <div>
            <h3 className="text-blue-900 font-bold text-lg mb-4">Solutions</h3>
            <div className="grid grid-cols-2 gap-x-4">
              <ul className="space-y-2">
                {[
                  'Fitness App',
                  'Dating App',
                  'Salon App',
                  'Car Wash App',
                  'E-Learning App',
                  'Car Rental App',
                  'Bike Rental App',
                  'Food Delivery App',
                ].map((solution) => (
                  <li key={solution} className="relative pl-3 before:content-[''] before:absolute before:left-0 before:top-1.5 before:w-1.5 before:h-1.5 before:bg-[#0874a7] before:rounded-full">
                    <a href="#" className="text-gray-600 hover:text-blue-600 text-xs">{solution}</a>
                  </li>
                ))}
              </ul>
              <ul className="space-y-2">
                {[
                  'E-Commerce Solution',
                  'Car Rental App',
                  'Medicine Delivery App',
                  'Chat App Development',
                  'Pet Management App',
                  'Emergency Alert App',
                  'Payment Service App',
                  'Sports App Development',
                ].map((solution) => (
                  <li key={solution} className="relative pl-3 before:content-[''] before:absolute before:left-0 before:top-1.5 before:w-1.5 before:h-1.5 before:bg-[#0874a7] before:rounded-full">
                    <a href="#" className="text-gray-600 hover:text-blue-600 text-xs">{solution}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Services;
