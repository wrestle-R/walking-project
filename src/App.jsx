import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import About from "./components/About";
import Carousel from "./components/Carousel";
import Experience from "./components/Experience";
import Walks from "./components/Walks";
import Team from "./components/Team";
import Navbar from "./components/Navbar";
import Walk1 from "./components/Walk1";
import Walk2 from "./components/Walk2";
import Walk3 from "./components/Walk3";
import Walk4 from "./components/Walk4";

function App() {
  return (
    <Router>
      <div className="relative">
        <Navbar />
        <Routes>
          <Route path="/walk1" element={<Walk1 />} />
          <Route path="/walk2" element={<Walk2 />} />
          <Route path="/walk3" element={<Walk3 />} />
          <Route path="/walk4" element={<Walk4 />} />
          <Route path="/" element={
            <>
              <Home />
              <About />
              <Carousel />
              <Experience />
              <Team />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;