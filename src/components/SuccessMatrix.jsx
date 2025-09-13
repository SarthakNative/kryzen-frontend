const SuccessMatrix = ({ iconUrls = {} }) => {
  const features = [
    {
      id: 'seo',
      title: 'SEO and Digital Marketing',
      defaultIcon: '📢',
    },
    {
      id: 'support',
      title: '4 months + Free Post Launch Support',
      defaultIcon: '🎧',
    },
    {
      id: 'nda',
      title: 'Non-Disclosure',
      defaultIcon: '🤝',
    },
    {
      id: 'value',
      title: '100% value for the money',
      defaultIcon: '💰',
    },
    {
      id: 'coding',
      title: 'Professional coding and version controls',
      defaultIcon: '💻',
    },
    {
      id: 'payment',
      title: 'Flexible payment plans',
      defaultIcon: '📅',
    },
    {
      id: 'tracking',
      title: 'Real-time project tracking tools',
      defaultIcon: '📊',
    },
    {
      id: 'custom',
      title: 'Custom Tailored support | AMC Plans',
      defaultIcon: '🔧',
    },
    {
      id: 'quality',
      title: 'Quality Assurance and Unit Test Cases',
      defaultIcon: '✅',
    },
    {
      id: 'penalty',
      title: 'Penalty enforcement in case of Delivery Delay',
      defaultIcon: '📋',
    },
    {
      id: 'analysis',
      title: 'In-dept analysis of revenue business Models',
      defaultIcon: '📈',
    },
    {
      id: 'mindmaps',
      title: 'Mind Maps and video demos',
      defaultIcon: '🗺️',
    },
  ];

  return (
    <section className="py-8 px-40">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-6 text-gray-900">
          Success Matrix
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-4xl mx-auto text-lg">
          We offer comprehensive services to develop digital solutions & manage complete product lifecycle. We've robust work history with diverse business services.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white rounded-lg p-6 flex flex-col items-center justify-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-16 h-16 mb-4 flex items-center justify-center">
                {iconUrls[feature.id] ? (
                  <img
                    src={iconUrls[feature.id]}
                    alt={feature.title}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <span className="text-4xl">{feature.defaultIcon}</span>
                )}
              </div>
              <p className="text-center text-sm font-medium text-black-700">
                {feature.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Example usage:
const App = () => {
  // You can pass your image URLs here
  const iconUrls = {
    seo: 'https://example.com/seo-icon.png',
    support: 'https://example.com/support-icon.png',
    nda: 'https://example.com/handshake-icon.png',
    value: 'https://example.com/money-icon.png',
    coding: 'https://example.com/code-icon.png',
    payment: 'https://example.com/calendar-icon.png',
    tracking: 'https://example.com/chart-icon.png',
    custom: 'https://example.com/tools-icon.png',
    quality: 'https://example.com/quality-icon.png',
    penalty: 'https://example.com/document-icon.png',
    analysis: 'https://example.com/analysis-icon.png',
    mindmaps: 'https://example.com/mindmap-icon.png',
  };

  return <SuccessMatrix iconUrls={iconUrls} />;
};

export default SuccessMatrix;