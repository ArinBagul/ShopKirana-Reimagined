import React from "react";
import Heading from "./Heading";
import ValueCard from "./ValueCard";
import ThreeD from "./ThreeD";

import threeD from "../assets/threeD.png"

import "../styles/Impact.css"

function Impact() {
  return (
    <section id="impact">
      <Heading />
      <div className="impact-container">
        <div className="impact-col1">
            <div className="environment">
                <img src={threeD} alt="" />
            </div>
        </div>
        <div className="impact-col2">
            <ValueCard cardVal = '7.3L' contentLineOne = 'Biggest' contentLineTwo = 'Single Order' />
            <ValueCard cardVal = '10%' contentLineOne = 'Fastest' contentLineTwo = 'goto Market' />
            <ValueCard cardVal = '30%' contentLineOne = 'Consumer' contentLineTwo = 'Reach' />
        </div>
      </div>
    </section>
  );
}

export default Impact;
