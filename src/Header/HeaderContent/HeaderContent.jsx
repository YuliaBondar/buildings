import React from 'react'
import './HeaderContent.css'

const HeaderContent = ({type}) => {
  
  return (
    <div className='header-content'>
      <div className="item">

        <div className="text-item1">{type}</div>

        <div className="text-items">Our team can build a house according to your wishes.<br/> Any design and concept, we will help make it happen</div>
        <div className="button">
          <button className='contact-button'>Contact us</button>
        </div>
      </div>
    </div>
  )
}

export default HeaderContent