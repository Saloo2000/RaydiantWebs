import React from 'react'
import exprtbg from '/video-15.mp4' // Assuming this is the correct path to your video file
import exprtbg2 from '/video-18.mp4' // Assuming this is the correct path to your video file
import exprtbg3 from '/video-12.mp4' // Assuming this is the correct path to your video file
import exprtbg4 from '/exp3.jpg' // Assuming this is the correct path to your video file
import ExpertiseServiceTwo from './ExpertiseServiceTwo'

function ExpertiseService() {
  return (
    <div>
         <div className='pl-[12vw] p-[5vw] flex'>
       
       <div className='w-4/6'>
         <h2 className='text-[150px] font-gallient font-light leading-[7vw]'>We Push <br /> The <span className='font-light italic'>Limits.</span></h2>
        <p className='w-[70%]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, animi at voluptate nobis corporis voluptatibus amet esse rem labore voluptates! Dolores maxime error doloremque neque ipsa? Cumque rem odio in, quibusdam sint nihil, tenetur velit accusamus vero laborum, non illo.</p>
       </div>

        <div className='pr-[32px] py-[5vw] w-2/6 relative -mb-[6vw]'>
          <video src={exprtbg} alt="" srcset="" loop muted autoPlay className='rounded-lg'></video>
          <h2 className='text-[18px] font-semibold pt-4 pb-1'>Designing Data Centers</h2>
          <h3 className='text-[18px]'>Experienced Hands on Development</h3>
          <a href="#" className='text-[18px] text-zinc-600'>MAIN TITLE</a>
        </div>       
        </div>

    <div className='flex flex-col px-[32px] pb-[8vw]'>
      
          <div className='pr-[32px] w-4/6 relative '>
          <video src={exprtbg2} alt="" srcset="" loop muted autoPlay className='rounded-lg'></video>
          <h2 className='text-[18px] font-semibold pt-4 pb-1'>Microsoft Windows Server</h2>
          <h3 className='text-[18px]'>Experienced Hands on Development</h3>
          <a href="#" className='text-[18px] text-zinc-600'>MAIN TITLE</a>
          </div>

          <div className='mr-[32px] w-[25%] h-[70vh] self-end relative overflow-hidden rounded-lg'>
          <video src={exprtbg3} alt="" srcset="" loop muted autoPlay className='h-[80%] w-[100%] object-cover object-center rounded-lg'></video>
          <h2 className='text-[18px] font-semibold pt-4 pb-1'>Disaster Recovery</h2>
          <h3 className='text-[18px]'>Experienced Hands on Development</h3>
          <a href="#" className='text-[18px] text-zinc-600'>MAIN TITLE</a>
          </div>

          <div className='mr-[32px] w-3/6 h-[70vh] -mt-[12vw] relative'>
          <img src={exprtbg4} alt="" srcset="" loop muted autoPlay className='w-[100%] object-cover object-center rounded-lg'/>
          <h2 className='text-[18px] font-semibold pt-4 pb-1'>FortiGate</h2>
          <h3 className='text-[18px]'>Experienced Hands on Development</h3>
          <a href="#" className='text-[18px] text-zinc-600'>MAIN TITLE</a>
          </div>

      <div>
        
      </div>
      
    </div>
    <ExpertiseServiceTwo/>
    </div>
  )
}

export default ExpertiseService;