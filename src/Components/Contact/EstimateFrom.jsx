import React from 'react'
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";

function EstimateFrom() {
  return (
    <div className='w-[65%] flex justify-center items-center pl-[6vw] pr-[4vw]'>
      <form action="POST" className='bg-[#242424] py-[3vw] px-[3vw] rounded-lg h-[80vh] w-[100%] items-start flex gap-6 text-[14px] flex-wrap justify-between'>
      
      <div className='w-[45%] flex flex-col gap-4'>
      <label>Full Name</label>
      <input className='bg-transparent border-b-[1px] border-[#707070] pb-3' type="name" name="name" id="name" placeholder='Enter Name'/>
      </div>
      
      <div className='w-[45%] flex flex-col gap-4'>
      <label>Email</label>
      <input className='bg-transparent border-b-[1px] border-[#707070] pb-3' type="email" name="email" id="email" placeholder='Enter Email'/>
      </div>

      <div className='w-[45%] flex flex-col gap-4'>
      <label>Phone</label>
      <input className='bg-transparent border-b-[1px] border-[#707070] pb-3' type="number" name="number" id="number" placeholder='Enter Phone'/>
      </div>

      <div className='w-[45%] flex flex-col gap-4'>
      <label>Type</label>
      <input className='bg-transparent border-b-[1px] border-[#707070] pb-3' type="text" name="type" id="type" placeholder='Enter Service Type'/>
      </div>

      <div className='w-[45%] flex flex-col gap-4'>
      <label>Services</label>
      <select className='bg-transparent border-b-[1px] border-[#707070] pb-3' name="services" id="">
      <option className='bg-black px-3 py-3 rounded-lg' value="app-development">App Development</option>
      <option className='bg-black px-3 py-3 rounded-lg' value="app-development">Coreporate Brandind</option>
      <option className='bg-black px-3 py-3 rounded-lg' value="app-development">Web & CMS Development</option>
      <option className='bg-black px-3 py-3 rounded-lg' value="app-development">Digital Marketing</option>
      <option className='bg-black px-3 py-3 rounded-lg' value="app-development">Softwear Development</option>
      </select>
      </div>

      <div className='w-[45%] flex flex-col gap-4'>
      <label>Budget</label>
      <input className='bg-transparent border-b-[1px] border-[#707070] pb-3' type="text" name="budget" id="budget" placeholder='Enter Your Budget'/>
      </div>

      <div className='w-[100%] flex flex-col gap-4'>
      <label>Project Detail</label>
       <textarea className='bg-transparent border-b-[1px] border-[#707070] pb-3 h-[150px]' name="project-detail" id="p-d" ></textarea>
      </div>

      <div className='w-[100%] flex gap-4'>
      <input type="checkbox"/> <p>Accept <span className='text-blue-500'>Terms</span> & <span className='text-blue-500'>Policy</span></p>
      </div>
      
     <div className='flex gap-3 items-center'>
       <a className='bg-black text-[16px] flex gap-6 items-center py-4 px-8 rounded-lg' href="/RaydiantWebs/contact"><GoArrowLeft size={25}/> Back</a>
       <button className='bg-white text-black text-[16px] flex gap-6 items-center py-4 px-8 rounded-lg' type="submit">Send Message <GoArrowRight size={25}/> </button>
     </div>

      </form>
    </div>
  )
}

export default EstimateFrom;