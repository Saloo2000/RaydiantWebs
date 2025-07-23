import React from 'react'
import video8 from '/video-8.mp4'; // Adjust the path as needed

function SoftwearHero() {
  return (
    <div>
               <div className='px-[32px]'>
           <div className='h-[65vh] flex flex-col justify-center items-start font-instrumentSans antialiased'>
           <p className="text-[1.25vw] max-w-[380px] font-helvetica leading-6 text-end">Empowering Innovation</p>
           <h2 className='text-[100px] font-instrumentSans uppercase font-bold leading-[5vw]'>with Tailored Software</h2>
           <h2 className='text-[100px] font-instrumentSans uppercase font-bold leading-[5vw]'>Solutions</h2>
           </div>
       </div>
   
             <div className="relative w-full my-28 overflow-hidden">
               <video 
                 src={video8}
                 muted 
                 loop 
                 autoPlay 
                 className="w-full h-[100vh] z-20 object-cover object-center"
               ></video>
               </div>
       </div>
  )
}

export default SoftwearHero