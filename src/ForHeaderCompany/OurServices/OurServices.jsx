import React from 'react'
import './OurServices.css'
import OurElement from './OurElement.jsx'


const OurServices = () => {
  return (
    <div className='services-item'>
        <div className="our-services-component">

            <div className="some-text-about-services">
                <h3>Our services</h3>
                <p>Our services include building new buildings<br/>and renovating old buildings</p>
            </div>

            <OurElement/>
        </div>
    </div>
  )
}

export default OurServices