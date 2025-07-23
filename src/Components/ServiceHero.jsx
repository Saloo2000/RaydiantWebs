import React from 'react'
import srvc1 from '/service1.jpg'

function ServiceHero() {
  return (
    <div className='px-[32px]'>
        <div className='h-[75vh] flex flex-col justify-center font-instrumentSans antialiased'>
        <h1 className='text-[100px] font-instrumentSans uppercase font-bold leading-[5vw]'>Blending Visuals </h1>
       <div className='flex items-center gap-6 '> <img src={srvc1} className='w-[180px] rounded-lg h-[80px] object-cover ' alt="" /> <h2 className='text-[100px] font-instrumentSans uppercase font-bold leading-[5vw]'>with Advanced</h2></div>
        <h2 className='text-[100px] font-instrumentSans uppercase font-bold leading-[5vw]'>Technologies</h2>
          <p className="text-[1.25vw] max-w-[380px] font-helvetica font-semibold leading-6 text-end absolute right-[18vw] top-[14vw]">
          Our experts unite skills and passion to deliver innovative solutions that empower businesses and inspire growth.
        </p>
        </div>
    </div>
  )
}

export default ServiceHero;