import React from 'react'
import WorkHistory from './WorkHistory';
import { SlArrowDown } from "react-icons/sl";

function WorkExperience() {
  return (
          <div>
        <h2 className='px-[32px] text-[150px] font-gallient font-light leading-[7vw] pb-[4vw]'>Work</h2>
    
    <div className='px-[32px]'>
    <div className='border-t border-black py-[5vw] flex justify-between'>
    <WorkHistory/>
    </div>
      <div className='w-fit mx-auto mb-[4vw] '>
      <button className='text-[24px] font-medium font-helvetica border-black border-[1px] rounded-lg px-6 py-4 mb-[19px]'>See All Works!</button>
      <SlArrowDown size={28} className='mx-auto'/>
    </div>
    </div>
        
    </div>
  )
}

export default WorkExperience;