import React from 'react'
import './OurCompany.css'
import { MdDone } from "react-icons/md";
import build from './photo/picture.png'
import work from './photo/picture2.png'
import drawer from './photo/picture3.png'
import build2 from './photo/picture4.png'
import Button from '../../shared/Button/Button.jsx'

const OurCompany = () => {
  return (
    <div className='company-item'>

      <div className="item-company">
        
       <div className="images-storage">
         <div className="build"><img src={build} alt='build'/></div>
         <div className="work"><img src={work} alt='build'/></div>
         <div className="drawer"><img src={drawer} alt='build'/></div>
         <div className="build2"><img src={build2} alt='build'/></div>
         <div className="circle">< MdDone className='image'/><p>Pro licensed</p></div>
       </div>
      </div>

      <div className="text-content">
       <div className="text">
          <h1>Our Company</h1>
          <p>Debuilds is a team of architects, interior design, and contractors 
            who help our clients not only to build their dream building, but also 
            to feel comfortable after the building is used.</p>
          <p>We already handled</p>
        </div>
        <div className="statistic">
            
              <p>50+ Clients</p>
              <p>30+ House</p>
              <p>20+ Building</p>
              
        </div>
        <Button text="See more"/>
      </div>
     
    </div>
  )
}

export default OurCompany