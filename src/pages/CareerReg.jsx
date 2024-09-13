import React from "react";
import styles from "../styles/CareerReg.module.css";

function CareerReg() {
  return (
    <section id={`${styles.career_reg}`}>
      <div className={`${styles.reg_ctr}`}>
        <div className={`${styles.dark_side}`}>
          <div className={`${styles.step_no}`}>
            <span>Step</span>
            <span>1</span>
          </div>
          <div className={`${styles.step_comment}`}>
            <span>Let's Get to Know You</span>
          </div>
        </div>
        <div className={`${styles.light_side}`}>
          <div className={`${styles.head_ctr} contact-head-ctr`}>
            <div className={`${styles.head} contact-head`}>
              <span className={`${styles.head1}`}>Presonal</span>
              <span className={`${styles.head2}`}>Info</span>
            </div>
            <div className="contact-subhead">
              <p>Please provide the correct information</p>
            </div>
          </div>
          <form className="contact-form">
            <input type="text" placeholder="First name" id="fname" />
            <input type="text" placeholder="Last name" id="lname" />
            <input type="text" placeholder="Email address" id="email" />
            <input type="text" placeholder="Phone" id="phone" />
            <button type="submit" id="contact-btn" className="contact-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default CareerReg;
