import React from 'react'
import EstimateFrom from '../Components/Contact/EstimateFrom'
import EstimateReview from '../Components/Contact/EstimateReview'
import { GoX } from 'react-icons/go'


function Estimate() {
  return (
    <div className='bg-black text-white h-[100vh] flex items-center'>
                <div>
                <a href="/RaydiantWebs">
                    <GoX className='text-white absolute right-[5%] top-[5%] text-[2vw]'/>
                </a>
                </div>
    
    <EstimateFrom/>
          <div className='h-[80vh] w-[1px] bg-white'></div>
    <EstimateReview/>

    </div>
  )
}

export default Estimate