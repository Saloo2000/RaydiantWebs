import React from 'react'
import TechCard from './TechCard'

function TechPricePlan() {
  return (
    <div className='bg-[#161616] text-white pb-[8vw] pt-[14vw] font-helvetica rounded-t-[60px]'>
      <div className=''>
        <h2 className='text-[150px] font-gallient pt-[1vw] leading-[7vw] text-center'>Pricing Plans</h2>
        <p className='text-[24px] text-center font-helvetica'>Pick the plan that suits you best.</p>
      </div>

    <div className='flex justify-center gap-4 items-center flex-wrap  px-[12vw] mt-[4vw]'>
      <TechCard title="Startup" price="5000" description="Affordable and efficient, this plan is perfect for startups aiming to launch quickly with core features and essential functionality."/>
      <TechCard title="Growth" price="15,000" description="Enhance your app with advanced features, smooth performance, and analytics for businesses ready to scale."/>
      <TechCard title="Elite" price="30,000" description="A tailor-made, high-performance solution with cutting-edge features for enterprises aiming to lead the market."/>
    </div>

    </div>
  )
}

export default TechPricePlan;