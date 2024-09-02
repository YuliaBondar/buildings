import React from 'react'
import {Carousel} from './Carousel/Carousel.jsx'
import './Story.css'


const Story = () => {
  return (
    <div className="story-container">
        <div className="story-content">
            <Carousel>
                <div className='item item-1'>Item 1</div>
                <div className='item item-2'>Item 2</div>
                <div className='item item-3'>Item 3</div>
            </Carousel>
        </div>
    </div>
  )
}

export default Story