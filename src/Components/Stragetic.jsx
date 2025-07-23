import React from 'react'
import img1 from "/stragetic-bg.png"
function Stragetic() {
  return (
<div className='pt-10'>
      <hr className='h-[1.5px] bg-black'/>
    <div className='flex justify-between items-center py-10'>
    <div className='w-[50%] overflow-hidden'>
        <img src={img1} className='object-cover object-center rounded-lg' alt="" srcset="" />
    </div>
    <div className='w-[50%] font-medium px-40 font-helvetica'>
   <h2 className='text-[6vw] leading-[6vw] font-gallient'>Stragetic Visionaries</h2>
    <h3 className='text-[24px] py-8'>Raydiant WebsⓇ Crafting strategies to align with your vision, blending innovation and insight to unlock opportunities for lasting success.</h3>
    <h3 className='text-[24px] '>Delivering visionary solutions that drive growth, blending creativity and strategy for meaningful impact.</h3>

  <div className='w-fit mt-20 bg-black text-[18px] text-white px-10 py-3 rounded-full'>
    <a href="#" className='uppercase'>Find out More</a>
    </div>

    </div>
    </div>
</div>
  )
}

export default Stragetic;