import React from 'react'
import './YouData.css'

const OurSource = () => {
  return (
    <div className='ourSource-item'>
        <div className="text-source">
            <h3>Or contact us via e-mails or even mobile call or Whatsapp messages</h3>
        </div>
        <div className="contact-element">
        {/* <div className="contact-butt"> */}
                    <button className="contact-button" type='submit'>E-mails</button>
                    <button className="contact-button" type='submit'>Whatsapp</button>
                    <button className="contact-button" type='submit'>Message</button>
        {/* </div> */}
        </div>
    </div>
  )
}

export default OurSource