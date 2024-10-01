import React from 'react'
// import '../OurServices/OurServices.css'
 import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import './OurBenefits.css'

const OurBenefits = () => {
  return (
    <div className='benefits-item'>
    <div className="our-services-component">

        <div className="some-text-about-services">
            <h3>Our benefits</h3>
            <p>Here our benefits if you collaboration with<br/>our team</p>
        </div>

        <div className="our-build">

            <div className='build-work first'>
                <div className="content-items">
                    <div ><IoCheckmarkDoneCircleOutline className='img'/></div>
                    <div className="text-benefits">
                        <h3>Flexible time</h3>
                        <p>We work wherever you<br/>ready to builds. Work fast<br/>and profesional</p>
                    </div>
                </div>
            </div>
            <div className="build-work second">
                <div className="content-items">
                    <div ><IoCheckmarkDoneCircleOutline className='img'/></div>
                    <div className="text-benefits">
                        <h3>Customizable design</h3>
                        <p>We can design your buildings, but we<br/>open if you want to customize your<br/>design or if you have architect</p>
                    </div>
                </div>
            </div>

            <div className="build-work third">
                <div className="content-items">
                    <div ><IoCheckmarkDoneCircleOutline className='img'/></div>
                    <div className="text-benefits">
                        <h3>Negotiable price</h3>
                        <p>Yes, we’re open to negotiate the price<br/>with you, and we will give the best<br/>price for our lovely clients</p>
                    </div>
                </div>
            </div>

            
        </div>
    </div>
</div>
  )
}

export default OurBenefits