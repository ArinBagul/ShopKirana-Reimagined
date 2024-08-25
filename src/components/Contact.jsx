import React, { useEffect, useState } from "react";
// import { isMobile } from "react-device-detect";
import Tilt from 'react-parallax-tilt';

import "../styles/Contact.css";

import map from "../assets/map.png";

import ContactCTA from "./ContactCTA";
import ContactCard from "./ContactCard";

import Mail from "../assets/icons/Mail";
import Phone from "../assets/icons/Phone";
import Map from "../assets/icons/Map";

function Contact() {
  // const [tilt, setTilt] = useState({ x: 0, y: 0 });

  // useEffect(() => {
  //   if (isMobile) {
  //     const handleOrientation = (event) => {
  //       const tiltX = event.gamma; // left to right
  //       const tiltY = event.beta; // front to back

  //       const sensitivity = 10;

  //       setTilt({
  //         x: tiltX / sensitivity,
  //         y: tiltY / sensitivity,
  //       });
  //     };

  //     window.addEventListener("deviceorientation", handleOrientation);

  //     return () => {
  //       window.removeEventListener("deviceorientation", handleOrientation);
  //     };
  //   }
  // }, []);

  return (
    <section id="contact-section">
      <Tilt
            className="tilt-background"
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
            perspective={5000}
            transitionSpeed={10000}
            gyroscope={true} // Enable gyroscope support for mobile devices
        >
      <div className="contact-container">
        <ContactCard />

        <a
          href="https://maps.app.goo.gl/ULR6g4awrHaeE3Qg9"
          target="_blank"
          className="map-cta"
        >
          look at Google Maps
          <Map />
        </a>

        <a
          href="https://maps.app.goo.gl/ULR6g4awrHaeE3Qg9"
          target="_blank"
          className="address-batch"
        >
          1501, 15th Floor, SKYE Corporate Park, Plot No 25, Scheme No 78, Part
          II, Sector B Indore 452010
        </a>

        <div className="contact-details">
          <span>Contact us</span>
          <div className="contact-batch-grp">
            <ContactCTA
              link="mailto:info@shopkirana.com"
              icon={<Mail />}
              txt="info@shopkirana.com"
            />
            <ContactCTA
              link="tel:+91-782-811-2112"
              icon={<Phone />}
              txt="+91-782-811-2112"
            />
          </div>
        </div>
      </div></Tilt>
    </section>
  );
}

export default Contact;
