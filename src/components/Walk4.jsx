import React from "react";

const JourneyPage = () => {
  const stats = [
    { label: "Distance", value: "2.5 km" },
    { label: "No. of Obstacles", value: "12" },
    { label: "Survey Responses", value: "156" },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Title */}
        <h1 className="text-4xl font-bold text-center text-white mb-16 tracking-tight">
          X Place to Y Place
        </h1>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl p-8 text-center transition-all duration-300 hover:shadow-lg hover:shadow-blue-700/20 hover:scale-105"
            >
              <h3 className="text-lg font-medium text-blue-400 mb-3">
                {stat.label}
              </h3>
              <p className="text-4xl font-bold text-white">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* First Paragraph */}
        <div className="mb-16">
          <p className="text-gray-300 leading-relaxed text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        {/* Survey Charts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[1, 2, 3].map((chart) => (
            <div
              key={chart}
              className="bg-gray-800 rounded-xl p-6 aspect-square flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-blue-700/20"
            >
              <p className="text-gray-400">Survey Chart {chart}</p>
            </div>
          ))}
        </div>

        {/* Second Paragraph */}
        <div className="mb-16">
          <p className="text-gray-300 leading-relaxed text-lg">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>

        {/* Maps Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {["MyMap", "Mapillary"].map((mapType) => (
            <div
              key={mapType}
              className="bg-gray-800 rounded-xl p-6 aspect-video flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-blue-700/20"
            >
              <p className="text-gray-400">{mapType} Embed Placeholder</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JourneyPage;
