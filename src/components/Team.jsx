import React from "react";
import RusselImg from "../assets/russel.png";
import Navbar from "./Navbar";
import EeshaniImg from "../assets/eeshani.jpg";
import GavinImg from "../assets/gavin.jpg";
import RomeiroImg from "../assets/romeiro.jpg";
import AliqyaanImg from "../assets/aliqyaan.jpg";
import ReniyasImg from "../assets/reniyas.jpg";
import DylanImg from "../assets/dylan.jpg";
import MayankImg from "../assets/mayank.jpg";
import LizaImg from "../assets/liza.jpg";
import KhizerImg from "../assets/khizer.jpeg";

const Team = () => {
  const teamMembers = [
    {
      name: "RUSSEL DANIEL PAUL",
      bio: "Website, PPT, Walks, Mapping, Surveys.",
      image: RusselImg,
    },
    {
      name: "ROMEIRO FERNANDES",
      bio: "Website, PPT, Walks, Mapping, Surveys.",
      image: RomeiroImg,
    },

    {
      name: "MAYANK MEHTA",
      bio: "PPT, Walks, Mapping, Surveys, Reports.",
      image: MayankImg,
    },
    {
      name: "RENIYAS NADAR",
      bio: "PPT, Walks, Surveys, Reports.",
      image: ReniyasImg,
    },
    {
      name: "DYLAN MASCARENHAS",
      bio: "PPT, Walks, Surveys, Reports.",
      image: DylanImg,
    },
    {
      name: "LIZA CASTELLINO",
      bio: "PPT, Walks, Mapping, Surveys.",
      image: LizaImg,
    },
    {
      name: "KHIZER ANSARI",
      bio: "PPT, Walks, Mapping, Surveys.",
      image: KhizerImg,
    },
    {
      name: "GAVIN SOARES",
      bio: "Walks, Mapping, Surveys, Reports.",
      image: GavinImg,
    },
    {
      name: "ALIQYAAN MAHIMWALA",
      bio: "Website, Walks, Surveys.",
      image: AliqyaanImg,
    },
    {
      name: "EESHANI THAKUR",
      bio: "PPT, Walks, Surveys.",
      image: EeshaniImg,
    },
  ];

  return (
    <>
      <div className="bg-[#1e1e1e]">
        <Navbar />
        <hr />
      </div>
      <div className="min-h-screen bg-[#1e1e1e] py-12 px-8">
        <div className="w-4/6 mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-white mb-6 tracking-tight">
              Our Team
            </h1>
          </div>

          {/* Team Members Grid */}
          <div className="flex flex-col gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-slate-200 rounded-2xl p-8 shadow-sm min-h-[140px] transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg hover:bg-slate-200"
              >
                <div className="flex items-center gap-8">
                  {/* Avatar */}
                  <div className="flex-shrink-0">
                    <div className="w-32 h-32 rounded-full overflow-hidden">
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
