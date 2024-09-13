import React from "react";
import styles from "../styles/BrandHero.module.css";
import { Link } from "react-router-dom";

function BrandHero() {
  return (
    <section id={styles.brand}>
      <div className={styles.brandCtr}>
        <div className={styles.c1}>
          <div className={styles.heading}>
            <h1 className={styles.bht}>
              Building <span>Brands</span>
            </h1>
            <h1 className={styles.bhb}>Let’s build your brand together</h1>
          </div>
          <div className={styles.content}>
            <p>
              India is a place of entrepreneurs & so does ShopKirana. We have an
              incubation centre which help entrepreneurs to build fmcg brands
              which can reach to millions of retail stores across the country.
              Our first success story in Building brand is Kisan Kirana which is
              available at thousands of retail stores & captured
              significant market share in its category.
            </p>
          </div>
          <Link to="apply" className={`${styles.btn} p-btn`}>
            Apply Now
          </Link>
        </div>
        <div className={styles.c2}>
          <div className={styles.card}>
            <div className={styles.cardHeading}>
              <h2>
                Our <span>Offerings</span>
              </h2>
            </div>
            <div className={styles.cardContent}>
              <ul>
                <li>Sales</li>
                <li>Retailer Network</li>
                <li>Consumer reach</li>
                <li>Investment</li>
                <li>Access to Industry Leaders</li>
                <li>Competitive landscape</li>
              </ul>
              <ul>
                <li>End to end technology platform</li>
                <li>Ready to use supply chain</li>
                <li>Fastest Go-to-Market Channel</li>
                <li>Significant Marketshare</li>
                <li>Idea to Invoice</li>
                <li>Whatever it takes to build a brand</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BrandHero;