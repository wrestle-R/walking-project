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
    { label: "Distance", value: "4.1 km" },
    { label: "No. of Obstacles", value: "12" },
    { label: "Survey Responses", value: "165" },
  ];

  const accessibilityData = [
    { category: "Broken Pavements", count: 4 },
    { category: "Street Vendors", count: 5 },
    { category: "Parked Vehicles", count: 2 },
    { category: "Construction", count: 1 },
  ];

  const pedestrianData = [
    { time: "6 AM", count: 250 },
    { time: "9 AM", count: 520 },
    { time: "12 PM", count: 320 },
    { time: "3 PM", count: 380 },
    { time: "6 PM", count: 580 },
    { time: "9 PM", count: 280 },
  ];

  const maintenanceData = [
    { type: "Good", value: 75, color: "#4CAF50" },
    { type: "Fair", value: 20, color: "#FFC107" },
    { type: "Poor", value: 5, color: "#F44336" },
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Obstacles Chart */}
            <div className="bg-gray-800 rounded-xl p-6 aspect-square">
              <h3 className="text-lg font-medium text-blue-400 mb-4 text-center">
                Types of Obstacles
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
