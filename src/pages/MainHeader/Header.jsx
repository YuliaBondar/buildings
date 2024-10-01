import React, {useState} from 'react'
import './MainHeader.css'
import HeaderNavigation from '..//..//components/HeaderNavigation/HeaderNavigation.jsx'
import HeaderContent from '../..//components/HeaderContent/HeaderContent.jsx'

const Header = () => {
  const [type, setType] = useState('We build your dream house well and professionally');
 
  const handleNavClick = (text, path) => {
   
    localStorage.setItem('savedText', text);
    localStorage.setItem('savedPath', path);
  };

  return (
    <div className='header'>
         <HeaderNavigation 
            SetType={setType} 
          
          />
         <HeaderContent 
          handleNavClick={handleNavClick} 
          type={type}/>
    </div>
  )
}

export default Header