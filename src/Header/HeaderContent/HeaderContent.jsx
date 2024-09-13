import React from 'react'
import './HeaderContent.css'
import '../HeaderNavigation/HeaderNavigation.css'
import { NavLink } from 'react-router-dom';

const HeaderContent = ({type, handleNavClick}) => {
  
  return (
    <div className='header-content'>
      <div className="item">

        <div className="text-item1">{type}</div>

        <div className="text-items">Our team can build a house according to your wishes.<br/> Any design and concept, we will help make it happen</div>
        <div className="button">
        
        <div onClick={() => handleNavClick('Need some consultation or want to collaboration with us? Let’s connect!', '/contact')}>
           <NavLink classNameActive="active" to='/contact'> <button className='contact-button'>Contact us</button></NavLink>
        </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderContent