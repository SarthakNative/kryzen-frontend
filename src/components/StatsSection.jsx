import buildingsPath from '../assets/images/buildings.jpg'
const StatsSection = () => {
  const stats = [
    { number: "20+", label: "Years Experience" },
    { number: "2800+", label: "Satisfied Clients" },
    { number: "1500+", label: "Projects Completed" },
    { number: "200+", label: "IT Professional" },
    { number: "95%", label: "Client Retention" },
    { number: "18+", label: "Industry Served" },
    { number: "30+", label: "Countries Active Customers" },
    { number: "6+", label: "Global Offices" }
  ];

  const features = [
    { 
      icon: "🌐", 
      text: "Work at your time zone" 
    },
    { 
      icon: "💬", 
      text: "Easy communication" 
    },
    { 
      icon: "🤝", 
      text: "Hire in 48 Hours" 
    },
    { 
      icon: "🏆", 
      text: "In Business since 2002" 
    }
  ];

  return (
    <div className="relative bg-cover bg-center bg-no-repeat" 
         style={{
    backgroundImage: `url(${buildingsPath})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
         
         >
      {/* Blue overlay */}
    <div className="absolute inset-0 bg-blue-700/70"></div>

      
      {/* Content */}
      <div className="relative z-10 px-8 py-4 mx-auto max-w-5xl">
        {/* Header */}
        <div className="text-center mb-4">
          <h1 className="text-4xl md:text-3xl font-bold text-white mb-4">
            Glance through our creations and presence
          </h1>
          <p className="text-lg text-white/90 max-w-4xl mx-auto">
            We are a team of qualified Salesforce Development Professionals adept at expanding your current system's capabilities via the 
            development and integration of Salesforce CRM.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-4">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-4 text-center shadow-lg">
              <h2 className="text-4xl font-bold text-blue-700 mb-2">{stat.number}</h2>
              <p className="text-blue-700 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-4 text-center shadow-lg">
              <div className="text-5xl ">{feature.icon}</div>
              <p className="text-blue-700 font-medium">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;