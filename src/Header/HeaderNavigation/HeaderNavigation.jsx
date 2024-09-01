import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './HeaderNavigation.css';
import { IoMenu } from "react-icons/io5";

const HeaderNavigation = ({ SetType }) => {
  const [isMenuVisible, setMenuVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Загрузка состояния из localStorage при монтировании компонента
    const savedText = localStorage.getItem('savedText');
    const savedPath = localStorage.getItem('savedPath');

    if (savedText) {
      SetType(savedText);
    }

    if (savedPath) {
      // Если сохранённый путь не совпадает с текущим, перенаправляем на него
      if (savedPath !== location.pathname) {
        window.history.pushState(null, '', savedPath);
      }
    }
  }, [SetType, location.pathname]);

  const handleNavClick = (text, path) => {
    SetType(text);
    localStorage.setItem('savedText', text);
    localStorage.setItem('savedPath', path);
  };

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
            <li onClick={() => handleNavClick('We build your dream house\nwell and professionally', '/home')}>
              <NavLink activeClassName="active" to='/home'>Home</NavLink>
            </li>
            <li onClick={() => handleNavClick('About our story - We are the best team', '/about')}>
              <NavLink activeClassName="active" to='/about'>About</NavLink>
            </li>
            <li onClick={() => handleNavClick('Our team services', '/services')}>
              <NavLink activeClassName="active" to='/services'>Services</NavLink>
            </li>
            <li onClick={() => handleNavClick('Here some our best works', '/gallery')}>
              <NavLink activeClassName="active" to='/gallery'>Gallery</NavLink>
            </li>
            <li onClick={() => handleNavClick('Need some consultation or want to collaboration with us? Let’s connect!', '/contact')}>
              <NavLink activeClassName="active" to='/contact'>Contact</NavLink>
            </li>
            <li onClick={() => handleNavClick('Read some story from clients!', '/story')}>
              <NavLink activeClassName="active" to='/story'>Story</NavLink>
            </li>
            <li onClick={() => handleNavClick('Have a brilliant idea? Join with us. We have an opportunity for you', '/careers')}>
              <NavLink activeClassName="active" to='/careers'>Careers</NavLink>
            </li>
            <li onClick={() => handleNavClick('Article and news about property and constructions', '/news')}>
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
