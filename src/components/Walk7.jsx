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
    { label: "No. of Obstacles", value: "8" },
    { label: "Survey Responses", value: "142" },
  ];

  const obstaclesData = [
    { category: "Hawkers/Vendors", count: 4 },
    { category: "Broken/Uneven Surfaces", count: 2 },
    { category: "Missing Footpath Segments", count: 2 },
    { category: "Well-Maintained Footpath", count: 6 },
  ];

  const pedestrianData = [
    { time: "6 AM", count: 150 },
    { time: "9 AM", count: 400 },
    { time: "12 PM", count: 280 },
    { time: "3 PM", count: 320 },
    { time: "6 PM", count: 470 },
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
            Malad to Kandivali
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
              The 3.8-kilometer stretch from Malad to Kandivali was generally
              well-maintained, with a mostly continuous footpath along the
              route. According to our survey of 142 respondents, the footpath
              was in good condition for the majority of the journey, with only a
              few breaks and uneven surfaces. The primary challenge identified
              was the presence of hawkers and street vendors occupying portions
              of the footpath, forcing pedestrians to navigate around them or
              walk on the road. Overall, the walkability of this stretch was
              better than the previous route, but there is still room for
              improvement in maintaining clear and unobstructed pedestrian
              access.
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
              The analysis of the Malad to Kandivali stretch reveals that 65% of
              the infrastructure is in good condition, with only a few areas of
              concern, such as broken or uneven surfaces and missing footpath
              segments. The most significant obstacle identified was the
              presence of hawkers and street vendors occupying portions of the
              footpath, which impacted pedestrian flow. Despite these
              challenges, the route experiences substantial pedestrian traffic,
              peaking at 470 people during the evening rush hour (6 PM) and 400
              during the morning commute (9 AM). Maintaining the existing
              infrastructure and addressing the vendor encroachment issues would
              greatly enhance the walkability and safety of this well-utilized
              stretch.
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
                src="https://www.mapillary.com/embed?map_style=Mapillary%20light&image_key=2551481258378160&x=0.4999999999999994&y=0.5&style=photo"
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
