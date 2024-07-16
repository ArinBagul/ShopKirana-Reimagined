import React from "react";
import "../styles/Footer.css";

import Insta from "../assets/Insta";
import Facebook from "../assets/Facebook";
import Linkedin from "../assets/Linkedin";

function Footer() {
  return (
    <footer id="footer-section">
      <div className="r1">
        <div className="social-ctr">
          <span>Follow us on</span>
          <a href="">
            <Insta />
          </a>
          <a href="">
            <Facebook />
          </a>
          <a href="">
            <Linkedin />
          </a>
        </div>
      </div>
      <div className="r2">
        <div className="c1">
          <h2 className="foot-logo">
            <span>Shop</span>Kirana
          </h2>
          <p className="foot-logo-tagline playfair">Empowering Retailers</p>
        </div>
        <div className="c2">
          <span className="f-head">Company</span>
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About us</a>
            </li>
            <li>
              <a href="">Contact us</a>
            </li>
            <li>
              <a href="">Careers</a>
            </li>
            <li>
              <a href="">Blogs</a>
            </li>
          </ul>
        </div>
        <div className="c3">
          <span className="f-head">Further Information</span>
          <ul>
            <li>
              <a href="">Terms & Conditions</a>
            </li>
            <li>
              <a href="">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className="c4">
          <span className="f-head">Address</span>
          <ul>
            <li>
              <a href="">
                1501, 15th Floor, SKYE Corporate<br></br> Park, Plot No 25,
                Scheme No 78,<br></br>
                Part II, Sector B Indore 452010
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="r3">Reimagined with ❤ by <span>Arin Bagul</span></div>
    </footer>
  );
}

export default Footer;
