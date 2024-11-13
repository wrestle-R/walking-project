'use client'

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
  Cell,
  Legend
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
    { label: "Total Distance", value: "4.2 km" },
    { label: "Total Obstacles", value: "75" },
    { label: "Survey Responses", value: "13" },
  ];

  const obstacleDistributionData = [
    { point: "Santacruz", distance: "0.0", obstacles: 8 },
    { point: "Milan Subway", distance: "0.8", obstacles: 16 },
    { point: "Trade Centre", distance: "1.5", obstacles: 15 },
    { point: "Vakola Bridge", distance: "2.2", obstacles: 14 },
    { point: "Agripada", distance: "3.0", obstacles: 12 },
    { point: "Vile Parle", distance: "4.2", obstacles: 10 },
  ];

  const pedestrianUsageData = [
    { type: "Very Often", value: 40, color: " #9ccbb8" },
    { type: "Often", value: 35, color: "#22C55E" },
    { type: "Occasionally", value: 35, color: "#3B82F6" },
    { type: "Rarely", value: 20, color: "#EAB308" },
    { type: "Almost Never", value: 15, color: "#EF4444" },
  ];

  const footpathConditionData = [
    { type: "Good Condition", value: 30, color: "#22C55E" },
    { type: "Average Condition", value: 45, color: "#EAB308" },
    { type: "Poor Condition", value: 25, color: "#EF4444" },
  ];

  return (
    <div className="min-h-screen bg-[#1e1e1e]">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Santacruz to Vile Parle Walk Analysis
          </h1>
        </div>

        {/* Stats Grid */}
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

        <div className="p-6 bg-[#1e1e1e] rounded-lg mb-12">
          <p className="text-gray-300 leading-7 text-lg">
          Initial assessment revealed moderate infrastructure challenges along the Santacruz to Vile Parle stretch. The route experiences higher obstacle density near Milan Subway and Trade Centre areas during peak hours. Notable obstacles include temporary vendor stalls, uneven surfaces, and infrastructure work barriers, with concentrated challenges observed around the Milan Subway vicinity.
          </p>
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {/* Obstacle Distribution Chart */}
          <div className="p-6 bg-gray-800 border border-gray-700 rounded-lg">
            <h2 className="text-lg font-medium text-blue-400 mb-4">
              Obstacle Distribution
            </h2>
            <div className="h-[300px] ">
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

        {/* Detailed Findings Section */}
        <div className="p-6 bg-[#1e1e1e] rounded-lg mb-12">
          <p className="text-gray-300 leading-7 text-lg">
          Survey responses from regular pedestrians highlight varying concerns about footpath accessibility and maintenance. While 30% of the pathway maintains good condition, sections near Milan Subway and Trade Centre require attention. The assessment identified improvement areas including better pedestrian crossing facilities, consistent footpath width maintenance, and enhanced street lighting. Local residents emphasized the need for regular maintenance and better traffic management near major junctions.
          </p>
        </div>

        {/* Maps Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Google My Maps */}
          <div className="p-0 overflow-hidden bg-gray-800 border border-gray-700 rounded-lg aspect-square">
            <iframe
              src="https://www.google.com/maps/d/u/0/embed?mid=1NSOiz2fsUZXZBxntw8gYD6A3315N8VI&ehbc=2E312F"
              className="w-full h-full rounded-lg"
              title="Route Map"
            />
          </div>

          {/* Mapillary */}
          <div className="p-0 overflow-hidden bg-gray-800 border border-gray-700 rounded-lg aspect-square">
            <iframe
              src="https://www.mapillary.com/embed?map_style=OpenStreetMap&image_key=523808853473226&x=0.5&y=0.5&style=photo"
              className="w-full h-full rounded-lg"
              title="Street View"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default JourneyPage;