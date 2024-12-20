import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Team from "./components/Team";
// import Navbar from "./components/Navbar";
import Walk1 from "./components/Walk1";
import Walk2 from "./components/Walk2";
import Walk3 from "./components/Walk3";
import Walk4 from "./components/Walk4";
import Walk5 from "./components/Walk5";
import Walk6 from "./components/Walk6";
import Walk7 from "./components/Walk7";
import Walk8 from "./components/Walk8";
import Carousel from "./components/Carousel";

function App() {
  return (
    <Router basename="/walking-project/">  {/* Add basename here */}
      <Routes>
        <Route path="/walk1" element={<Walk1 />} />
        <Route path="/walk2" element={<Walk2 />} />
        <Route path="/walk3" element={<Walk3 />} />
        <Route path="/walk4" element={<Walk4 />} />
        <Route path="/walk5" element={<Walk5 />} />
        <Route path="/walk6" element={<Walk6 />} />
        <Route path="/walk7" element={<Walk7 />} />
        <Route path="/walk8" element={<Walk8 />} />
        <Route path="/" element={<Home />} />
        <Route path="/walks" element={<Carousel />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </Router>
  );
}

export default App;
