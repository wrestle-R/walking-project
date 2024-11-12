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
    { label: "Distance", value: "3.2 km" },
    { label: "No. of Obstacles", value: "15" },
    { label: "Survey Responses", value: "142" },
  ];

  const accessibilityData = [
    { category: "Ramps", count: 85 },
    { category: "Tactile Paths", count: 72 },
    { category: "Clear Signage", count: 78 },
    { category: "Facilities", count: 65 },
  ];

  const pedestrianData = [
    { time: "6 AM", count: 180 },
    { time: "9 AM", count: 420 },
    { time: "12 PM", count: 280 },
    { time: "3 PM", count: 310 },
    { time: "6 PM", count: 450 },
    { time: "9 PM", count: 220 },
  ];

  const maintenanceData = [
    { type: "Good", value: 65, color: "#4CAF50" },
    { type: "Fair", value: 25, color: "#FFC107" },
    { type: "Poor", value: 10, color: "#F44336" },
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
            Santacruz to Vile Parle
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
              Our comprehensive survey of the Santacruz to Vile Parle stretch
              demonstrates exemplary implementation of pedestrian-friendly
              infrastructure. The 3.2km route showcases well-maintained
              walkways, organized street vendor zones, and effective traffic
              management systems. Based on 142 survey responses, this area
              serves as a model for urban walkability with its wide,
              unobstructed pavements, proper lighting, and designated crossing
              points.
            </p>
          </div>

          {/* Survey Charts */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Accessibility Features Chart */}
            <div className="bg-gray-800 rounded-xl p-6 aspect-square">
              <h3 className="text-lg font-medium text-blue-400 mb-4 text-center">
                Obstacles
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
              Key findings indicate consistent pedestrian flow with peak
              activity during morning (9 AM) and evening (6 PM) hours, reaching
              up to 450 pedestrians during peak times. Infrastructure assessment
              shows 65% of the stretch in good condition, with only 10%
              requiring minor maintenance. The route features comprehensive
              accessibility elements including well-maintained ramps, continuous
              tactile pathways, and clear signage throughout.
            </p>
          </div>

          {/* Maps Section - Full Screen */}
          <div className="grid grid-cols-2 gap-8">
            {/* Google My Maps */}
            <div className="w-full h-[80vh]">
              <iframe
                src="https://www.google.com/maps/d/embed?mid=1iZdOl4s5k_wt6Eorag_ZnTywHV_BjXo&ehbc=2E312F"
                width="100%"
                height="100%"
                title="Route Map"
                className="w-full h-full"
              />
            </div>

            {/* Mapillary */}
            <div className="w-full h-full">
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
