import React from 'react'
import styles from "../styles/CareerPerks.module.css";
import Line from './Line';

function CareerPerks() {
  return (
    <section id={styles.perks}>
        <div className={styles.heading}>
            <h2><span>Values</span> we live by</h2>
        </div>
        <div className={styles.perksCtr}>

            {/* card 1 */}
            <div className={styles.perkCard}>
                <div className={styles.number}>01.</div>
                <Line />
                <div className={styles.perkHeading}><h4>Open Culture</h4></div>
                <div className={styles.perkContent}>
                    <p>We believe that transparency boosts efficiency in working environment. This open culture breeds friendships, comfort and understanding among our people.</p>
                </div>
            </div>

            {/* card 2 */}
            <div className={styles.perkCard}>
                <span className={styles.number}>02.</span>
                <Line />
                <div className={styles.perkHeading}><h4>Ownership</h4></div>
                <div className={styles.perkContent}>
                    <p>A project can only be successful when people working on it take it personally. The ownership is not defined in 9 - 5 job. It is much more than that, it is the driving force.</p>
                </div>
            </div>

            {/* card 3 */}
            <div className={styles.perkCard}>
                <div className={styles.number}>03.</div>
                <Line />
                <div className={styles.perkHeading}><h4>Risk Taking Capability</h4></div>
                <div className={styles.perkContent}>
                    <p>We believe that people should take calculative risk. If it pans out bad then do not worry, we are there for you.</p>
                </div>
            </div>

            {/* card 4 */}
            <div className={styles.perkCard}>
                <div className={styles.number}>04.</div>
                <Line />
                <div className={styles.perkHeading}><h4>Relentless Drive</h4></div>
                <div className={styles.perkContent}>
                    <p>Dreams are not what you see while sleeping, it is what doesn't let you sleep. We chase our dream of changing Indian Retail by breaking molds of 5-9 jobs. It is relentless drive on a long road ahead.</p>
                </div>
            </div>

            {/* card 5 */}
            <div className={styles.perkCard}>
                <div className={styles.number}>05.</div>
                <Line />
                <div className={styles.perkHeading}><h4>Passion</h4></div>
                <div className={styles.perkContent}>
                    <p>We are passionate about our vision to change the Indian retail. What are you passionate about? Can your passion help us to achieve our goal?</p>
                </div>
            </div>

            {/* card 6 */}
            <div className={styles.perkCard}>
                <div className={styles.number}>06.</div>
                <Line />
                <div className={styles.perkHeading}><h4>Creating an Impact</h4></div>
                <div className={styles.perkContent}>
                    <p>We believe that a person's growth is depended on milestones achieved, and not the years of experience.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CareerPerks