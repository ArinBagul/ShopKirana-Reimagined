import React from "react";
import preloader from "../assets/videos/preloader.webp";
import styles from "../styles/Preloader.module.css";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

function Preloader() {
  gsap.registerPlugin(useGSAP);
  
  useGSAP(() => {
    gsap.to(`.${styles.screen}`, {
      opacity: 0,
      duration: 0.5,
      delay: 9.5,
    });
    gsap.to(`.${styles.preloader_animation}`,{
      opacity:0,
      y:-50,
      duration:0.5,
      delay: 8,
    })
    gsap.to(`.${styles.logo}`,{
      opacity:0,
      y:-50,
      duration:0.5,
      delay: 8,
    })
    gsap.to(`.${styles.loading_txt}`,{
      opacity:0,
      y:-50,
      duration:0.5,
      delay: 8,
    })
  });

  return (
    <div className={styles.screen}>
      <div className={styles.preloaderCtr}>
        <img
          className={styles.preloader_animation}
          src={preloader}
          alt="Loading..."
        />
        <h3 className={`${styles.logo}`}>
          <span className={styles.l_p1}>Shop</span>Kirana
        </h3>
        <span className={`${styles.loading_txt}`}>Loading your experience</span>
      </div>
    </div>
  );
}

export default Preloader;
