import companyLogoPath from '../assets/images/sapphire_logo.png'

const ContactFooter = () => {
  const locations = [
    {
      country: "India(HQ)",
      flag: "🇮🇳",
      address: [
        "C/102-103, Ganesh",
        "Meridian, Opp. Kargil",
        "Petrol Pump, S.G. Highway,",
        "Ahmedabad - 380060,",
        "Gujarat, INDIA"
      ],
      image: "/api/placeholder/150/100" // Replace with actual image URL
    },
    {
      country: "USA",
      flag: "🇺🇸",
      address: [
        "5004 NW 116th",
        "Ave Coral",
        "Springs, Florida,",
        "FL 33076"
      ],
      image: "/api/placeholder/150/100"
    },
    {
      country: "Canada",
      flag: "🇨🇦",
      address: [
        "111 Tarawood lane NE,",
        "unit#403 Calgary AB,",
        "T3J 0G8"
      ],
      image: "/api/placeholder/150/100"
    },
    {
      country: "Australia",
      flag: "🇦🇺",
      address: [
        "U 2B 305 Harborne",
        "Street, Glendalough",
        "6016 WA"
      ],
      image: "/api/placeholder/150/100"
    },
    {
      country: "UK",
      flag: "🇬🇧",
      address: [
        "42",
        "Audley Avenue,",
        "Gillingham,ME73AY",
        "United Kingdom"
      ],
      image: "/api/placeholder/150/100"
    },
    {
      country: "UAE",
      flag: "🇦🇪",
      address: [
        "A-21, Building 21,",
        "Ghoroob,Mirdif",
        "Dubai, United",
        "Arab Emirates"
      ],
      image: "/api/placeholder/150/100"
    }
  ];

  const featuredPosts = [
    {
      platform: "Google",
      rating: 5,
      reviews: "1012 REVIEWS",
      image: "/api/placeholder/60/60" // Replace with actual Google reviews image
    },
    {
      platform: "Clutch",
      rating: 5,
      reviews: "301 REVIEWS",
      image: "/api/placeholder/60/60" // Replace with actual Clutch reviews image
    },
    {
      platform: "GoodFirms",
      rating: 5,
      reviews: "201 REVIEWS",
      image: "/api/placeholder/60/60" // Replace with actual GoodFirms reviews image
    }
  ];

  const socialLinks = [
    { icon: "f", bgColor: "bg-blue-600" },
    { icon: "𝕏", bgColor: "bg-black" },
    { icon: "in", bgColor: "bg-blue-700" },
    { icon: "📷", bgColor: "bg-gradient-to-r from-purple-500 to-pink-500" },
    { icon: "▶", bgColor: "bg-red-600" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-6">
          
          {/* Left Grid */}
          <div className="space-y-6">
            
            {/* Row 1: Company Logo */}
            <div className="p-4">
              <img 
                src={companyLogoPath} // Replace with actual Sapphire logo URL
                alt="Sapphire Software Solutions"
                className="h-16 object-contain"
              />
            </div>

            {/* Row 2: Two Contact Cards */}
            <div className="grid md:grid-cols-2 gap-4">
              {/* Contact For Sales */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-blue-600 mb-4">Contact For Sales</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-600">✉</span>
                    <span className="text-sm text-gray-700">contact@sapphiresolutions.net</span>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-600">📞</span>
                      <span className="text-sm text-gray-700">IN:+91-942-970-9862</span>
                    </div>
                    <div className="ml-6">
                      <span className="text-sm text-gray-700">US:+1-754-258-7670</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact for Career */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-blue-600 mb-4">Contact for Career (Jobs)</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-600">✉</span>
                    <span className="text-sm text-gray-700">careers@sapphiresolutions.net</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-600">📞</span>
                    <span className="text-sm text-gray-700">+91-909-997-6034</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 3: Featured Posts (Review Cards) */}
            <div className="grid grid-cols-3 gap-4">
              {featuredPosts.map((post, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-4">
                  <img 
                    src={post.image} 
                    alt={post.platform}
                    className="w-16 h-16 mx-auto mb-2"
                  />
                  <div className="text-center">
                    <div className="font-bold text-sm mb-1">{post.platform}</div>
                    <div className="flex justify-center text-yellow-400 mb-1">
                      {[...Array(post.rating)].map((_, i) => (
                        <span key={i}>⭐</span>
                      ))}
                    </div>
                    <div className="text-xs font-semibold">{post.reviews}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Row 4: Icon Buttons */}
            <div className="bg-white rounded-lg shadow-lg p-4">
              <div className="flex items-center justify-between">
                <div className="flex space-x-3">
                  {/* Certification badges */}
                  <div className="bg-gray-200 rounded px-3 py-2 text-xs font-medium">W3C HTML5</div>
                  <div className="bg-gray-200 rounded px-3 py-2 text-xs font-medium">DMCA Protected</div>
                  <div className="bg-gray-200 rounded px-3 py-2 text-xs font-medium">W3C CSS</div>
                </div>
                
                <div className="flex space-x-2">
                  {socialLinks.map((social, index) => (
                    <div
                      key={index}
                      className={`w-10 h-10 rounded-full ${social.bgColor} text-white flex items-center justify-center cursor-pointer hover:opacity-80 transition`}
                    >
                      {social.icon}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Grid - 6 Location Cards */}
          <div className="grid md:grid-cols-2 gap-4">
            {locations.map((location, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-4">
                {/* Row 1: Flag and Country Name */}
                <div className="flex items-center space-x-2 mb-3 pb-2 border-b">
                  <span className="text-2xl">{location.flag}</span>
                  <h3 className="text-lg font-bold">{location.country}</h3>
                </div>
                
                {/* Row 2: Address and Image */}
                <div className="flex space-x-3">
                  <div className="flex-1 text-xs text-gray-600">
                    {location.address.map((line, i) => (
                      <div key={i}>{line}</div>
                    ))}
                  </div>
                  <img 
                    src={location.image} 
                    alt={`${location.country} office`}
                    className="w-24 h-20 object-cover rounded"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactFooter;