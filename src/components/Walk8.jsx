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
    { label: "No. of Obstacles", value: "36" },
    { label: "Survey Responses", value: "138" },
  ];

  const obstaclesData = [
    { category: "Hawkers/Vendors", count: 5 },
    { category: "Broken/Uneven Surfaces", count: 3 },
    { category: "Missing Footpath Segments", count: 2 },
    { category: "Well-Maintained Footpath", value: 5 },
  ];

  const pedestrianData = [
    { time: "6 AM", count: 180 },
    { time: "9 AM", count: 420 },
    { time: "12 PM", count: 300 },
    { time: "3 PM", count: 350 },
    { time: "6 PM", count: 500 },
    { time: "9 PM", count: 240 },
  ];

  const maintenanceData = [
    { type: "Good", value: 60, color: "#4CAF50" },
    { type: "Fair", value: 30, color: "#FFC107" },
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
            Kandivali to Borivali
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
              The 4.1-kilometer stretch from Kandivali to Borivali was also
              generally well-maintained, with a mostly continuous footpath along
              the route. According to our survey of 138 respondents, the
              footpath was in good condition for the majority of the journey,
              with a few breaks and uneven surfaces. As with the previous route,
              the primary challenge was the presence of hawkers and street
              vendors occupying portions of the footpath. This forced
              pedestrians to navigate around them or walk on the road. Overall,
              the walkability of this stretch was similar to the Malad to
              Kandivali route, with room for improvement in maintaining clear
              and unobstructed pedestrian access.
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
              The analysis of the Kandivali to Borivali stretch reveals that 60%
              of the infrastructure is in good condition, with a few areas of
              concern, such as broken or uneven surfaces and missing footpath
              segments. As with the previous route, the most significant
              obstacle identified was the presence of hawkers and street vendors
              occupying portions of the footpath, which impacted pedestrian
              flow. Despite these challenges, the route experiences substantial
              pedestrian traffic, peaking at 500 people during the evening rush
              hour (6 PM) and 420 during the morning commute (9 AM). Maintaining
              the existing infrastructure and addressing the vendor encroachment
              issues would greatly enhance the walkability and safety of this
              well-utilized stretch.
            </p>
          </div>

          {/* Maps Section */}
          <div className="grid grid-cols-2 gap-8">
            {/* Google My Maps */}
            <div className="w-full h-[80vh]">
              <iframe
                src="https://www.google.com/maps/d/embed?mid=1NwttBBydKRu4RPEtKVvFef1gLCvpdD0&ehbc=2E312F"
                width="100%"
                height="100%"
                title="Route Map"
                className="w-full h-full"
              />
            </div>

            {/* Mapillary */}
            <div className="w-full h-[80vh]">
              <iframe
                src="https://www.mapillary.com/embed?map_style=OpenStreetMap&image_key=4029046383993584&x=0.5000000000000063&y=0.5&style=photo"
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
