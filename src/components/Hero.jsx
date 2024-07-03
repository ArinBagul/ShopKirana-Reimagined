import React, { useEffect, useRef } from "react";
import "../styles/Hero.css";
import heroImage from "../assets/heroImage.png";

function Hero() {
  const aniCtrRef = useRef(null);
  const aniCtr1Ref = useRef(null);
  const aniCtr2Ref = useRef(null);

  useEffect(() => {
    const aniCtr = aniCtrRef.current;
    const aniCtr1 = aniCtr1Ref.current;
    const aniCtr2 = aniCtr2Ref.current;

    const handleMouseEnter = () => {
      aniCtr1.classList.remove("a1");
      aniCtr1.classList.add("abc");
      aniCtr2.classList.remove("xyz");
      aniCtr2.classList.add("a1");
    };

    const handleMouseLeave = () => {
      aniCtr2.classList.remove("a1");
      aniCtr2.classList.add("xyz");
      aniCtr1.classList.remove("abc");
      aniCtr1.classList.add("a1");
    };

    if (aniCtr) {
      aniCtr.addEventListener("mouseenter", handleMouseEnter);
      aniCtr.addEventListener("mouseleave", handleMouseLeave);
    }

    // Cleanup the event listener on component unmount
    return () => {
      if (aniCtr) {
        aniCtr.addEventListener("mouseenter", handleMouseEnter);
        aniCtr.addEventListener("mouseleave", handleMouseLeave);
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
              <span className="ani-ctr" ref={aniCtrRef}>
                <span
                  className="ani-txt-1 a1 emp-txt playfair"
                  ref={aniCtr1Ref}
                >
                  Technology
                </span>
                <span
                  className="ani-txt-2 xyz emp-txt playfair"
                  ref={aniCtr2Ref}
                >
                  Technology
                </span>
              </span>
            </span>
            and{" "}
            <span className="ani-txt-ctr">
              <span className="ani-ctr" ref={aniCtrRef}>
                <span
                  className="ani-txt-1 a1 emp-txt playfair"
                  ref={aniCtr1Ref}
                >
                  Brands
                </span>
                <span
                  className="ani-txt-2 xyz emp-txt playfair"
                  ref={aniCtr2Ref}
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
              <a href="#">ig</a>
            </li>
            <li>
              <a href="#">fb</a>
            </li>
            <li>
              <a href="#">in</a>
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
