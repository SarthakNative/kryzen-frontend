import companyLogoPath from '../assets/images/sapphire_logo.png'
import indiaFlagPath from '../assets/images/india_map.png'
import usaFlagPath from '../assets/images/usa_map.png'
import uaeFlagPath from '../assets/images/uae_map.png'
import ukFlagPath from '../assets/images/uk_map.png'
import canadaFlagPath from '../assets/images/canada_map.png'
import autraliaFlagPath from '../assets/images/australia_map.png'
import googleReviewPath from '../assets/images/google_review.png'
import goodFirmsReviewPath from '../assets/images/goodfirms_review.png'
import clutchReviewPath from '../assets/images/clutch_review.png'


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
      image: indiaFlagPath // Replace with actual image URL
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
      image: usaFlagPath
    },
    {
      country: "Canada",
      flag: "🇨🇦",
      address: [
        "111 Tarawood lane NE,",
        "unit#403 Calgary AB,",
        "T3J 0G8"
      ],
      image: canadaFlagPath
    },
    {
      country: "Australia",
      flag: "🇦🇺",
      address: [
        "U 2B 305 Harborne",
        "Street, Glendalough",
        "6016 WA"
      ],
      image: autraliaFlagPath
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
      image: ukFlagPath
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
      image: uaeFlagPath
    }
  ];

  const featuredPosts = [
    {
      platform: "Google",
      rating: 5,
      reviews: "1012 REVIEWS",
      image: googleReviewPath
    },
    {
      platform: "Clutch",
      rating: 5,
      reviews: "301 REVIEWS",
      image: clutchReviewPath
    },
    {
      platform: "GoodFirms",
      rating: 5,
      reviews: "201 REVIEWS",
      image: goodFirmsReviewPath
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
    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-6">

          {/* Left Grid */}
          <div className="space-y-6 px-4 sm:px-6 lg:px-8">

            {/* Row 1: Company Logo */}
            <div className="py-4">
              <img
                src={companyLogoPath}
                alt="Sapphire Software Solutions"
                className="h-12 sm:h-16 object-contain"
              />
            </div>

            {/* Row 2: Two Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Contact For Sales */}
              <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-blue-600 mb-3 sm:mb-4">Contact For Sales</h3>
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <span className="text-gray-600 flex-shrink-0">✉</span>
                    <span className="text-xs sm:text-sm text-gray-700 break-all">contact@sapphiresolutions.net</span>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-600 flex-shrink-0">📞</span>
                      <span className="text-xs sm:text-sm text-gray-700">IN:+91-942-970-9862</span>
                    </div>
                    <div className="ml-6">
                      <span className="text-xs sm:text-sm text-gray-700">US:+1-754-258-7670</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact for Career */}
              <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-blue-600 mb-3 sm:mb-4">Contact for Career (Jobs)</h3>
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <span className="text-gray-600 flex-shrink-0">✉</span>
                    <span className="text-xs sm:text-sm text-gray-700 break-all">careers@sapphiresolutions.net</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-600 flex-shrink-0">📞</span>
                    <span className="text-xs sm:text-sm text-gray-700">+91-909-997-6034</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 3: Featured Posts (Review Cards) */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4">
              {featuredPosts.map((post, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-2 sm:p-3">
                  <img
                    src={post.image}
                    alt={post.platform}
                    className="w-20 sm:w-30 h-12 sm:h-20 mx-auto object-contain"
                  />
                </div>
              ))}
            </div>

            {/* Row 4: Icon Buttons */}
            <div className="py-4">
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:justify-between">
                {/* Certification badges */}
                <div className="flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-3">
                  <div className="bg-gray-200 rounded px-2 sm:px-3 py-1 sm:py-2 text-xs font-medium">W3C HTML5</div>
                  <div className="bg-gray-200 rounded px-2 sm:px-3 py-1 sm:py-2 text-xs font-medium">DMCA Protected</div>
                  <div className="bg-gray-200 rounded px-2 sm:px-3 py-1 sm:py-2 text-xs font-medium">W3C CSS</div>
                </div>

                {/* Social icons */}
                <div className="flex space-x-2">
                  {socialLinks.map((social, index) => (
                    <div
                      key={index}
                      className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full ${social.bgColor} text-white flex items-center justify-center cursor-pointer hover:opacity-80 transition`}
                    >
                      {social.icon}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Grid - 6 Location Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            {locations.map((location, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-4 w-full max-w-full overflow-hidden"
              >
                {/* Row 1: Flag and Country Name */}
                <div className="flex items-center space-x-2 mb-3 pb-2 border-b">
                  <span className="text-2xl">{location.flag}</span>
                  <h3 className="text-lg font-bold">{location.country}</h3>
                </div>

                {/* Row 2: Address and Image */}
                <div className="flex flex-col sm:flex-row sm:space-x-3 space-y-3 sm:space-y-0 w-full">
                  {/* Address */}
                  <div className="flex-1 text-xs text-gray-600 break-words">
                    {location.address.map((line, i) => (
                      <div key={i}>{line}</div>
                    ))}
                  </div>

                  {/* Image */}
                  <img
                    src={location.image}
                    alt={`${location.country} office`}
                    className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded flex-shrink-0"
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