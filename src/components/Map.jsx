import React from "react";
import { Tilt } from "react-tilt";

import Map_India from "../assets/Map_India.png";
import "../styles/Map.css";

export default function Map() {
  const defaultOptions = {
    reverse: false, // reverse the tilt direction
    max: 25, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  };

  return (
    <section id="map">
      <div className="map-content">
        <div className="map-heading-container">
          <h2 className="playfair">Expanding Horizons</h2>
          <h2>Our Growing Retail Network</h2>
        </div>
        <div className="map-paragraph-container">
          <p>
            We are rapidly growing our retail presence across India, with
            100,000 stores in 30 cities, reaching 50 million consumers. Our
            network spans key states like Rajasthan, Uttar Pradesh, Gujarat,
            Chhattisgarh, Maharashtra, and Madhya Pradesh. With 2 billion in
            sales and 33,000 retailers, we are committed to delivering quality
            and value as we continue to expand exponentially. Join us on our
            journey of growth and success.
          </p>
        </div>
        <div className="map-bullets">
          <ul>
            <li><a href="#">Rajasthan</a></li>
            <li><a href="#">Gujarat</a></li>
            <li><a href="#">Maharashtra</a></li>
            <li><a href="#">Chhattisgarh</a></li>
            <li><a href="#">Uttar Pradesh</a></li>
            <li><a href="#">Madhya Pradesh</a></li>
          </ul>
        </div>
      </div>
      <div className="map-container">
        <Tilt options={defaultOptions}>
          <img src={Map_India} alt="Interactive Map" />
        </Tilt>
      </div>
    </section>
  );
}
