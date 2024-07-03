import React from "react";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <nav className="nav-active">
        <a href="#" className="logo poppins-black">
          <span className="emp-txt">Shop</span>Kirana
        </a>
        <ul className="nav-links">
          <li>
            <a href="#" className="nav-link-active">
              Home
            </a>
          </li>
          <li>
            <a href="#">Team</a>
          </li>
          <li>
            <a href="#">Build Brands</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <a href="#">Stories</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
