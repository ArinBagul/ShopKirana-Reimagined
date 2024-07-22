import React from "react";
import "../styles/Advt.css";

import cta_arrow from "../assets/cta_arrow.svg";

function Advt() {
  return (
    <section id="ad-section">
      <div className="ad-ctr">
        <div className="clr-plate">
          <div className="c1">
            <div className="ad-head">
              <span>For Loan</span>
              <span>Application Complaints</span>
            </div>
            <div className="ad-body">
              <p>
                If you have any complaints related to your loan application,
                whether pre or post<br></br> disbursement, please contact our Grievance
                Redressal Officer at Arthmate for assistance.
              </p>
            </div>
          </div>
          <div className="c2">
            <div className="sponsor-content">
              <span>Our leading partner </span>
              <span className="playfair">Arthmate</span>
            </div>
            <a href="https://www.arthmate.com/" target="_blank" className="ad-cta">
              Visit Now <img src={cta_arrow} alt="cta" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Advt;
