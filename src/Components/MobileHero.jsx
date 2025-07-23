import React from 'react'
import video6 from '/video-6.mp4';

function MobileHero() {
  return (
    <div>
            <div className='px-[32px]'>
        <div className='h-[65vh] flex flex-col justify-center items-start font-instrumentSans antialiased'>
        <p className="text-[1.25vw] max-w-[380px] font-helvetica leading-6 text-end">Prime Expertise</p>
        <h2 className='text-[100px] font-instrumentSans uppercase font-bold leading-[5vw]'>Propel Your Brand </h2>
        <h2 className='text-[100px] font-instrumentSans uppercase font-bold leading-[5vw]'>through Novel Approaches</h2>
        </div>
    </div>

          <div className="relative w-full my-28 overflow-hidden">
            <video 
              src={video6}
              muted 
              loop 
              autoPlay 
              className="w-full h-[100vh] z-20 object-cover object-center"
            ></video>
            </div>
    </div>
  )
}

export default MobileHero;