import React, { useState } from "react";
import { ChevronDown, Moon, Sun } from "lucide-react";
import Navbar from "./Navbar";
import RishiImg from "../assets/rishi.jpg";
import BannerImg from "../assets/twp-banner.svg";
// import PlaceholderImg from "../assets/p.jpg";

export default function About() {
  const [openSection, setOpenSection] = useState("1");
  const [isNightMode, setIsNightMode] = useState(true);

  const toggleSection = (sectionId) => {
    setOpenSection(openSection === sectionId ? "" : sectionId);
  };

  const toggleMode = () => {
    setIsNightMode((prev) => !prev);
  };

  const accordionData = [
    {
      id: "1",
      title: "Who are we?",
      content: (
        <>
          <p className="mb-2">
            We are a group of dedicated student volunteers who have joined
            forces with the Mumbai Sustainable Centre to contribute towards
            improving pedestrian infrastructure and promoting walkability across
            the city of Mumbai.
          </p>
        </>
      ),
    },
    {
      id: "2",
      title: "What is our job?",
      content: (
        <>
          <p className="mb-2">
            As part of the Walking Project, we conduct detailed assessments of
            Mumbai's streetscapes, provide thoughtful recommendations, and
            actively support initiatives that aim to make the city's roads more
            accessible and conducive to walking.
          </p>
        </>
      ),
    },
    {
      id: "3",
      title: "What is our goal?",
      content: (
        <>
          <p className="mb-2">
            Our overarching goal is to collaborate closely with the Mumbai
            Sustainable Centre to shape a more livable, sustainable, and
            pedestrian-friendly urban environment in Mumbai. We are committed to
            enhancing the walkability of the city's streets and improving the
            overall quality of life for its residents.
          </p>
        </>
      ),
    },
  ];

  return (
    <div
      className={`min-h-screen ${
        isNightMode
          ? "bg-[#1e1e1e] text-[#f2f2f2]"
          : "bg-[#f2f2f2] text-[#1e1e1e]"
      }`}
    >
      <div className="bg-[#1e1e1e]">
        <Navbar />
        <hr />
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="mt-16 w-4/6">
          <div
            className={`divide-y ${
              isNightMode
                ? "divide-gray-700 border-gray-700"
                : "divide-gray-200 border-gray-200"
            } border rounded-xl`}
          >
            {accordionData.map((section) => (
              <div key={section.id}>
                <button
                  onClick={() => toggleSection(section.id)}
                  className={`flex items-center justify-between w-full p-5 font-medium gap-3`}
                  aria-expanded={openSection === section.id}
                >
                  <span>{section.title}</span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-200 ${
                      openSection === section.id ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`transition-all duration-200 overflow-hidden ${
                    openSection === section.id ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div
                    className={`p-5 bg-[#333333] border-t ${
                      isNightMode ? "border-gray-700" : "border-gray-200"
                    }`}
                  >
                    {section.content}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section
        className={`body-font ${
          isNightMode ? "text-[#f2f2f2]" : "text-[#1e1e1e]"
        }`}
      >
        <div className="container px-5 py-24 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">
            <div className="rounded-lg w-auto overflow-hidden">
              {/* Embed YouTube video here */}
              <iframe
                width="100%"
                height="500"
                src="https://www.youtube.com/embed/yTffQCgGHDI"
                title="Walking Project Video"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="object-cover object-center"
              ></iframe>
            </div>
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="rounded-full overflow-hidden border-2 border-slate-200">
                  <img
                    src={RishiImg}
                    alt="Rishi-Sir"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font mt-4 text-lg">
                    Rishi Aggarwal
                  </h2>
                  <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4" />
                  <p className="text-base">Founder</p>
                </div>
              </div>
              <div
                className={`sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l ${
                  isNightMode ? "border-gray-700" : "border-gray-200"
                } sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left`}
              >
                <p className="leading-relaxed text-lg mb-4">
                  Walking Project, founded on June 20, 2012, in Mumbai by
                  environmental activist Rishi Aggarwal and a team of
                  collaborators, aims to improve pedestrian infrastructure by
                  fostering collaboration between citizens and the government.
                  The project seeks to create a safe, convenient, and enjoyable
                  walking environment through community building, media content,
                  public engagement, and partnerships with government bodies. By
                  advocating for better pedestrian infrastructure and
                  introducing global pedestrianization concepts, Walking Project
                  encourages citizens to demand high-quality walking spaces,
                  which the government actively supports.
                </p>
                <a
                  href="https://www.walkingproject.org/"
                  target="_blank"
                  className={`${
                    isNightMode ? "text-indigo-400" : "text-indigo-500"
                  } inline-flex items-center`}
                >
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
