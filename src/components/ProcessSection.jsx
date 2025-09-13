import React from 'react';

const ProcessSection = () => {
  const processes = [
    {
      title: "Discover",
      items: [
        "Brainstorming",
        "Hypothesis",
        "Conceptualization",
        "Assumptions",
        "Constraints",
        "NDA"
      ],
      bgColor: "rgba(243, 232, 255, 0.8)" // Light purple with transparency
    },
    {
      title: "Define",
      items: [
        "Req. Definition",
        "SRS Document",
        "Project Planning",
        "Dev. Planning",
        "Milestones"
      ],
      bgColor: "rgba(224, 242, 254, 0.8)" // Light blue with transparency
    },
    {
      title: "Design",
      items: [
        "Brainstorming",
        "Hypothesis",
        "Conceptualization",
        "Assumptions",
        "Constraints"
      ],
      bgColor: "rgba(209, 250, 229, 0.8)" // Light green with transparency
    },
    {
      title: "Develop",
      items: [
        "Coding",
        "APIs",
        "Testing / QA",
        "Debug",
        "Change Mgmt"
      ],
      bgColor: "rgba(254, 215, 170, 0.8)" // Light orange with transparency
    },
    {
      title: "Deliver",
      items: [
        "Environment",
        "Deployment",
        "Migration",
        "Support",
        "Review"
      ],
      bgColor: "rgba(252, 231, 243, 0.8)" // Light pink with transparency
    }
  ];

  return (
    <div className="w-full py-16 px-4 bg-gray-50">
      <h1 className="text-5xl font-bold text-center mb-16 text-gray-900">
        Process We Follow
      </h1>
      
      <div className="flex justify-center items-center max-w-7xl mx-auto">
       <div className="flex flex-col md:flex-row md:-space-x-8 space-y-4 md:space-y-0 relative px-4 md:px-0">
  {processes.map((process, index) => (
    <div
      key={index}
      className="flex flex-col items-center justify-start px-10 py-12 w-full md:w-[250px] h-[240px] rounded-[20%] relative"
      style={{
        backgroundColor: process.bgColor,
        mixBlendMode: 'multiply',
        zIndex: index
      }}
    >
      <h3 className="text-xl font-semibold mb-4 text-gray-800">
        {process.title}
      </h3>
      <ul className="text-center space-y-1">
        {process.items.map((item, itemIndex) => (
          <li key={itemIndex} className="text-sm text-gray-700">
            {item}
          </li>
        ))}
      </ul>
    </div>
  ))}
</div>
      </div>
    </div>
  );
};

export default ProcessSection;