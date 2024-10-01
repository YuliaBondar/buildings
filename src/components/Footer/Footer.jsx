import React from 'react'
import './Footer.css'
import Button from '../../shared/Button/Button.jsx'

const Footer = () => {
  return (
    <div className='footer-item'>
        <div className="footer-content">
            <div className="information-item">
                <div className="emblem"><h1>DB -</h1></div>
                <div className="contant-p">
                    <p>Lizenzo street number 12</p>
                    <p>Jakarta, Indonesia</p>
                </div>
                <Button text="Get directions" />
            </div>

            <div className="contact-information">
                
                    <ul>
                        <li><b>Menu</b></li>
                            <li>Home</li>
                            <li>About</li>
                            <li>Gallery</li>
                            <li>Service</li>
                        
                        <li><b>Contact</b> </li>
                            <li>E-mail</li>
                            <li>Mobile</li>
                            <li>Whatsapp</li>
                            <li>Fax</li>
                       
                        <li><b>Career</b> </li>
                            <li>Job</li>
                            <li>Part-time</li>
                            <li>Internship</li>
                            <li>Service</li>
                       
                        <li><b>Business</b> </li>
                            <li>Affiliate</li>
                            <li>Collaboration</li>
                            <li>Investment</li>
                            <li>People</li>
                        
                    </ul>
                
            </div>

        </div>
    </div>
  )
}

export default Footer