import React from 'react'
import { Carousel } from '../../components/Carousel/Carousel.js'
import './Story.css'
import clientData from './ClientData.js';
import client from './photoClient/clientOne.png'
import houses from './Houses.js'

const Story = () => {
  return (
    <div className="story-container">
      <div className="story-content">
        <Carousel>
          {
            clientData.map((client, index) => (
              <div key={client.id} className={`item item-1 ${index === 0 ? 'blue-background' : ''}`}>
                <img src={client.imag} alt={`Client ${client.id}`} />
                <p className='text-client-content'><i>{client.text}</i></p>
                <p><b>{client.clientName}</b></p>
              </div>
            ))
          }
        </Carousel>
      </div>

          <div className="interview">
            <div className="people-inter">
                <img src={client} alt='interview'/>
            </div>

            <div className="tet-inter">
                <p><b>Mr. James’s says : “I’m so happy!”</b></p>
                <span>
                is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </span>
            </div>
          </div>


          <p className='mrJames'>Mr. James’s villa</p>

          <div className="houses-buildings">
            <Carousel>
            {
                houses.map((houses, index) => (
                <div key={houses.id} className='item item-1'>
                    <img src={houses.image} alt={`houses ${client.id}`} />
                
                </div>
                ))
            }
            </Carousel>
        </div>

    </div>
  )
}

export default Story;
