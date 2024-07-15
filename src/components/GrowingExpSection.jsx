import React from 'react'
import "../styles/GrowingExpSection.css"

import mapIcon from "../assets/mapIcon.svg"

function GrowingExpSection() {
  return (
    <section id='growing-exp'>
        <div className="vom-card">
            <a href="#">View Map</a>
            <div className="map-icon-ctr">
                <img src={mapIcon} alt="map icon" />
            </div>
        </div>
        <div className="aos-container">
            <p className='aos-txt'><span className='playfair aos-txt-p-one'>Growing</span> <span className='aos-txt-p-two'>Exponentially</span></p>
        </div>
        <div className="exp-bullet-container">
            <ul>
                <li>30 Cities</li>
                <li>100,000 Stories</li>
                <li>2B Sales</li>
                <li>50 Min Consumer Reach</li>
            </ul>
        </div>
    </section>
  )
}

export default GrowingExpSection;