import React from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import Navbar from "./Navbar";

const JourneyPage = () => {
  const stats = [
    { label: "Distance", value: "4.2 km" },
    { label: "No. of Obstacles", value: "22" },
    { label: "Survey Responses", value: "160" },
  ];

  const obstaclesData = [
    { category: "Missing Footpath", count: 10 },
    { category: "Obstructed Footpath", count: 7 },
    { category: "Broken/Uneven Surfaces", count: 3 },
    { category: "Well-Maintained Footpath", count: 2 },
  ];

  const pedestrianData = [
    { time: "6 AM", count: 200 },
    { time: "9 AM", count: 480 },
    { time: "12 PM", count: 320 },
    { time: "3 PM", count: 360 },
    { time: "6 PM", count: 530 },
    { time: "9 PM", count: 240 },
  ];

  const maintenanceData = [
    { type: "Good", value: 25, color: "#4CAF50" },
    { type: "Fair", value: 40, color: "#FFC107" },
    { type: "Poor", value: 35, color: "#F44336" },
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
            Goregaon to Malad
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

          {/* Analysis Section */}
          <div className="mb-16">
            <p className="text-gray-300 leading-relaxed text-lg">
              The 4.2-kilometer stretch from Goregaon to Malad presents a mixed
              bag of pedestrian infrastructure. Our survey of 160 respondents
              reveals that while some sections feature well-maintained
              footpaths, particularly near schools, colleges, and major transit
              hubs, a significant portion of the route lacks any form of
              dedicated pedestrian facilities. This forces walkers to navigate
              the road alongside vehicles, creating safety concerns.
              Additionally, we found instances of parked cars and other
              encroachments obstructing the limited footpath coverage.
            </p>
          </div>

          {/* Survey Charts */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Obstacles Chart */}
            <div className="bg-gray-800 rounded-xl p-6 aspect-square">
              <h3 className="text-lg font-medium text-blue-400 mb-4 text-center">
                Infrastructure Obstacles
              </h3>
              <ResponsiveContainer width="100%" height="80%">
                <BarChart data={obstaclesData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="category" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="count" fill="#60A5FA" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Pedestrian Traffic Chart */}
            <div className="bg-gray-800 rounded-xl p-6 aspect-square">
              <h3 className="text-lg font-medium text-blue-400 mb-4 text-center">
                Daily Pedestrian Traffic
              </h3>
              <ResponsiveContainer width="100%" height="80%">
                <LineChart data={pedestrianData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="count" stroke="#60A5FA" />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Infrastructure Maintenance Chart */}
            <div className="bg-gray-800 rounded-xl p-6 aspect-square">
              <h3 className="text-lg font-medium text-blue-400 mb-4 text-center">
                Infrastructure Condition
              </h3>
              <ResponsiveContainer width="100%" height="80%">
                <PieChart>
                  <Pie
                    data={maintenanceData}
                    dataKey="value"
                    nameKey="type"
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    label
                  >
                    {maintenanceData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Key Findings */}
          <div className="mb-16">
            <p className="text-gray-300 leading-relaxed text-lg">
              Our analysis reveals that 25% of the infrastructure is in good
              condition, primarily in the areas surrounding key destinations
              like schools and transit hubs. However, 35% of the route is in
              poor condition, with missing or obstructed footpaths forcing
              pedestrians to share the road with vehicles. This mixed landscape
              is reflected in our obstacle count of 22, with the most
              significant issues being missing footpaths and obstructions.
              Despite these challenges, the route experiences substantial
              pedestrian traffic, peaking at 530 people during the evening rush
              hour (6 PM) and 480 during the morning commute (9 AM). Addressing
              the infrastructure gaps in this stretch would significantly
              improve the safety and walkability for the many residents who rely
              on it.
            </p>
          </div>

          {/* Maps Section */}
          <div className="grid grid-cols-2 gap-8">
            {/* Google My Maps */}
            <div className="w-full h-[80vh]">
              <iframe
                src=""
                width="100%"
                height="100%"
                title="Route Map"
                className="w-full h-full"
              />
            </div>

            {/* Mapillary */}
            <div className="w-full h-[80vh]">
              <iframe
                src="https://www.mapillary.com/embed?map_style=Mapillary%20light&image_key=2215276745539638&x=0.5000000000000001&y=0.5&style=photo"
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
