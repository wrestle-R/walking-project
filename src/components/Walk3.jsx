import React from "react";
import {
  LineChart,
  Line,
  PieChart,
  Pie,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Cell,
} from "recharts";
import Navbar from "./Navbar";

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
        <p className="text-white">{`Location: ${label}`}</p>
        <p className="text-blue-400">{`Obstacles: ${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};

const JourneyPage = () => {
  const stats = [
    { label: "Distance", value: "4.1 km" },
    { label: "No. of Obstacles", value: "40" },
    { label: "Survey Responses", value: "165" },
  ];

  const obstacleDistributionData = [
    { point: "Bandra Station", distance: "0.0", obstacles: 8 },
    { point: "Hill Road", distance: "0.5", obstacles: 12 },
    { point: "Linking Road", distance: "1.0", obstacles: 15 },
    { point: "S.V. Road", distance: "1.5", obstacles: 20 },
    { point: "Turner Road", distance: "2.0", obstacles: 10 },
    { point: "Pali Hill", distance: "2.5", obstacles: 5 },
    { point: "Santacruz Market", distance: "3.0", obstacles: 3 },
  ];

  const pedestrianUsageData = [
    { type: "Daily Commute", value: 45, color: "#22C55E" },
    { type: "Weekly Visit", value: 30, color: "#3B82F6" },
    { type: "Monthly Visit", value: 15, color: "#EAB308" },
    { type: "Rare Visit", value: 10, color: "#EF4444" },
  ];

  const footpathConditionData = [
    { type: "Good Condition", value: 35, color: "#22C55E" },
    { type: "Average Condition", value: 40, color: "#EAB308" },
    { type: "Poor Condition", value: 25, color: "#EF4444" },
  ];

  return (
    <>
      <div className="bg-[#1e1e1e]">
        <Navbar />
        <hr />
      </div>
      <div className="min-h-screen bg-[#1e1e1e] text-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-12">
          {/* Title */}
          <h1 className="text-4xl font-bold text-center text-white mb-16 tracking-tight">
            Vile Parle to Andheri
          </h1>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gray-800 rounded-xl p-8 text-center transition-all duration-300 hover:shadow-lg hover:shadow-blue-700/20 hover:scale-105">
              <div className="text-center">
                <p className="text-lg font-medium text-blue-400 mb-2">
                  {stat.label}
                </p>
                <p className="text-4xl font-bold text-white">
                  {stat.value}
                </p>
              </div>
            </div>
          ))}
        </div>


          {/* Analysis Section */}
          <div className="mb-16">
            <p className="text-gray-300 leading-relaxed text-lg">
              The Vile Parle to Andheri stretch spans 4.1 kilometers and
              represents one of the better-maintained pedestrian corridors in
              Mumbai's western suburbs. Our analysis, based on 165 survey
              responses, reveals a well-planned urban walkway with notably wide
              footpaths and organized commercial zones. The route benefits from
              recent infrastructure improvements, including properly designated
              crossing points and improved street lighting, making it
              particularly pedestrian-friendly even during evening hours.
            </p>
          </div>

          {/* Survey Charts */}
                 {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {/* Obstacle Distribution Chart */}
          <div className="p-6 bg-gray-800 border border-gray-700 rounded-lg">
            <h2 className="text-lg font-medium text-blue-400 mb-4">
              Obstacle Distribution
            </h2>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={obstacleDistributionData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis
                    dataKey="point"
                    tick={{ fill: '#9CA3AF' }}
                    angle={-45}
                    textAnchor="end"
                    height={80}
                  />
                  <YAxis tick={{ fill: '#9CA3AF' }} />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="obstacles"
                    stroke="#3B82F6"
                    strokeWidth={2}
                    dot={{ fill: '#3B82F6', r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Pedestrian Usage Chart */}
          <div className="p-6 bg-gray-800 border border-gray-700 rounded-lg">
            <h2 className="text-lg font-medium text-blue-400 mb-4">
              Pedestrian Usage Frequency
            </h2>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pedestrianUsageData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={2}
                    dataKey="value"
                    nameKey="type"
                  >
                    {pedestrianUsageData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Footpath Condition Chart */}
          <div className="p-6 bg-gray-800 border border-gray-700 rounded-lg">
            <h2 className="text-lg font-medium text-blue-400 mb-4">
              Footpath Condition
            </h2>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={footpathConditionData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={2}
                    dataKey="value"
                    nameKey="type"
                  >
                    {footpathConditionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
          {/* Key Findings */}
          <div className="mb-16">
            <p className="text-gray-300 leading-relaxed text-lg">
              The data reveals significant pedestrian activity, with peak flows
              reaching 580 people during evening rush hours (6 PM) and 520
              during morning commutes (9 AM). Infrastructure assessment shows an
              impressive 75% of the stretch in good condition, with only 5%
              requiring attention. The primary challenges include some broken
              pavements and regulated street vendor zones, though these are
              well-managed compared to other areas. The route's proximity to
              both railway stations contributes to its high utilization, while
              recent improvements have significantly enhanced its walkability.
            </p>
          </div>

          {/* Maps Section */}
          <div className="grid grid-cols-2 gap-8">
            {/* Google My Maps */}
            <div className="w-full h-[80vh]">
              <iframe
                src="https://www.google.com/maps/d/embed?mid=1TnjqBM5eoHbAskg3RUWRpWiQKzCTIWA&ehbc=2E312F"
                width="100%"
                height="100%"
                title="Route Map"
                className="w-full h-full"
              />
            </div>

            {/* Mapillary */}
            <div className="w-full h-[80vh]">
              <iframe
                src="https://www.mapillary.com/embed?map_style=OpenStreetMap&image_key=1240144430506052&x=0.5&y=0.5&style=photo"
                width="100%"
                height="100%"
                frameBorder="0"
                title="Street View"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JourneyPage;
