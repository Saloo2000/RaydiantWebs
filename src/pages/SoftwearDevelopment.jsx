import React from 'react'
import SoftwearHero from '../Components/SoftwerUi/SoftwearHero';
import SoftStrategy from '../Components/SoftwerUi/SoftStrategy';
import SoftwearPlanPrice from '../Components/SoftwerUi/SoftwearPlanPrice';
import ServiceVideo from '../Components/ServiceVideo';

function SoftwearDevelopment() {
  return (
    <div>
        <SoftwearHero/>
        <SoftStrategy/>
        <SoftwearPlanPrice/>

        <div className='px-[12vw] py-[5vw]'>
        <h2 className='text-[150px] font-gallient font-light leading-[7vw] py-[4vw]'>We Make <br /> Everything <span className='font-light italic'>Possible.</span></h2>
    
     <div>
       
       <div className='border-t border-black py-[5vw] flex justify-between '>
        <h3 className='font-instrumentSans text-[20px] font-semibold'>WE MAKE <br /> EVERYTHING POSSIBLE.</h3>
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

export default SoftwearDevelopment;