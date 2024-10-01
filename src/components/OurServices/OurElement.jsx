import React from 'react';
import './OurServices.css';
import { FaPencilRuler } from 'react-icons/fa';
import { LuSofa } from 'react-icons/lu';
import { BiSolidBuildingHouse } from 'react-icons/bi';
import { VscTools } from 'react-icons/vsc';

const servicesData = [
    {
        icon: <FaPencilRuler className='img' />,
        title: 'Design building/house',
        description: 'We have an architect for design new buildings'
    },
    {
        icon: <LuSofa className='img' />,
        title: 'Interior Design',
        description: 'We have an interior designer for design your perfect inside house'
    },
    {
        icon: <BiSolidBuildingHouse className='img' />,
        title: 'Build from scratch',
        description: 'We have a contractor for build new building from scratch'
    },
    {
        icon: <VscTools className='img' />,
        title: 'Renovation',
        description: 'We can also renovate or rebuilds new buildings/house'
    }
];

const OurElement = () => {
    return (
        <div className="our-works">
            {servicesData.map((service, index) => (
                <div className="skill-work" key={index}>
                    <div className="content">
                        <div>{service.icon}</div>
                        <div className="text-works">
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default OurElement;