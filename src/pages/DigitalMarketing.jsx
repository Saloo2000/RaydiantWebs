import React from 'react'
import DigitalHero from '../Components/digitalMarketing/DigitalHero'
import DigitalStrategy from '../Components/digitalMarketing/DigitalStrategy'
import DigitalPricePlan from '../Components/digitalMarketing/DigitalPricePlan'
import ServiceVideo from '../Components/ServiceVideo'

function DigitalMarketing() {
  return (
    <div>
        <DigitalHero/>
        <DigitalStrategy/>
        <DigitalPricePlan/>
         <div className='px-[12vw] py-[5vw]'>
        <h2 className='text-[150px] font-gallient font-light leading-[7vw] py-[4vw]'>From Clicks <br /> to <span className='font-light italic'>Success.</span></h2>
    
     <div>
       
       <div className='border-t border-black py-[5vw] flex justify-between '>
        <h3 className='font-instrumentSans text-[20px] font-semibold'>From Clicks<br /> to Success.</h3>
        <div className='w-3/5 flex flex-col justify-start'>
            <p className='text-[26px]'>
            In our team, developers work alongside designers. This is crucial in creating a fast and responsive website that would excite the audience.</p>
             <div className='w-fit mt-10 border-black border-[1px] text-[18px] text-black px-10 py-3 rounded-full'>
            <a href="/RaydiantWebs/services/mobile-apps" className='uppercase text-[1.5vw]'>Let's Work Together</a>
            </div>
        </div>
        </div>
    </div>
        
    </div>
    <ServiceVideo/>
    </div>
  )
}

export default DigitalMarketing