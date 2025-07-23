import React from 'react'
import { GoArrowDownRight } from "react-icons/go";
import srvc1 from '/service1.jpg'
import { BiLogoGmail } from "react-icons/bi";
import { FaPhoneAlt } from "react-icons/fa";

function ContactReview() {
  return (
    <div>
        <div className='ml-[2vw] bg-white w-[25vw] h-[75vh] pt-[2vw] px-[2vw] rounded-lg text-black flex flex-col justify-between'>
          <div>
              <h1 className='text-[1.8rem] leading-tight'>Lets Us know What's <br />
            your Thought about <br />
            project. </h1>
            <h2 className='text-blue-500 pt-6 flex gap-3'><span className='pt-1'><GoArrowDownRight/></span>Why these steps are hell full for Us to get
            clear Path of our Journey,</h2>
            <h2 className='text-blue-500 pt-3 flex gap-3'><span className='pt-1'><GoArrowDownRight/></span>Get a sample estimation and cost calculation.</h2>
          </div>

          <div className='h-[35vh]'>
          <h2 className='text-[1.8rem] leading-tight mb-[1vw]'>You Can Also Contact <br /> 
          us Directly.</h2>

          <div className='flex items-center gap-8 pt-6'>
            <img src={srvc1} alt="ceo-founer" className='h-36 w-20 object-cover overflow-hidden rounded-full' />
           <div className='flex flex-col gap-4'>
          <div><h2 className='text-[18px] font-semibold'>Mohammad Asma</h2>
            <p className='text-zinc-600 text-[16px]'>CEO & Founder</p></div>

           <div>
            <p className='flex items-center gap-3 text-[16px]'> <BiLogoGmail size={20}/> MohmdAsma@Example.com</p>
            <p className='flex items-center gap-3 text-[16px]'><FaPhoneAlt/> +353 9890 0989</p>
           </div>
           </div>
          </div>

          </div>
        </div>
    </div>
  )
}

export default ContactReview