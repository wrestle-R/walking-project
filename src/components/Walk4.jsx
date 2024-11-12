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
    { label: "Distance", value: "3.8 km" },
    { label: "No. of Obstacles", value: "28" },
    { label: "Survey Responses", value: "138" },
  ];

  const accessibilityData = [
    { category: "Missing Footpath", count: 12 },
    { category: "Encroachments", count: 8 },
    { category: "Broken Surfaces", count: 5 },
    { category: "Debris/Garbage", count: 3 },
  ];

  const pedestrianData = [
    { time: "6 AM", count: 150 },
    { time: "9 AM", count: 380 },
    { time: "12 PM", count: 220 },
    { time: "3 PM", count: 250 },
    { time: "6 PM", count: 420 },
    { time: "9 PM", count: 180 },
  ];

  const maintenanceData = [
    { type: "Good", value: 15, color: "#4CAF50" },
    { type: "Fair", value: 25, color: "#FFC107" },
    { type: "Poor", value: 60, color: "#F44336" },
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
            Andheri to Jogeshwari
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
              The 3.8-kilometer stretch from Andheri to Jogeshwari presents
              significant challenges for pedestrians, with our survey of 138
              respondents highlighting critical infrastructure gaps. The most
              pressing concern is the absence of dedicated footpaths along
              approximately 70% of the route, forcing pedestrians to walk on the
              road alongside vehicular traffic. This creates substantial safety
              risks, particularly during peak hours and after sunset. The few
              existing pedestrian facilities are largely compromised by
              encroachments, poor maintenance, and inadequate street lighting.
            </p>
          </div>

          {/* Survey Charts */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Obstacles Chart */}
            <div className="bg-gray-800 rounded-xl p-6 aspect-square">
              <h3 className="text-lg font-medium text-blue-400 mb-4 text-center">
                Infrastructure Issues
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
              Our assessment reveals that 60% of the infrastructure is in poor
              condition, with only 15% meeting acceptable standards. Despite
              these challenges, the route sees significant pedestrian traffic,
              peaking at 420 people during evening hours (6 PM) and 380 during
              morning rush (9 AM). The most prevalent issues include complete
              absence of footpaths in multiple sections, followed by
              unauthorized encroachments and broken walking surfaces. The lack
              of proper pedestrian infrastructure is particularly concerning
              given the high volume of pedestrians who rely on this route for
              daily commuting between the two suburbs.
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
                src="https://www.mapillary.com/embed?map_style=OpenStreetMap&image_key=528738053191765&x=0.49999999999337164&y=0.49999999999979505&style=photo"
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
