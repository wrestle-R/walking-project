import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Logo from "../assets/logo.svg";
import Logo1 from "../assets/logo1.svg";
import { Sun, Moon } from "lucide-react";

const Navbar = () => {
  const [isNightMode, setIsNightMode] = useState(true);

  const toggleMode = () => {
    setIsNightMode((prev) => !prev);
  };

  return (
    <>
      <nav
        className={`border-gray-200 px-4 ${
          isNightMode ? "dark:bg-transparent" : "bg-transparent"
        } dark:border-gray-700`}
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-5 px-8">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={isNightMode ? Logo : Logo1} className="h-8" alt="Logo" />
            <span
              className={`self-center text-2xl font-semibold whitespace-nowrap ${
                isNightMode ? "text-[#f2f2f2]" : "text-[#1e1e1e]"
              }`}
            >
              TWP
            </span>
          </Link>

          <div
            className="hidden w-full md:block md:w-auto"
            id="navbar-solid-bg"
          >
            <ul
              className={`flex flex-col justify-center items-center font-medium mt-4 rounded-lg md:space-x-14 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:border-gray-700`}
            >
              <Link
                to="/"
                className={`block py-2 px-3 md:p-0 rounded hover:bg-[#e2e8f0] md:hover:bg-transparent md:border-0 md:hover:text-[#3b82f6] ${
                  isNightMode ? "text-[#f2f2f2]" : "text-[#1e1e1e]"
                } md:dark:hover:bg-transparent`}
              >
                <li>Home</li>
              </Link>
              <Link
                to="/about"
                className={`block py-2 px-3 md:p-0 rounded hover:bg-[#e2e8f0] md:hover:bg-transparent md:border-0 md:hover:text-[#3b82f6] ${
                  isNightMode ? "text-[#f2f2f2]" : "text-[#1e1e1e]"
                } md:dark:hover:bg-transparent`}
              >
                <li>About</li>
              </Link>
              <Link
                to="/walks"
                className={`block py-2 px-3 md:p-0 rounded hover:bg-[#e2e8f0] md:hover:bg-transparent md:border-0 md:hover:text-[#3b82f6] ${
                  isNightMode ? "text-[#f2f2f2]" : "text-[#1e1e1e]"
                } md:dark:hover:bg-transparent`}
              >
                <li>Walks</li>
              </Link>
              <Link
                to="/experience"
                className={`block py-2 px-3 md:p-0 rounded hover:bg-[#e2e8f0] md:hover:bg-transparent md:border-0 md:hover:text-[#3b82f6] ${
                  isNightMode ? "text-[#f2f2f2]" : "text-[#1e1e1e]"
                } md:dark:hover:bg-transparent`}
              >
                <li>Experience</li>
              </Link>
              <Link
                to="/team"
                className={`block py-2 px-3 md:p-0 rounded hover:bg-[#e2e8f0] md:hover:bg-transparent md:border-0 md:hover:text-[#3b82f6] ${
                  isNightMode ? "text-[#f2f2f2]" : "text-[#1e1e1e]"
                } md:dark:hover:bg-transparent`}
              >
                <li>Team</li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
