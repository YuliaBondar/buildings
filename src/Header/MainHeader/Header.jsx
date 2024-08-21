import React, {useState} from 'react'
import './MainHeader.css'
import HeaderNavigation from '../HeaderNavigation/HeaderNavigation.jsx'
import HeaderContent from '../HeaderContent/HeaderContent.jsx'

const Header = () => {
  const [type, setType] = useState('We build your dream house well and professionally');
  return (
    <div className='header'>
         <HeaderNavigation SetType={setType} />
         <HeaderContent type={type} />
    </div>
  )
}

export default Header