import award1Path from '../assets/images/award1.png'
import award2Path from '../assets/images/award2.png'
import award3Path from '../assets/images/award3.png'
import award4Path from '../assets/images/award4.png'
import award5Path from '../assets/images/award5.png'
import award6Path from '../assets/images/award6.png'
import award7Path from '../assets/images/award7.png'

const AwardsRecognition = () => {
  const awards = [
    {
      id: 1,
      name: 'Gesia Logo',
      imageUrl: award1Path,
      alt: 'Gesia Logo'
    },
    {
      id: 2,
      name: 'ISO Certification',
      imageUrl: award2Path, 
      alt: 'ISO 27001:2013 Certification'
    },
    {
      id: 3,
      name: 'Chamber of Commerce',
      imageUrl: award3Path, 
      alt: 'Chamber of Commerce GCCI'
    },
    {
      id: 4,
      name: 'Security Badge 1',
      imageUrl: award4Path, 
      alt: 'Security Certification'
    },
    {
      id: 5,
      name: 'Security Badge 2',
      imageUrl: award5Path,
      alt: 'Security Certification'
    },
    {
      id: 6,
      name: 'Top Rated',
      imageUrl: award6Path, 
      alt: 'Top Rated on SoftwareWorld.co'
    },
    {
      id: 7,
      name: 'Clutch',
      imageUrl: award7Path, 
      alt: 'Clutch Top B2B Company'
    },
    {
      id: 8,
      name: 'Software Developers',
      imageUrl: award7Path,
      alt: 'Most Reviewed Software Developers'
    },
    {
      id: 9,
      name: 'Spring App Development',
      imageUrl: award7Path, 
      alt: 'Most Reviewed Spring App Development Company'
    },
    {
      id: 10,
      name: 'E-Commerce Developers',
      imageUrl: award7Path, 
      alt: 'Most Reviewed E-Commerce Developers'
    },
    {
      id: 11,
      name: 'Blockchain Company',
      imageUrl: award7Path,
      alt: 'Most Reviewed Blockchain Company'
    },
    {
      id: 12,
      name: 'API Development',
      imageUrl: award7Path, 
      alt: 'Most Reviewed API Development Company'
    },
    {
      id: 13,
      name: 'Design Company',
      imageUrl: award7Path, 
      alt: 'Most Reviewed Design Company'
    },
    {
      id: 14,
      name: 'Web Developers',
      imageUrl: award7Path, 
      alt: 'Most Reviewed Web Developers'
    }
  ];

  return (
<div className="bg-gray-50 ">
 <div className="max-w-7xl bg-gray-50 mx-auto p-4 border border-gray-300 rounded-lg">
    <h2 className="text-2xl md:text-xl font-bold text-blue-600 mb-8 ">
      Awards & Recognition
    </h2>

    <div className="flex flex-wrap xl:flex-nowrap items-center justify-center gap-4 md:gap-6 lg:gap-8">
      {awards.map((award) => (
        <div
          key={award.id}
          className="flex items-center justify-center"
        >
          <img
            src={award.imageUrl}
            alt={award.alt}
            className="h-16 md:h-20 lg:h-24 w-auto object-contain hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              e.target.src = `https://via.placeholder.com/100x100?text=${award.name.replace(/\s/g, '+')}`;
            }}
          />
        </div>
      ))}
    </div>
  </div>
</div>

  );
};

export default AwardsRecognition;