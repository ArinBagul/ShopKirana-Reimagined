import React from "react";
import NavbarL from "../components/NavbarL";
import AboutHero from "../components/AboutHero";
import AboutCards from "../components/AboutCards";
import Teams from "../components/Teams";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Leads from "../components/Leads";
import BottomFX from "../components/BottomFX";

function About() {
  return (
    <>
      {/* <NavbarL /> */}
      <AboutHero />
      <AboutCards />
      <Teams />
      <Leads />
      <Contact />
      <Footer />
      <BottomFX />
    </>
  );
}

export default About;
