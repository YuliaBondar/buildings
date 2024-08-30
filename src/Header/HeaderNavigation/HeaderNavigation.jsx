import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './HeaderNavigation.css';
import { IoMenu } from "react-icons/io5";

const HeaderNavigation = ({ SetType }) => {
  const [isMenuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  return (
    <div className='navigation'>
      <div className='navigation-item'>
        <div className="emblem">
          <h1>DB -</h1>
        </div>
        <div className="navigation-component">
        <nav className={`nav-list ${isMenuVisible ? 'visible' : ''}`}>
            <li onClick={() => SetType('We build your dream house\nwell and professionally')}>
              <NavLink activeClassName="active" to='/home'>Home</NavLink>
            </li>
            <li onClick={() => SetType('About our story - We are the best team')}>
              <NavLink activeClassName="active" to='/about'>About</NavLink>
            </li>
            <li onClick={() => SetType('Our team services')}>
              <NavLink activeClassName="active" to='/services'>Services</NavLink>
            </li>
            <li onClick={() => SetType('Here some our best works')}>
              <NavLink activeClassName="active" to='/gallery'>Gallery</NavLink>
            </li>
            <li onClick={() => SetType('Need some consultation or want to collaboration with us? Let’s connect!')}>
              <NavLink activeClassName="active" to='/contact'>Contact</NavLink>
            </li>
            <li onClick={() => SetType('Read some story from clients!')}>
              <NavLink activeClassName="active" to='/story'>Story</NavLink>
            </li>
            <li onClick={() => SetType('Have a brilliant idea? Join with us. We have an opportunity for you')}>
              <NavLink activeClassName="active" to='/careers'>Careers</NavLink>
            </li>
            <li onClick={() => SetType('Article and news about property and constructions')}>
              <NavLink activeClassName="active" to='/news'>News</NavLink>
            </li>
          </nav>
          <div className="menu-icon" onClick={toggleMenu}>
            <IoMenu size={30} />
          </div>
          </div>
         </div>
       </div>
     );
   };

   export default HeaderNavigation;
   
