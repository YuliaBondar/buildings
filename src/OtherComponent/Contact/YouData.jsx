import React from 'react'
import './YouData.css'
import Work from './photo/work.png'

const YouData = () => {
  return (
    <div className='data-item'>
        <div className="contact-item">
            <div className="photo-content">
                <img src={Work} alt='Work-image'/>
            </div>
            <div className="form-for-people">
            <h3>Let’s talk about anything you need</h3>
            <form>
                <div className="form-row">
                    <div className="form-column">
                       
                        <input type="text" id="name" name="name" required placeholder='Your name/company name' />
                    </div>
                    <div className="form-column">
                       
                        <input type="text" id="contact" name="contact" required placeholder='Phone/E-mail' />
                    </div>
                </div>
                <div className="form-message">
                  
                    <textarea id="message" name="message" rows="4" required placeholder='Message'></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
        </div>
    </div>
  )
}

export default YouData