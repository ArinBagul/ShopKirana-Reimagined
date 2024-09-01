import React from "react";
import "../styles/ContactCTA.css";

function ContactCTA(props) {
  const link = props.link;
  const icon = props.icon;
  const txt = props.txt;
  // console.log(icon)
  return (
    <a href={link} className="contact-info-batch">
      {icon}
      {txt}
    </a>
  );
}

export default ContactCTA;
