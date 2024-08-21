import React from 'react'
import OurCompany from '../OurCompany/OurCompany'
import OurServices from '../OurServices/OurServices'
import OurBenefits from '../OurBenefits/OurBenefits'
import OurWorks from '../OurWorks/OurWorks'
import OurPartners from '../OurPartners/OurPartners'
import OurOffer from '../YourOffer/Offer'

const ComponentHeader = () => {
  return (
    <div>
        <OurCompany/>
        <OurServices/>
        <OurBenefits/>
        <OurWorks/>
        <OurPartners/>
        <OurOffer />
    </div>
  )
}

export default ComponentHeader