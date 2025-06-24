import React from 'react'
import { AiOutlineUp } from "react-icons/ai";

function Footer() {
    return (
     <>
      <hr className='h-[2px] bg-black mt-6'/>
    <div className='px-[32px] flex justify-between items-center bg-white text-black uppercase'>

    <div className='flex flex-col  w-[40%] py-10 gap-2'>
         <h2 className='font-helvetica font-bold text-[5vw] leading-[4.4vw]'>RAYDIANT <br /> WEB.</h2>
         <span className='flex items-center gap-4 font-medium text-[18px] my-6'>GOTO TO UP <AiOutlineUp/></span>
    </div>

    <div className='w-[60%] flex items-start flex-wrap gap-4'>
        
        <div className='text-[18px] border-r-black border-r-[1px] pr-6 w-[30%]'>
            <div className='relative group w-fit py-1'><a className='py-2' href="#">RaydiantWebs/Services&reg;</a><span class="absolute left-0 -bottom-1 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span></div>
            <div className='relative group w-fit py-1'><a className='py-2' href="#">RaydiantWebs/Instagram&reg;</a><span class="absolute left-0 -bottom-1 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span></div>
            <div className='relative group w-fit py-1'><a className='py-2' href="#">RaydiantWebs/DogStudios&reg;</a><span class="absolute left-0 -bottom-1 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span></div>
            <div className='relative group w-fit py-1'><a className='py-2' href="#">RaydiantWebs/Youtube&reg;</a><span class="absolute left-0 -bottom-1 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span></div>
        </div>

            <div className='text-[18px]  pr-6 self-start w-[25%]'>
            <div className='relative group w-fit py-1'><a className='py-2' href="#">Work</a><span class="absolute left-0 -bottom-1 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span></div>
            <div className='relative group w-fit py-1'><a className='py-2' href="#">About</a><span class="absolute left-0 -bottom-1 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span></div>
            <div className='relative group w-fit py-1'><a className='py-2' href="#">Careers</a><span class="absolute left-0 -bottom-1 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span></div>
            </div>

              <div className='text-[18px] pr-6 self-end flex flex-col gap-4 border-l-black border-l-[1px] pl-6 '>
            <div className='relative group w-full py-1 border-b-black border-b-[1px]'><a className='py-2' href="#">Subscribe to newsletter</a><span class="absolute left-0 -bottom-1 h-[2px] w-0 bg-black "></span></div>
            <div className='relative group w-full py-1  border-b-black border-b-[1px]'><a className='py-2' href="#">New Era Of Tech</a><span class="absolute left-0 -bottom-1 h-[2px] w-0 bg-black "></span></div>
            <div className='relative group w-full py-1  border-b-black border-b-[1px]'><a className='py-2' href="#">get in touch with us</a><span class="absolute left-0 -bottom-1 h-[2px] w-0 bg-black "></span></div>
            <div className='relative group w-full py-1'><a className='py-2' href="#">instagram facebook x/twitter</a><span class="absolute left-0 -bottom-1 h-[2px] w-0 bg-black "></span></div>
            </div>

    </div>

    </div>

    <div className='flex justify-between items-center py-6 px-[32px] bg-red-700'>
        <p className='text-[18px] text-white underline'>Legal Notice</p>
        <p className='text-[18px] text-white underline'>Raydiant WebsⓇ</p>
    </div>
     </>
  )
}

export default Footer;