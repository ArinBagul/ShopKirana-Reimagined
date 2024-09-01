import React from "react";
import styles from "../styles/Leads.module.css"
import partner from "../assets/images/leads.png"

function Leads() {
  return (
    <div className={styles.animationCtr}>
      <div className={styles.animationStrip}>
        <img src={partner} alt="our partners" />
        <img src={partner} />
        <img src={partner} />
        <img src={partner} />
      </div>
    </div>
  );
}

export default Leads;
