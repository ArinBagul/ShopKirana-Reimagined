import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import styles from "../styles/Teams.module.css";

import { Tilt } from "react-tilt";
import { Link } from "react-router-dom";
import Linkedin from "../assets/Linkedin";

function Teams() {
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
    <section id={styles.teams}>
      <div className={styles.teamsHeading}>
        <h2>
          A <span>Team</span> of Experts
        </h2>
      </div>
      <div className={styles.teamsCardsCtr}>
        <Tilt options={defaultOptions}>
          <div className={`${styles.teamCard} ${styles.m1}`}>
            <div className={styles.memberCard}>
              <div>
                <h3>Tanutejas Saraswat</h3>
                <p>CEO & Founder</p>
              </div>
              <div>
                <a href="https://in.linkedin.com/in/tanutejas" target="_blank"><Linkedin /></a>
              </div>
            </div>
          </div>
        </Tilt>
        <Tilt options={defaultOptions}>
          <div className={`${styles.teamCard} ${styles.m2}`}>
            <div className={styles.memberCard}>
              <div>
                <h3>Deepak Dhanotiya</h3>
                <p>Founder & Supply Chain</p>
              </div>
              <div>
              <a href="https://in.linkedin.com/in/deepak-dhanotiya-4756b723?trk=org-employees_mini-profile_title" target="_blank"><Linkedin /></a>
              </div>
            </div>
          </div>
        </Tilt>
        <Tilt options={defaultOptions}>
          <div className={`${styles.teamCard} ${styles.m3}`}>
            <div className={styles.memberCard}>
            <div>
                <h3>Sumit Ghorawat</h3>
                <p>Co-founder at ShopKirana</p>
              </div>
              <div>
              <a href="https://in.linkedin.com/in/sumit-ghorawat-b2018332?trk=public_profile_browsemap_mini-profile_title" target="_blank"><Linkedin /></a>
              </div>
            </div>
          </div>
        </Tilt>
        <Link to="/careers">
          <div className={`${styles.teamCard} ${styles.careersCard}`}>
            <div className={styles.careersCta}>
              <span>You can be the part of our team</span>
              <span className={styles.careersCtaIco}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="60"
                  viewBox="0 0 50 50"
                  fill="none"
                >
                  <path
                    d="M15.968 32.4694L18.0304 34.5318L30.4048 22.1574L30.4048 33.5006L33.3334 33.5006V17.1664H16.9992V20.095L28.3424 20.095L15.968 32.4694Z"
                    fill="#F4F4F4"
                  />
                </svg>
              </span>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}

export default Teams;
