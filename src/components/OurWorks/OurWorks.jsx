import React from 'react'
import './OurWorks.css'
import Clients from './OurClients.jsx'

import one from './photo/picture1.png'
import two from './photo/picture2.png'
import three from './photo/picture3.png'
import four from './photo/picture4.png'
import five from './photo/picture5.png'
import six from './photo/picture6.png'
import seven from './photo/picture7.png'
import eight from './photo/picture8.png'
import nine from './photo/picture9.png'
import Button from '../../shared/Button/Button.jsx'

const OurWorks = () => {
  return (
    <div className='ourWorks-item'>
        <div className="building-elements">

            <div className="text-Our_works">
                <h3>Our works</h3>
                <p>Here our some of the best the result when<br/> we build some buildings, houses, and also<br/>interior designs</p>
            </div>

            <div className="picture-grid">

              <div className="vertical-group_one">
                  <img className="firsts" src={one} alt='first' />
                  <img className="seconds" src={two} alt='second' />
              </div>

              <div className="horizontal-group_one">
                <img className="separate" src={three} alt='third' />
              </div>

              <div className="vertical-group_one">
                
                  <img className="fourth" src={four} alt='fourth' />
                  <img className="fifth" src={five} alt='fifth' />
                  
              </div>

              <div className="vertical-group_one">
                <img className="sixth" src={six} alt='sixth' />
                <img className="ninth" src={nine} alt='ninth' />
                 
              </div>

              <div className="vertical-group_two">
                <img className="seventh" src={seven} alt='seventh' /> 
                  <img className="eighth" src={eight} alt='eighth' />
              
              </div>

            </div>

            <div className="contact-buttons">
              <div className="line"></div>
              <Button text="See more"/>
            </div>
            
            <Clients/>
        </div>
        

    </div>
  )
}

export default OurWorks