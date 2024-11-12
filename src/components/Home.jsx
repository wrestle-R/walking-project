import React from "react";
import Navbar from "./Navbar";
import { OrbitSpace } from "orbit-space";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <OrbitSpace>
        {/* <section className="bg-[#f1f5f9] dark:bg-[#1e1e1e]"> */}
        <section>
          <Navbar />
          <div className="flex flex-col py-8 px-4 mx-auto max-w-screen-xl h-[85vh] text-center lg:py-16 justify-center items-center">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-[#1f2937] dark:text-[#e5e7eb] md:text-5xl lg:text-6xl">
              Enhancing walkability in Mumbai
            </h1>
            <p className="mb-5 text-lg w-[85vw] py-2 font-normal text-[#6b7280] lg:text-xl sm:px-16 lg:px-48 dark:text-[#a3a3a3]">
              We survey the footpaths of Mumbai, plot a map with all issues and
              submit it to BMC as a valuable reference.
            </p>
            <div className="flex flex-col gap-2 sm:flex-row sm:justify-center sm:space-y-0">
              <Link
                to="/walks"
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-[#3b82f6] hover:bg-[#2563eb] hover:shadow-lg hover:shadow-blue-700/30"
              >
                Get started
                <svg
                  className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </Link>
              <Link
                to="/about"
                className="py-3 px-5 sm:ms-4 text-sm font-medium text-[#1f2937] focus:outline-none bg-white rounded-lg border border-[#d1d5db] hover:bg-[#e2e8f0] hover:text-[#3b82f6]  dark:bg-[#2a2a2a] dark:text-[#a3a3a3] dark:border-[#404040] dark:hover:text-white dark:hover:bg-[#3f3f3f]"
              >
                Learn more
              </Link>
            </div>
          </div>
        </section>
      </OrbitSpace>
    </>
  );
};

export default Home;
