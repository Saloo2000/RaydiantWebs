import React from 'react'
import '.././index.css'

import prd1 from "/prd-1.jpg"
import prd2 from "/prd-2.jpg"
import prd3 from "/prd-3.jpg"
import prd4 from "/prd-4.jpg"
import prd5 from "/prd-5.jpg"
function WorkSpace() {
  return (
    <div className='py-16 flex flex-col items-center justify-center px-[32px] font-instrumentSans antialiased'>

    <div>
    <h2 className='font-gallient text-center text-[75px] leading-[4.5vw]'>We are a design and technology company <br /> helping brands unlock their full potential.</h2>    
    <div className='text-center my-10'>
    <a href="#" className='uppercase bg-black text-[18px] w-fit text-white px-10 py-3 rounded-full'>View All Work</a>
    </div>
    </div>

    <div className='mt-[6vw]'>
    <hr />

    <div className='mt-6 text-[12px] uppercase'>
      <span className='mr-11'>RECENT WORKS</span>
      <button className=' bg-zinc-300 hover:bg-black rounded-full hover:text-white py-2 px-4 mx-2'>ALL</button>
      <button className=' bg-zinc-300 hover:bg-black rounded-full hover:text-white py-2 px-4 mx-2'>ECOMMERCE</button>
      <button className=' bg-zinc-300 hover:bg-black rounded-full hover:text-white py-2 px-4 mx-2'>MARKETTING</button>
      <button className=' bg-zinc-300 hover:bg-black rounded-full hover:text-white py-2 px-4 mx-2'>BRANDS</button>
    </div>

    <div className='my-14 flex justify-between items-center gap-6 flex-wrap md:flex-nowrap'>

    <div >
     <div className='w-[18.23vw] h-[18.23vw] overflow-hidden rounded-lg bg-red-700'><img src={prd1} className='object-cover object-center w-full h-full' alt="" srcset="" /></div>
     <p className='text-[20px] font-semibold py-3 mt-3'>TechFlow Innovations</p>
     <p className='text-[12px] text-zinc-500'>#Ecommerce</p>
    </div>

        <div >
     <div className='w-[18.23vw] h-[18.23vw] overflow-hidden rounded-lg bg-red-700'><img src={prd2} className='object-cover object-center w-full h-full' alt="" srcset="" /></div>
     <p className='text-[20px] font-semibold py-3 mt-3'>Codex Creatives</p>
     <p className='text-[12px] text-zinc-500'>#Marketing</p>
    </div>

        <div >
     <div className='w-[18.23vw] h-[18.23vw] overflow-hidden rounded-lg bg-red-700'><img src={prd3} className='object-cover object-center w-full h-full' alt="" srcset="" /></div>
     <p className='text-[20px] font-semibold py-3 mt-3'> RadiantWebs HQ</p>
     <p className='text-[12px] text-zinc-500'>#Development</p>
    </div>

        <div >
     <div className='w-[18.23vw] h-[18.23vw] overflow-hidden rounded-lg bg-red-700'><img src={prd4} className='object-cover object-center w-full h-full' alt="" srcset="" /></div>
     <p className='text-[20px] font-semibold py-3 mt-3'>PixelMatrix Studios</p>
     <p className='text-[12px] text-zinc-500'>#CMS Webs</p>
    </div>

    <div >
     <div className='w-[18.23vw] h-[18.23vw] overflow-hidden rounded-lg bg-red-700'><img src={prd5} className='object-cover object-center w-full h-full' alt="" srcset="" /></div>
     <p className='text-[20px] font-semibold py-3 mt-3'>CodeCraft Digital</p>
     <p className='text-[12px] text-zinc-500'>#Brand</p>
    </div>

    </div>

    </div>

    </div>
  )
}

export default WorkSpace