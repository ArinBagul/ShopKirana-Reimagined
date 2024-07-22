import React, { useEffect } from "react";
import "../styles/GrowingExpSection.css";

import mapIcon from "../assets/mapIcon.svg";
import Brand from "../assets/Brand";
import Relax from "../assets/Relax";
import BottomCloud from "../assets/BottomCloud";
import TopCloud from "../assets/TopCloud";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(useGSAP,ScrollTrigger);

function GrowingExpSection() {
  useGSAP(()=>{
    gsap.to(".aos-container",{
      transform: "translateX(-250%)",
      scrollTrigger: {
        trigger:"#growing-exp",
        scroller: "body",
        // markers: true,
        start: "top 0%",
        end: "top -200%",
        scrub: 2,
        pin: true,
      }
    })
  })
  return (
    <section id="growing-exp">
      <div className="vom-card">
        <a href="#map">View Map</a>
        <div className="map-icon-ctr">
          <img src={mapIcon} alt="map icon" />
        </div>
      </div>
      <div className="aos-container">
        <div className="part-one">
          <p className="aos-p1-txt">
            <span className="playfair aos-p1-txt-p-one">Growing</span>{" "}
            <span className="aos-p1-txt-p-two">Exponentially...</span>
          </p>
        </div>
        <div className="part-two">
          <div className="p2-head">
            <span className="aos-p2-batch-1">Direct</span>
            <span className="aos-p2-batch-2 playfair">Brand Connections</span>
            <span className="aos-p2-img">
              <Brand />
            </span>
          </div>
          <p className="aos-p2-txt">
            ShopKirana bridges the gap between retailers and brands, ensuring
            authentic and timely product availability.
          </p>
        </div>
        <div className="part-two-img">
          <div className="top-cloud">
            <TopCloud />
          </div>
          <div className="relax-character">
            <Relax />
          </div>
          <div className="bottom-cloud">
            <BottomCloud />
          </div>
        </div>
        <div className="part-three">
          <span className="aos-p3-txt">Improves the</span>
          <div className="p3-batches">
            <span className="aos-p3-batch-1 playfair">Productivity and</span>
            <span className="aos-p3-batch-2">Sales</span>
            <span className="aos-p3-batch-3">Margins</span>
          </div>
          <span className="aos-p3-txt">of our customers.</span>
        </div>
      </div>
      <div className="exp-bullet-container">
        <ul>
          <li>30 Cities</li>
          <li>100,000 Stories</li>
          <li>2B Sales</li>
          <li>50 Min Consumer Reach</li>
        </ul>
      </div>
    </section>
  );
}

export default GrowingExpSection;
