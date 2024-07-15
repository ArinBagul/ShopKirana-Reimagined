import React, { useEffect, useRef } from "react";
import "../styles/Navbar.css";

function Navbar() {
  const navbarRef = useRef(null);

  useEffect(() => {
    const navbar = navbarRef.current;

    const handleScroll = () => {
      const y = window.scrollY;
      console.log(y);
      if (y > 50) {
        navbar.classList.add("nav-active");
        console.log("in if block");
      } else {
        navbar.classList.remove("nav-active");
        console.log("in else block");
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="navbar">
      <nav ref={navbarRef}>
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
