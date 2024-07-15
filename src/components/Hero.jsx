import React, { useEffect, useRef } from "react";
import "../styles/Hero.css";

import heroImage from "../assets/heroImage.png";

import insta from "../assets/insta.svg";
import facebook from "../assets/facebook.svg";
import linkedIn from "../assets/linkedIn.svg";

function Hero() {
  const aniCtrRef1 = useRef(null);
  const aniCtr1Ref1 = useRef(null);
  const aniCtr2Ref1 = useRef(null);

  const aniCtrRef2 = useRef(null);
  const aniCtr1Ref2 = useRef(null);
  const aniCtr2Ref2 = useRef(null);

  useEffect(() => {
    const aniCtr1 = aniCtrRef1.current;
    const aniCtr1_1 = aniCtr1Ref1.current;
    const aniCtr2_1 = aniCtr2Ref1.current;

    const aniCtr2 = aniCtrRef2.current;
    const aniCtr1_2 = aniCtr1Ref2.current;
    const aniCtr2_2 = aniCtr2Ref2.current;

    const handleMouseEnter1 = () => {
      aniCtr1_1.classList.remove("a1");
      aniCtr1_1.classList.add("abc");
      aniCtr2_1.classList.remove("xyz");
      aniCtr2_1.classList.add("a1");
    };

    const handleMouseLeave1 = () => {
      aniCtr2_1.classList.remove("a1");
      aniCtr2_1.classList.add("xyz");
      aniCtr1_1.classList.remove("abc");
      aniCtr1_1.classList.add("a1");
    };

    const handleMouseEnter2 = () => {
      aniCtr1_2.classList.remove("a1");
      aniCtr1_2.classList.add("abc");
      aniCtr2_2.classList.remove("xyz");
      aniCtr2_2.classList.add("a1");
    };

    const handleMouseLeave2 = () => {
      aniCtr2_2.classList.remove("a1");
      aniCtr2_2.classList.add("xyz");
      aniCtr1_2.classList.remove("abc");
      aniCtr1_2.classList.add("a1");
    };

    if (aniCtr1) {
      aniCtr1.addEventListener("mouseenter", handleMouseEnter1);
      aniCtr1.addEventListener("mouseleave", handleMouseLeave1);
    }

    if (aniCtr2) {
      aniCtr2.addEventListener("mouseenter", handleMouseEnter2);
      aniCtr2.addEventListener("mouseleave", handleMouseLeave2);
    }

    // Cleanup the event listener on component unmount
    return () => {
      if (aniCtr1) {
        aniCtr1.removeEventListener("mouseenter", handleMouseEnter1);
        aniCtr1.removeEventListener("mouseleave", handleMouseLeave1);
      }
      if (aniCtr2) {
        aniCtr2.removeEventListener("mouseenter", handleMouseEnter2);
        aniCtr2.removeEventListener("mouseleave", handleMouseLeave2);
      }
    };
  }, []);

  return (
    <section id="hero">
      <div className="hero-container">
        <div className="text-ctr">
          <h1>Empowering Retailers with</h1>
          <h1>
            <span className="ani-txt-ctr">
              <span className="ani-ctr" ref={aniCtrRef1}>
                <span
                  className="ani-txt-1 a1 emp-txt playfair"
                  ref={aniCtr1Ref1}
                >
                  Technology
                </span>
                <span
                  className="ani-txt-2 xyz emp-txt playfair"
                  ref={aniCtr2Ref1}
                >
                  Technology
                </span>
              </span>
            </span>
            and{" "}
            <span className="ani-txt-ctr">
              <span className="ani-ctr" ref={aniCtrRef2}>
                <span
                  className="ani-txt-1 a1 emp-txt playfair"
                  ref={aniCtr1Ref2}
                >
                  Brands
                </span>
                <span
                  className="ani-txt-2 xyz emp-txt playfair"
                  ref={aniCtr2Ref2}
                >
                  Brands
                </span>
              </span>
            </span>
          </h1>
        </div>
        <div className="social">
          <ul>
            <li>
              <a href="#">
                <img src={insta} alt="ig" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={facebook} alt="ig" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={linkedIn} alt="ig" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="hero-bottom">
        <div className="hero-image">
          <img src={heroImage} alt="Hero Image" />
        </div>
        <div className="hero-btm-heading">
          <h2>
            <span className="emp-head-bullet">Schedule</span>{" "}
            <span className="playfair">a meeting</span>
          </h2>
        </div>
        <div className="form-container">
          <input type="text" placeholder="Name" id="name-in" />
          <input type="text" placeholder="Email address" id="email-in" />
          <input type="text" placeholder="dd/mm/yyyy" id="date-in" />
          <button type="submit">Book Now</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
