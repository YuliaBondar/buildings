import React from 'react'
import OurCompany from '..//..//components/OurCompany/OurCompany.jsx'
import OurServices from '..//..//components/OurServices/OurServices.jsx'
import OurBenefits from '..//..//components/OurBenefits/OurBenefits.jsx'
import OurWorks from '..//..//components/OurWorks/OurWorks.jsx'
import OurPartners from '..//..//components/OurPartners/OurPartners.jsx'
import OurOffer from '..//..//components/YourOffer/Offer'

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