import React from 'react'
import './OurServices.css'
import { FaPencilRuler } from "react-icons/fa";
import { LuSofa } from "react-icons/lu";
import { BiSolidBuildingHouse } from "react-icons/bi";
import { VscTools } from "react-icons/vsc";

const OurElement = () => {
  return (
    <div className="our-works">

                <div className='skill-work first'>
                    <div className="content">
                        <div ><FaPencilRuler className='img'/></div>
                        <div className="text-works">
                            <h3>Design building/house</h3>
                            <p>We have an architect for<br/> design new buildings</p>
                        </div>
                    </div>
                </div>
                <div className="skill-work ">
                    <div className="content">
                        <div ><LuSofa className='img'/></div>
                        <div className="text-works">
                            <h3>Interior Design</h3>
                            <p>We have an interior designer<br/> for design your perfect<br/> inside house</p>
                        </div>
                    </div>
                </div>

                <div className="skill-work">
                    <div className="content">
                        <div ><BiSolidBuildingHouse className='img'/></div>
                        <div className="text-works">
                            <h3>Build from scratch</h3>
                            <p>We have an contractor for<br/> build new building from<br/> scratch</p>
                        </div>
                    </div>
                </div>

                <div className="skill-work">
                    <div className="content">
                        <div ><VscTools className='img'/></div>
                        <div className="text-works">
                            <h3>Renovation</h3>
                            <p>We can also renovate or<br/> rebuilds new buildings/house</p>
                        </div>
                    </div>
                </div>
            </div>
  )
}

export default OurElement