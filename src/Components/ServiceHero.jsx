import React from 'react'
import srvc1 from '/service1.jpg'

function ServiceHero() {
  return (
    <div className='px-[32px]'>
        <div className='h-[80vh] flex flex-col justify-center font-instrumentSans antialiased'>
        <h2 className='text-[100px] font-instrumentSans uppercase font-bold leading-[5vw]'>Blending Visuals </h2>
       <div className='flex items-center gap-6'> <img src={srvc1} className='w-[180px] rounded-lg h-[80px] object-cover ' alt="" /> <h2 className='text-[100px] font-instrumentSans uppercase font-bold leading-[5vw]'>with Advanced</h2></div>
        <h2 className='text-[100px] font-instrumentSans uppercase font-bold leading-[5vw]'>Technologies</h2>
        </div>
    </div>
  )
}

export default ServiceHero