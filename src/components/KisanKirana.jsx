import React from 'react'
import styles from "../styles/KisanKirana.module.css"

function KisanKirana() {
  return (
    <section id={styles.kisankirana_promo}>
        <div className={styles.kk_ctr}>
            <h2 className={styles.main_heading}><span className={styles.logo}>Shop<span className={styles.logo_hili}>Kirana</span></span> is creating an ecosystems of brands</h2>
            <h3 className={styles.sub_heading}>One of our investment in Building Brand is <b>Kisan Kirana</b></h3>
            <a href="https://kisankirana.in/" target="_blank" className={`${styles.ad_btn_white}`}>
              Visit Now
            </a>
        </div>
    </section>
  )
}

export default KisanKirana