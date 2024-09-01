import React from "react";

import Navbar from "./components/Navbar";
import ScrollTop from "./components/ScrollTop"
// import Hero from "./components/Hero";
// import Impact from "./components/Impact";
// import Map from "./components/Map";
// import GrowingExpSection from "./components/GrowingExpSection";
// import Advt from "./components/Advt";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";

// import BottomFX from "./components/BottomFX";

import "./App.css";
// import Error404 from "./components/Error404";

import About from "./pages/About";
import Home from "./pages/Home";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <ScrollTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>

    // <>
    //   {/* <Home /> */}
    //   <About />
    //   {/* <Navbar />
    //   <Hero />
    //   <Impact />
    //   <Map />
    //   <GrowingExpSection />
    //   <Advt />
    //   <Contact />
    //   <Footer /> */}
    //   {/* <Error404 /> */}
    //   {/* <BottomFX /> */}
    // </>
  );
}

export default App;
