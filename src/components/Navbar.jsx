import React, { useEffect, useState } from "react";
import "../styles/Navbar.css";

function Navbar() {
  const [isMenuActive, setIsMenuActive] = useState(false);

  useEffect(() => {
    const navBar = document.getElementById("navbar");

    const handleMenuToggle = () => {
      setIsMenuActive((prev) => !prev);
    };

    const menuBtn = document.getElementById("menu-btn");
    const closeBtn = document.getElementById("close-menu-btn");

    menuBtn.addEventListener("click", handleMenuToggle);
    closeBtn.addEventListener("click", handleMenuToggle);

    return () => {
      menuBtn.removeEventListener("click", handleMenuToggle);
      closeBtn.removeEventListener("click", handleMenuToggle);
    };
  }, []);

  useEffect(() => {
    const navBar = document.getElementById("navbar");

    if (!isMenuActive) {
      navBar.style.backdropFilter = "blur(7px)";
      navBar.style.webkitBackdropFilter = "blur(7px)";
    } else {
      navBar.style.backdropFilter = "none";
      navBar.style.webkitBackdropFilter = "none";
    }
  }, [isMenuActive]);

  useEffect(() => {
    const navBar = document.getElementById("navbar");
    const windowHeight = window.innerHeight;
    const handleScroll = () => {
      let scrollPosition = window.scrollY; // Get the current scroll position
      if ((scrollPosition + 100) > windowHeight) {
        navBar.classList.remove("transparent-nav")
      }
      else{
        navBar.classList.add("transparent-nav")
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav>
      <div className="navbar transparent-nav" id="navbar">
        <div className="shop-kirana-logo">
          <a href="#"><span>Shop.</span>Kirana</a>
        </div>

        <ul className={`nav-link-list ${isMenuActive ? "active-menu" : ""}`} id="nav-link-list">
          <button
            className="menu-btn close-btn"
            id="close-menu-btn"
            aria-label="Close Menu"
          >
            <i className="fi fi-rr-cross-small"></i>Close
          </button>
          <li><a href="#" className="active-nav-link">Home</a></li>
          <li><a href="#">Team</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Stories</a></li>
          <li><a href="#">About</a></li>
          <a href="#" className="nav-btn mobile-nav-btn">Let's Build Together</a>
        </ul>

        <a href="#" className="nav-btn big-scr-btn">Let's Build Together</a>
        <button className="menu-btn" id="menu-btn" aria-label="Open Menu">
          Menu <i className="fi fi-br-menu-burger"></i>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
