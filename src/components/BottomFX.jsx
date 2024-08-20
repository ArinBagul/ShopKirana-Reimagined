import React, { useEffect } from "react";
import "../styles/BottomFX.css";

function BottomFX() {
  useEffect(() => {
    // Select the bottom line element
    const bottomLine = document.querySelector(".bottom-line");

    // Function to handle scrolling
    const handleScroll = () => {
      // Calculate the scroll percentage
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercentage = (scrollTop / docHeight) * 100;

      // Set the width of the bottom line based on the scroll percentage
      bottomLine.style.width = `${scrollPercentage}%`;
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bottom-effects">
      <div className="bottom-line"></div>
    </div>
  );
}

export default BottomFX;
