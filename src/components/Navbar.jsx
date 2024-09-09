import React, { useEffect, useState } from "react";
import "../styles/Navbar.css";
import { Link, NavLink } from "react-router-dom";

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
    const homeLink = document.getElementById("home-link");
    const heroSection = document.getElementById("hero");

    const heroSectionObserver = new IntersectionObserver(function (
      entries,
      heroSectionObserver
    ) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navBar.classList.add("transparent-nav");
          homeLink.classList.add("active")
        } else {
          navBar.classList.remove("transparent-nav");
          homeLink.classList.remove("active")
        }
      });
    });

    try {
      heroSectionObserver.observe(heroSection);
    } catch (error) {
      console.error(error);
    }
  }, []);

  function handleLinkClick() {
    setIsMenuActive(false);
  }

  return (
    <nav>
      <div className="navbar" id="navbar">
        <div className="shop-kirana-logo">
          <a href="#">
            <span>Shop.</span>Kirana
          </a>
        </div>

        <ul
          className={`nav-link-list ${isMenuActive ? "active-menu" : ""}`}
          id="nav-link-list"
        >
          <button
            className="menu-btn close-btn"
            id="close-menu-btn"
            aria-label="Close Menu"
          >
            <i className="fi fi-rr-cross-small"></i>Close
          </button>
          <li>
            <a href="/" id="home-link">Home</a>
          </li>
          <li>
            <NavLink to="/careers" onClick={handleLinkClick}>
              Careers
            </NavLink>
          </li>
          <li>
            <NavLink to="/blogs" onClick={handleLinkClick}>
              Stories
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={handleLinkClick}>
              About
            </NavLink>
          </li>
          <Link
            to="/build-brand"
            className="nav-btn mobile-nav-btn"
            onClick={handleLinkClick}
          >
            Let's Build Together
          </Link>
        </ul>

        <Link to="/build-brand" className="nav-btn big-scr-btn">
          Let's Build Together
        </Link>
        <button className="menu-btn" id="menu-btn" aria-label="Open Menu">
          Menu <i className="fi fi-br-menu-burger"></i>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
