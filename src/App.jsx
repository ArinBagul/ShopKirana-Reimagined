import React from "react";

import Navbar from "./components/Navbar";
import ScrollTop from "./components/ScrollTop"

import "./App.css";

import About from "./pages/About";
import Home from "./pages/Home";
import Brand from "./pages/Brand";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <ScrollTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/build-brand" element={<Brand />} />
      </Routes>
    </>
    
  );
}

export default App;
