import React from "react";
import styles from "../styles/AboutCards.module.css";

function AboutCards() {
  return (
    <section id={styles.aboutCards}>
      <div className={styles.aboutCardsCtr}>
        <div className={styles.lac}>
          <div className={styles.card}>
            <div className={styles.cardHeading}>
              <h2>
                Our <span>Vision</span>
              </h2>
            </div>
            <div className={styles.cardContent}>
              <ul>
                <li>
                  To empower Indian retailers with power of technology and
                  supply chain innovation.
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardHeading}>
              <h2>
                Our <span>Mission</span>
              </h2>
            </div>
            <div className={styles.cardContent}>
              <ul>
                <li>
                  To equip and integrate Indian retailers with latest
                  technology.
                </li>
                <li>
                  Improve the margins, productivity and sales of our customers.
                </li>
                <li>
                  Increasing competitiveness of customers by optimizing
                  inventory, space, aesthetics.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.rac}>
          <div className={styles.card}>
            <div className={styles.cardHeading}>
              <h2>
                Our <span>Values</span>
              </h2>
            </div>
            <div className={styles.cardContent}>
              <ul>
                <li>
                  Mission Obsession: We are obsessed with our mission of
                  empowering retailers with the latest technologies, tools,
                  knowledge & innovation.
                </li>
                <li>
                  Simplify: We believe in making every stakeholder's life easy
                  and productive by creating the simplest tools, systems &
                  processes.
                </li>
                <li>
                  Conviction with Humbleness: We believe in taking a tough
                  business decision and putting our thoughts across but we are
                  polite while doing it.
                </li>
                <li>
                  Execution & Growth Focused: We believe in action vs.
                  discussion. We are a growth-oriented organization.
                </li>
                <li>
                  Integrity: We believe in doing our best in the most honest way
                  even when no one is watching.
                </li>
                <li>
                  Respect: We believe in earning and giving respect to our
                  behavior and business performance. We aim to be the most
                  respected organization among stakeholders.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutCards;
