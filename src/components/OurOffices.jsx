import indiaFlagPath from '../assets/images/india_map.png'
import usaFlagPath from '../assets/images/usa_map.png'
import uaeFlagPath from '../assets/images/uae_map.png'
import ukFlagPath from '../assets/images/uk_map.png'
import canadaFlagPath from '../assets/images/canada_map.png'
import autraliaFlagPath from '../assets/images/australia_map.png'
import worldMapPath from '../assets/images/world_map.jpg'


const OfficeCard = ({ country, address, flagSrc }) => {
  return (
    <div
      className="bg-white rounded-lg p-6 text-center"
      style={{
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1), 4px 0 6px -2px rgba(0, 0, 0, 0.1), -4px 0 6px -2px rgba(0, 0, 0, 0.1)"
      }}
    >
      <div className="w-48 h-32 mx-auto mb-4 relative">
        <img
          src={flagSrc}
          alt={`${country} map`}
          className="w-full h-full object-contain opacity-90"
        />
      </div>
      <h3 className="text-xl font-semibold mb-3">{country}</h3>
      <p className="text-sm text-gray-700 leading-relaxed">{address}</p>
    </div>
  );
};

const OurOffices = () => {
  const offices = [
    {
      country: "India(HQ)",
      address: "C/102-103, Ganesh Meridian, Opp. Kargil Petrol Pump, S.G. Highway, Ahmedabad - 380060, Gujarat, INDIA",
      flagSrc: indiaFlagPath,
    },
    {
      country: "USA",
      address: "5004 NW 116th Ave,Coral Springs,Florida, FL 33076",
      flagSrc: usaFlagPath,
    },
    {
      country: "Canada",
      address: "111 Tarawood lane NE, unit#403 Calgary AB, T3J 0G8",
      flagSrc: canadaFlagPath,
    },
    {
      country: "Australia",
      address: "U 2B 305 Harborne street,Glendalough WA 6016",
      flagSrc: autraliaFlagPath,
    },
    {
      country: "UK",
      address: "42 Audley Avenue,Gillingham,ME73AY United Kingdom",
      flagSrc: ukFlagPath,
    },
    {
      country: "UAE",
      address: "A-21, Building 21, Ghoroob Mirdif, Dubai, United Arab Emirates",
      flagSrc: uaeFlagPath,
    }
  ];

  return (
    <section
      className="py-4 px-4 bg-no-repeat bg-top"
      style={{
        backgroundImage: `linear-gradient(to bottom, transparent 50%, white 50%), url(${worldMapPath})`,
        backgroundSize: "cover",
        backgroundPosition: "top",
      }}
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">Our Offices</h2>
        <p className="text-xl text-center text-gray-600 mb-12">
          We are located at these locations
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offices.map((office, index) => (
            <OfficeCard
              key={index}
              country={office.country}
              address={office.address}
              flagSrc={office.flagSrc}
              mapSrc={office.mapSrc}
            />
          ))}
        </div>
      </div>
    </section>

  );
};

export default OurOffices;