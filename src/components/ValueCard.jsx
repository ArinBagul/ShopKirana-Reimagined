import React from 'react'
import "../styles/ValueCard.css"

function ValueCard(pros) {
  return (
    <div className='val-card-cont'>
        <div className="card-val">
            {pros.cardVal}
        </div>
        <div className="card-content">
            {pros.contentLineOne} <br></br> {pros.contentLineTwo}
        </div>
    </div>
  )
}

export default ValueCard