import React from 'react'
import CorporateCard from './CorporateCard';

function CorporatePricingPlans() {
   return (
    <div className='bg-[#161616] text-white pb-[8vw] pt-[14vw] font-helvetica rounded-t-[60px]'>
      <div className=''>
        <h2 className='text-[150px] font-gallient pt-[1vw] leading-[7vw] text-center'>Pricing Plans</h2>
        <p className='text-[24px] text-center font-helvetica'>Pick the plan that suits you best.</p>
      </div>

    <div className='flex justify-center gap-4 items-center flex-wrap  px-[12vw] mt-[4vw]'>
      <CorporateCard title="Startup" price="499" description="Get the essentials to kickstart your brand and make a solid first impression."/>
      <CorporateCard title="Growth" price="999" description="Perfect for businesses looking to scale and create a consistent brand identity."/>
      <CorporateCard title="Elite" price="1,999" description="Comprehensive branding for businesses ready to lead with confidence and authority."/>
    </div>

    </div>
  )
}

export default CorporatePricingPlans;