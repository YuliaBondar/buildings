import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
            <li onClick={() => SetType('We build your dream house\nwell and professionally')}><Link to='/home'>Home</Link></li>
            <li onClick={() => SetType('About our story - We are the best team')}><Link to='/about'>About</Link></li>
            <li onClick={() => SetType('Our team services')}><Link to='/services'>Services</Link></li>
            <li onClick={() => SetType('Here some our best works')}><Link to='/gallery'>Gallery</Link></li>
            <li onClick={() => SetType('Need some consultation or want to collaborarion with us? Let’s connect!')}>Contact</li>
            <li onClick={() => SetType('Read some story from clients!')}>Story</li>
            <li onClick={() => SetType('Have a briliant idea? Join with us. We have an oppurtunity for you')}>Careers</li>
            <li onClick={() => SetType('Article and news about property and constructions')}>News</li>
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