import React from 'react'
import { AiOutlineCheck } from "react-icons/ai";
function DigitalCard({title,price,description}) {
  return (
<div className='flex justify-center items-center gap-[2vw] mt-[3vw]'>

          <div className={`${title === "Growth" ? "bg-white" : "bg-[#f2f2f2]"} text-black w-[20vw] rounded-[1.2vw] px-[2vw] pt-[2vw] pb-[1.5vw]`}>
          <h3 className='text-[24px] font-bold'>{title}</h3>
          <p className='text-[16px] pb-[.8vw] border-b-black border-b-[1px]  text-zinc-700'>{description}</p>
          <p className='text-[40px] font-bold py-[.8vw]'>${price}<span className='text-zinc-700 ml-2 text-[14px] font-normal'>annual term</span></p>

          <div className='text-[14px] py-2'>
          <div className='flex items-start gap-2 font-bold pb-2'>
            <p className='w-3 h-3 bg-green-300 rounded-[2px] rotate-45 mt-1'></p> 
            <p>Requirements Analysis</p>
          </div>
          <div className='flex w-[280px] items-start gap-2 py-[2px]'><p className='bg-zinc-200 rounded-full mt-1 p-[2px] text-[10px] text-zinc-500'><AiOutlineCheck/></p><p>Define target audience.</p></div>
          <div className='flex w-[280px] items-start gap-2 py-[2px]'><p className='bg-zinc-200 rounded-full mt-1 p-[2px] text-[10px] text-zinc-500'><AiOutlineCheck/></p><p>Basic competitor analysis.</p></div>  
          <div className='flex w-[280px] items-start gap-2 py-[2px]'><p className='bg-zinc-200 rounded-full mt-1 p-[2px] text-[10px] text-zinc-500'><AiOutlineCheck/></p><p>List app goals and essential.</p></div>  
        </div>

          <div className='text-[14px] py-2'>
          <div className='flex items-start gap-2 font-bold pb-2'>
            <p className='w-3 h-3 bg-red-300 rounded-[2px] rotate-45 mt-1'></p> 
            <p> UI/UX Design</p>
          </div>
          <div className='flex w-[280px] items-start gap-2 py-[2px]'><p className='bg-zinc-200 rounded-full mt-1 p-[2px] text-[10px] text-zinc-500'><AiOutlineCheck/></p><p>Wireframes for core screens.</p></div>
          <div className='flex w-[280px] items-start gap-2 py-[2px]'><p className='bg-zinc-200 rounded-full mt-1 p-[2px] text-[10px] text-zinc-500'><AiOutlineCheck/></p><p>Basic style guide (colors, fonts, icons).</p></div>  
        </div>

        <div className='text-[14px] py-2'>
          <div className='flex items-start gap-2 font-bold pb-2'>
            <p className='w-3 h-3 bg-blue-300 rounded-[2px] rotate-45 mt-1'></p> 
            <p>Development</p>
          </div>
          <div className='flex w-[280px] items-start gap-2 py-[2px]'><p className='bg-zinc-200 rounded-full mt-1 p-[2px] text-[10px] text-zinc-500'><AiOutlineCheck/></p><p>Use React Native or Flutter.</p></div>
          <div className='flex w-[280px] items-start gap-2 py-[2px]'><p className='bg-zinc-200 rounded-full mt-1 p-[2px] text-[10px] text-zinc-500'><AiOutlineCheck/></p><p>Core features like login.</p></div>  
          <div className='flex w-[280px] items-start gap-2 py-[2px]'><p className='bg-zinc-200 rounded-full mt-1 p-[2px] text-[10px] text-zinc-500'><AiOutlineCheck/></p><p>Simple API integration for data fetching.</p></div>  
        </div>

        <div className='text-[14px] py-2'>
          <div className='flex items-start gap-2 font-bold pb-2'>
            <p className='w-3 h-3 bg-yellow-300 rounded-[2px] rotate-45 mt-1'></p> 
            <p>Quality Assurance</p>
          </div>
          <div className='flex w-[280px] items-start gap-2 py-[2px]'><p className='bg-zinc-200 rounded-full mt-1 p-[2px] text-[10px] text-zinc-500'><AiOutlineCheck/></p><p>Test on 3–5 device models.</p></div>
          <div className='flex w-[280px] items-start gap-2 py-[2px]'><p className='bg-zinc-200 rounded-full mt-1 p-[2px] text-[10px] text-zinc-500'><AiOutlineCheck/></p><p>Fix basic UI/UX bugs.</p></div> 
        </div>

        <div className='mt-3'>
            <input  className='w-full border-[1px] border-zinc-700 text-black rounded-[15px] py-4 px-8 text-[14px] my-[.4vw]' type="Email" name="email" id="1" placeholder='Enter Your Compnay Email Here!' />
            <button className='w-full bg-[#161616] text-white rounded-[15px] py-4'>Book Demo</button>
        </div>

        </div>

        

        </div>
  )
}

export default DigitalCard;