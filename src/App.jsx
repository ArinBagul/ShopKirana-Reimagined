import React, { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import ScrollTop from "./components/ScrollTop";

import "./App.css";

import About from "./pages/About";
import Home from "./pages/Home";
import Brand from "./pages/Brand";

import { Route, Routes } from "react-router-dom";
import Careers from "./pages/Careers";
import Preloader from "./components/Preloader";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
    setTimeout(() => {
      setLoading(false)
    }, 10000);

  },[])

  return (
    <>
      {loading?<Preloader />:null}
      <Navbar />
      <ScrollTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/career" element={<Careers />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/about" element={<About />} />
        <Route path="/build-brand" element={<Brand />} />
      </Routes>
    </>
  );
}

export default App;
