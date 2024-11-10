import React from "react";
import RusselImg from "../assets/russel.png";
import Navbar from "./Navbar";

const Team = () => {
  const teamMembers = [
    {
      name: "EESHANI THAKUR",
      bio: "Leading our organization's mission to create more walkable cities.",
      image: RusselImg,
    },
    {
      name: "LIZA CASTELLINO",
      bio: "Expert in sustainable urban design and pedestrian infrastructure.",
      image: RusselImg,
    },
    {
      name: "GAVIN SOARES",
      bio: "Building bridges between communities and urban development initiatives.",
      image: RusselImg,
    },
    {
      name: "KHIZER ANSARI",
      bio: "Overseeing the technological aspects of our pedestrian mapping projects.",
      image: RusselImg,
    },
    {
      name: "MAYANK MEHTA",
      bio: "Conducting studies on urban walkability and its impact on communities.",
      image: RusselImg,
    },
    {
      name: "DYLAN MASCARENHAS",
      bio: "Managing our various urban improvement initiatives across the city.",
      image: RusselImg,
    },
    {
      name: "ROMEIRO FERNANDES",
      bio: "Sharing our story and impact with the world.",
      image: RusselImg,
    },
    {
      name: "RUSSEL DANIEL PAUL",
      bio: "Designing safer and more accessible pedestrian pathways.",
      image: RusselImg,
    },
    {
      name: "ALIQYAAN MAHIMWALA",
      bio: "Working with local government to implement pedestrian-friendly policies.",
      image: RusselImg,
    },
    {
      name: "RENIYAS NADAR",
      bio: "Organizing local events and educational programs about urban walkability.",
      image: RusselImg,
    },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-slate-100 py-12 px-8">
        <div className="w-4/6 mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-slate-800 mb-6 tracking-tight">
              Our Team
            </h1>
          </div>

          {/* Team Members Grid */}
          <div className="flex flex-col gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 min-h-[140px] transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg hover:bg-slate-50 "
              >
                <div className="flex items-center gap-8">
                  {/* Avatar */}
                  <div className="flex-shrink-0">
                    <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-slate-200">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Member Info */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-slate-800 mb-2 tracking-tight">
                      {member.name}
                    </h3>
                    <p className="text-base font-semibold text-amber-800 mb-3 uppercase tracking-wider">
                      {member.role}
                    </p>
                    <p className="text-slate-600 text-lg leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
