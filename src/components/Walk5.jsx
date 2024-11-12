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
    { label: "Distance", value: "3.9 km" },
    { label: "No. of Obstacles", value: "116" },
    { label: "Survey Responses", value: "21" },
  ];

  const accessibilityData = [
    { category: "Missing Footpath", count: 6 },
    { category: "Encroachments", count: 5 },
    { category: "Broken Surfaces", count: 4 },
    { category: "Well Maintained", count: 3 },
  ];

  const pedestrianData = [
    { time: "6 AM", count: 180 },
    { time: "9 AM", count: 450 },
    { time: "12 PM", count: 280 },
    { time: "3 PM", count: 320 },
    { time: "6 PM", count: 490 },
    { time: "9 PM", count: 220 },
  ];

  const maintenanceData = [
    { type: "Good", value: 45, color: "#4CAF50" },
    { type: "Fair", value: 35, color: "#FFC107" },
    { type: "Poor", value: 20, color: "#F44336" },
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
            Jogeshwari to Goregaon
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
              The 3.9-kilometer stretch from Jogeshwari to Goregaon presents a
              stark contrast in pedestrian infrastructure quality. Based on 145
              survey responses, we found that the southern half of the route
              features well-maintained footpaths and organized street furniture,
              while the northern sections show significant deterioration and
              gaps in pedestrian facilities. This divide in infrastructure
              quality creates an interesting case study in the impact of
              maintenance and planning on walkability.
            </p>
          </div>

          {/* Survey Charts */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Infrastructure Issues Chart */}
            <div className="bg-gray-800 rounded-xl p-6 aspect-square">
              <h3 className="text-lg font-medium text-blue-400 mb-4 text-center">
                Infrastructure Assessment
              </h3>
              <ResponsiveContainer width="100%" height="80%">
                <BarChart data={accessibilityData}>
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
              Our assessment reveals a distinct split in infrastructure quality:
              45% of the route is in good condition, particularly in the newer
              developed areas, while 20% requires significant improvements.
              Despite these variations, the route experiences heavy pedestrian
              traffic, peaking at 490 people during evening hours (6 PM) and 450
              during morning rush (9 AM). The contrasting infrastructure quality
              is evident in our obstacle count of 18, with issues concentrated
              primarily in the northern sections. The well-maintained southern
              portions demonstrate the potential for improved walkability when
              proper infrastructure and maintenance protocols are implemented.
            </p>
          </div>

          {/* Maps Section */}
          <div className="grid grid-cols-2 gap-8">
            {/* Google My Maps */}
            <div className="w-full h-[80vh]">
              <iframe
                src="https://www.google.com/maps/d/embed?mid=1PXw-8lj8rqYeQkl4o6nCkUKtTaI7X_M&ehbc=2E312F"
                width="100%"
                height="100%"
                title="Route Map"
                className="w-full h-full"
              />
            </div>

            {/* Mapillary */}
            <div className="w-full h-[80vh]">
              <iframe
                src="https://www.mapillary.com/embed?map_style=OpenStreetMap&image_key=1095380695299787&x=0.5&y=0.5&style=photo"
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
