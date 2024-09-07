import React from "react";
import styles from "../styles/CareerHero.module.css";

import careersHand from "../assets/images/careershand.png";

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
        <a href="" className={`${styles.btn} p-btn`}>
          Apply Now
        </a>

        <img src={careersHand} alt="" className={styles.heroimg} />
      </div>
    </section>
  );
}

export default CareerHero;
