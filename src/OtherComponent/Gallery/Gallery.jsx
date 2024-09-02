import React from 'react'
import './Gallery.css'
import gallery_element from'./Gallery.js'

const Gallery = () => {
  return (
    <div className='gallery-item'>
    <div className="elements-gallery">
        {gallery_element.map(item => (
            <div key={item.id} className="gallery-element">
              
                <img src={item.src} alt='ldld'/>
                <div className="items-about-building">
                  <p className='item-name'><b>{item.name}</b></p>
                  <p className='item-timing'>{item.timing}</p>
                  <a href={item.link}> <button className='contact-button'>See process</button></a>
            
                </div>
              </div>
        ))}
    </div>
    <div  className='button-see'>
      <button className='button-see-more'><b>See more</b></button>
    </div>
</div>
  )
}

export default Gallery