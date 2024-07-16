import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Impact from "./components/Impact";
import Map from "./components/Map";
import GrowingExpSection from "./components/GrowingExpSection";
import Advt from "./components/Advt";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Impact />
      <Map />
      <GrowingExpSection />
      <Advt />
    </>
  );
}

export default App;
