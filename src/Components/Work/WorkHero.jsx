import React from 'react'
import srvc1 from '/exp5.jpg'
function WorkHero() {
  return (
    <div className='px-[32px]'>
        <div className='h-[75vh] flex flex-col justify-center font-instrumentSans antialiased'>
        <h1 className='text-[100px] font-instrumentSans uppercase font-bold leading-[5vw]'>Crafting Digital</h1>
       <div className='flex items-center gap-6 '><h2 className='text-[100px] font-instrumentSans uppercase font-bold leading-[5vw] flex items-center gap-5'>Brilliance <img src={srvc1} className='w-[180px] rounded-lg h-[80px] object-cover object-center ' alt="" /> Our</h2></div>
        <h2 className='text-[100px] font-instrumentSans uppercase font-bold leading-[5vw]'>Work Speaks</h2>
          <p className="text-[1.25vw] max-w-[380px] font-helvetica font-semibold leading-6 text-end absolute right-[18vw] top-[14vw]">
        We fuse deep expertise with creative drive to build smart digital solutions that accelerate business potential and spark lasting growth.
        </p>
        </div>
    </div>
  )
}

export default WorkHero