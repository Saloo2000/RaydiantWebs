import React from 'react'
import v1 from "/video-5.mp4";
function ServiceVideo() {
  return (
    <div className='relative w-full h-[113vh] overflow-hidden py-[6vw]'>
        <div className='w-full h-full bg-black absolute z-20 opacity-[.5]' ></div>
       <div className='absolute top-1/2 left-1/2 z-30 text-center text-white -translate-x-1/2 -translate-y-1/2'>
         <h2 className='text-[150px] font-nova leading-[7vw] mb-[2vw]'>Have <br /> an Idea?</h2>
        <a href="#" className='font-nova hover:border-none text-[100px] border-[1px] rounded-full py-8 px-[8vw] mt-4  hover:bg-black border-white'>Tell Us</a>
       </div>
        <video
        src={v1}
        muted 
        loop 
        autoPlay 
        className="w-full h-[113vh] z-20 object-cover object-center"
        ></video>
    </div>
  )
}

export default ServiceVideo;