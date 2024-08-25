import React from "react";
import "../styles/ContactCard.css";

function ContactCard() {
  return (
    <div className="contact-card">
      <div className="contact-head-ctr">
        <div className="contact-head">
          <span className="playfair">Connect</span>
          <span>with us</span>
        </div>
        <div className="contact-subhead">
          <p>We will reach you within 50 minutes</p>
        </div>
      </div>
      <form className="contact-form">
        <input type="text" placeholder="First name" id="fname" />
        <input type="text" placeholder="Last name" id="lname" />
        <input type="text" placeholder="Email address" id="email" />
        <input type="text" placeholder="Phone" id="phone" />
        <button type="submit" id="contact-btn" className="contact-btn">
          Connect
        </button>
      </form>
    </div>
  );
}

export default ContactCard;
