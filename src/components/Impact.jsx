import React from "react";
import Heading from "./Heading";
import ValueCard from "./ValueCard";
import threeD from "../assets/threeD.png"
import ThreeD from "./ThreeD"

import "../styles/Impact.css"
import VideoImp from "./VideoImp";

function Impact() {
  return (
    <section id="impact">
      <Heading />
      <div className="impact-container">
        <div className="impact-col impact-col1">
            <div className="environment">
                {/* <img src={threeD} alt="" /> */}
                <ThreeD/>
            </div>
        </div>
        <div className="impact-col impact-col3">
          <VideoImp />
        </div>
        <div className="impact-col impact-col2">
            <ValueCard cardVal = '7.3L' contentLineOne = 'Biggest' contentLineTwo = 'Single Order' />
            <ValueCard cardVal = '10%' contentLineOne = 'Fastest' contentLineTwo = 'goto Market' />
            <ValueCard cardVal = '30%' contentLineOne = 'Consumer' contentLineTwo = 'Reach' />
        </div>
      </div>
    </section>
  );
}

export default Impact;
