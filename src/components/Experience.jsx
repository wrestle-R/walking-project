import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaCommentDots,
  FaUser,
  FaCalendarAlt,
  FaExclamationTriangle,
} from "react-icons/fa";

const FeedbackPage = () => {
  const svRoadLocations = [
    "S.V. Road, Bandra West",
    "S.V. Road, Khar",
    "S.V. Road, Santacruz",
    "S.V. Road, Vile Parle",
    "S.V. Road, Andheri",
    "S.V. Road, Jogeshwari",
    "S.V. Road, Goregaon",
    "S.V. Road, Malad",
  ];

  const initialFeedbacks = [
    {
      name: "Rahul Sharma",
      age: "28",
      location: "S.V. Road, Bandra West",
      feedback: "Frequent potholes near Bandra Station, needs urgent repair",
      date: "2024-03-15",
    },
    {
      name: "Sanjay Gupta",
      age: "39",
      location: "S.V. Road, Khar",
      feedback:
        "Road widening work causing traffic congestion near Khar station",
      date: "2024-03-14",
    },
    {
      name: "Meera Patel",
      age: "33",
      location: "S.V. Road, Santacruz",
      feedback:
        "Improved road condition after recent repairs near Santacruz market",
      date: "2024-03-13",
    },
    {
      name: "Amit Shah",
      age: "45",
      location: "S.V. Road, Andheri",
      feedback: "Need better traffic management near Andheri metro station",
      date: "2024-03-12",
    },
    {
      name: "Priya Singh",
      age: "29",
      location: "S.V. Road, Goregaon",
      feedback: "New speed breakers installed but need proper marking",
      date: "2024-03-11",
    },
  ];

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [roadLocation, setRoadLocation] = useState("");
  const [feedback, setFeedback] = useState("");
  const [allFeedbacks, setAllFeedbacks] = useState(initialFeedbacks);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [newItemIndex, setNewItemIndex] = useState(null);
  const [locationError, setLocationError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!svRoadLocations.includes(roadLocation)) {
      setLocationError("Please select a valid S.V. Road location");
      return;
    }
    setLocationError("");

    if (name && age && roadLocation && feedback) {
      setIsSubmitting(true);
      const newFeedback = {
        name,
        age,
        location: roadLocation,
        feedback,
        date: new Date().toISOString().split("T")[0],
      };

      setNewItemIndex(0);
      setTimeout(() => {
        setAllFeedbacks([newFeedback, ...allFeedbacks]);
        setName("");
        setAge("");
        setRoadLocation("");
        setFeedback("");
        setIsSubmitting(false);
        setTimeout(() => setNewItemIndex(null), 1000);
      }, 300);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 p-6 font-sans">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-white mb-2 tracking-tight">
            S.V. Road Feedback System
          </h1>
          <p className="text-gray-400">
            Share your experience and help improve our infrastructure
          </p>
        </div>

        {/* Feedback Form */}
        <div className="bg-gray-800 rounded-xl p-8 mb-8 shadow-lg border border-gray-700 transition-all duration-300 hover:shadow-blue-700/20">
          <h2 className="text-xl font-semibold text-white mb-6">
            Submit Feedback
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block mb-2 text-gray-300 text-sm">
                  <FaUser className="inline mr-2" />
                  Your Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-2.5 rounded-lg bg-gray-700 border border-gray-600 text-white text-sm 
                    focus:border-blue-700 focus:ring-2 focus:ring-blue-700/50 transition-all duration-300
                    placeholder-gray-400"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block mb-2 text-gray-300 text-sm">
                  <FaCalendarAlt className="inline mr-2" />
                  Age
                </label>
                <input
                  type="number"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="w-full p-2.5 rounded-lg bg-gray-700 border border-gray-600 text-white text-sm 
                    focus:border-blue-700 focus:ring-2 focus:ring-blue-700/50 transition-all duration-300
                    placeholder-gray-400"
                  placeholder="Enter your age"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block mb-2 text-gray-300 text-sm">
                <FaMapMarkerAlt className="inline mr-2" />
                Location on S.V. Road
              </label>
              <select
                value={roadLocation}
                onChange={(e) => {
                  setRoadLocation(e.target.value);
                  setLocationError("");
                }}
                className="w-full p-2.5 rounded-lg bg-gray-700 border border-gray-600 text-white text-sm 
                  focus:border-blue-700 focus:ring-2 focus:ring-blue-700/50 transition-all duration-300"
              >
                <option value="">Select location</option>
                {svRoadLocations.map((location) => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
              </select>
              {locationError && (
                <p className="text-red-400 mt-2 text-sm flex items-center gap-2">
                  <FaExclamationTriangle />
                  {locationError}
                </p>
              )}
            </div>

            <div className="mb-6">
              <label className="block mb-2 text-gray-300 text-sm">
                <FaCommentDots className="inline mr-2" />
                Your Feedback
              </label>
              <textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                className="w-full p-2.5 rounded-lg bg-gray-700 border border-gray-600 text-white text-sm 
                  focus:border-blue-700 focus:ring-2 focus:ring-blue-700/50 transition-all duration-300
                  min-h-[100px] placeholder-gray-400"
                placeholder="Share your feedback about S.V. Road condition..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`bg-blue-700 text-white px-6 py-2.5 rounded-lg text-sm font-medium
                transition-all duration-300 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-700/30
                focus:ring-2 focus:ring-blue-700/50 focus:outline-none
                ${isSubmitting ? "opacity-75 cursor-not-allowed" : ""}`}
            >
              Submit Feedback
            </button>
          </form>
        </div>

        {/* Feedback Display */}
        <div className="bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-700">
          <h2 className="text-xl font-semibold text-white mb-6">
            Recent Feedback
          </h2>
          <div className="space-y-4">
            {allFeedbacks.map((item, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg bg-gray-700/50 border border-gray-600 transition-all duration-300
                  hover:shadow-lg hover:shadow-blue-700/20 hover:border-blue-700/50
                  ${index === newItemIndex ? "animate-slideIn" : ""}`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="text-white">
                      <span className="font-medium">{item.name}</span>
                      <span className="text-sm text-gray-400 ml-2">
                        Age: {item.age}
                      </span>
                    </div>
                    <div className="text-gray-400 text-sm">
                      <FaCalendarAlt className="inline mr-2" />
                      {item.date}
                    </div>
                  </div>

                  <div className="text-gray-300">
                    <div className="mb-2 text-sm">
                      <FaMapMarkerAlt className="inline mr-2 text-blue-400" />
                      {item.location}
                    </div>
                    <p className="bg-gray-800 p-3 rounded-lg text-gray-300">
                      {item.feedback}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes slideIn {
          from {
            transform: translateY(-20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-slideIn {
          animation: slideIn 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default FeedbackPage;
