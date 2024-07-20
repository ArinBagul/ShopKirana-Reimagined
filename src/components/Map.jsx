import React, { useEffect, useState } from "react";
import { Tilt } from "react-tilt";

// import Map_India from "../assets/Map_India.png";
import {
  Map_India_MP,
  Map_India_Chhattisgarh,
  Map_India_Gujarat,
  Map_India_Rajasthan,
  Map_India_Maharastra,
  Map_India_UP,
  Map_India_NoHL,
} from "../assets/Map_India";
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

  const [rjMap, setRjMap] = useState(false);
  const [gjMap, setGjMap] = useState(false);
  const [mhMap, setMhMap] = useState(false);
  const [cgMap, setCgMap] = useState(false);
  const [upMap, setUpMap] = useState(false);
  const [mpMap, setMpMap] = useState(false);

  const [cities, setCitiesVal] = useState("IND: 30");
  const [stores, setStoresVal] = useState("100,000");

  useEffect(() => {
    const rj = document.getElementById("rj");
    const gj = document.getElementById("gj");
    const mh = document.getElementById("mh");
    const cg = document.getElementById("cg");
    const up = document.getElementById("up");
    const mp = document.getElementById("mp");

    const cityData = document.getElementById("city-data");
    const storeData = document.getElementById("store-data");

    rj.addEventListener("mouseenter", () => {
      setRjMap(true);
      setGjMap(false);
      setMhMap(false);
      setCgMap(false);
      setUpMap(false);
      setMpMap(false);

      setCitiesVal("RJ: 2");
      setStoresVal("6,000");
    });
    gj.addEventListener("mouseenter", () => {
      setRjMap(false);
      setGjMap(true);
      setMhMap(false);
      setCgMap(false);
      setUpMap(false);
      setMpMap(false);

      setCitiesVal("GJ: 3");
      setStoresVal("9,000");
    });
    mh.addEventListener("mouseenter", () => {
      setRjMap(false);
      setGjMap(false);
      setMhMap(true);
      setCgMap(false);
      setUpMap(false);
      setMpMap(false);

      setCitiesVal("MH: 3");
      setStoresVal("9,000");
    });
    cg.addEventListener("mouseenter", () => {
      setRjMap(false);
      setGjMap(false);
      setMhMap(false);
      setCgMap(true);
      setUpMap(false);
      setMpMap(false);

      setCitiesVal("CG: 1");
      setStoresVal("3,000");
    });
    up.addEventListener("mouseenter", () => {
      setRjMap(false);
      setGjMap(false);
      setMhMap(false);
      setCgMap(false);
      setUpMap(true);
      setMpMap(false);

      setCitiesVal("UP: 2");
      setStoresVal("6,000");
    });
    mp.addEventListener("mouseenter", () => {
      setRjMap(false);
      setGjMap(false);
      setMhMap(false);
      setCgMap(false);
      setUpMap(false);
      setMpMap(true);

      setCitiesVal("MP: 3");
      setStoresVal("9,000");
    });
  }, []);

  return (
    <section id="map">
      <div className="map-content">
        <div className="map-head">
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
        </div>
        <div className="map-city-data">
          <span id="city-data">{cities} Cities</span>
          <span id="store-data">{stores} Stores</span>
        </div>
        <div className="map-bullets">
          <ul>
            <li>
              <a id="rj">Rajasthan</a>
            </li>
            <li>
              <a id="gj">Gujarat</a>
            </li>
            <li>
              <a id="mh">Maharashtra</a>
            </li>
            <li>
              <a id="cg">Chhattisgarh</a>
            </li>
            <li>
              <a id="up">Uttar Pradesh</a>
            </li>
            <li>
              <a id="mp">Madhya Pradesh</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="map-container">
        <Tilt options={defaultOptions}>
          {/* <img src={Map_India} alt="Interactive Map" /> */}
          {rjMap ? (
            <Map_India_Rajasthan />
          ) : gjMap ? (
            <Map_India_Gujarat />
          ) : mhMap ? (
            <Map_India_Maharastra />
          ) : cgMap ? (
            <Map_India_Chhattisgarh />
          ) : upMap ? (
            <Map_India_UP />
          ) : mpMap ? (
            <Map_India_MP />
          ) : (
            <Map_India_NoHL />
          )}
        </Tilt>
      </div>
    </section>
  );
}
