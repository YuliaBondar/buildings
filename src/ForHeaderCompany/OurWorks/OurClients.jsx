import React from 'react'
import './OurClient.css'

const OurClients = () => {
  return (
    <div className='client-item'>
        <div className="client_item_item">
            <div className="clients_say">

                <h3>What our clients say?</h3>
                <p>See what our clients say<br/>about their new home</p>
                <div className="contact-button">
                    <button className="contact-button">See more</button>
                </div>
            </div>

            <div className="picture">
                <div className="otzyv">
                    <div className="client_image"></div>
                    <div className="text_item">
                        <span>
                        <i>I really happy to see the result my new<br/>home. It’s really good house and good<br/>sprice too. And they work so fast becasue<br/>they have the best team. Once again,<br/>thankyou. I really appreciate it.</i><br/><br/>
                        <b>- Mr. Roberto</b>
                        </span>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurClients