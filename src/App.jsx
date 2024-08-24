import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Impact from "./components/Impact";
import Map from "./components/Map";
import GrowingExpSection from "./components/GrowingExpSection";
import Advt from "./components/Advt";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import BottomFX from "./components/BottomFX";

import "./App.css";
import Error404 from "./components/Error404";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Impact />
      <Map />
      <GrowingExpSection />
      {/* <Advt />
      <Contact />
      <Footer /> */}
      {/* <Error404 /> */}
      <BottomFX />
    </>
  );
}

export default App;
