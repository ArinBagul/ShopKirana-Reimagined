import React from "react";
import styles from "../styles/CareerHero.module.css";

import careersHand from "../assets/images/careershand.png";
import { Link } from "react-router-dom";

function CareerHero() {
  return (
    <section id={styles.careers}>
      <div className={styles.heroCtr}>
        <span className={styles.badge}>We are hiring!</span>
        <h2 className={styles.heading}>Be part of our mission</h2>
        <p className={styles.subHeading}>
          Build people first, they will build the company later. Do you think
          you can change the Indian Retail?
        </p>
        <Link to="apply" className={`${styles.btn} p-btn`}>
          Apply Now
        </Link>

        <img src={careersHand} alt="" className={styles.heroimg} />
      </div>
    </section>
  );
}

export default CareerHero;
