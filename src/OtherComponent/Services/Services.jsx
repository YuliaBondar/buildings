import React from 'react'
import './Services.css'
import OurElement from '../../ForHeaderCompany/OurServices/OurElement'

const Services = () => {
  return (
    <div className='services-item'>
        <div className="item-elements">
              <OurElement/>
              <div className="design-building">
                <div className="photo-element"></div>

                <div className="texts-items">
                    <h3>Design building / house</h3>
                    <span>
                    is simply dummy text of the printing and typesetting industry.<br/>
                    Lorem Ipsum has been the industry's standard dummy text ever<br/>
                    since the 1500s, when an unknown printer took a galley of type<br/>
                    and scrambled it to make a type specimen book. It has survived<br/>
                    not only five centuries, but also the leap into electronic<br/>
                    typesetting, remaining essentially unchanged.
                    </span>
                </div>
              </div>
              <div className="design-building">
                <div className="texts-items-second">
                      <h3>Design building / house</h3>
                      <span>
                      is simply dummy text of the printing and typesetting industry.<br/>
                      Lorem Ipsum has been the industry's standard dummy text ever<br/>
                      since the 1500s, when an unknown printer took a galley of type<br/>
                      and scrambled it to make a type specimen book. It has survived<br/>
                      not only five centuries, but also the leap into electronic<br/>
                      typesetting, remaining essentially unchanged.
                      </span>
                  </div>
                  <div className="photo-works"></div>
              </div>
        </div>

    </div>
  )
}

export default Services