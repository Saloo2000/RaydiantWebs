import React from 'react'
import { GoArrowRight, GoX } from "react-icons/go";

function ContactContent() {
  return (
    <div className='w-[60%] px-[80px]'>

        <div>
        <a href="/RaydiantWebs">
            <GoX className='text-white absolute right-[5%] top-[5%] text-[2vw]'/>
        </a>
        </div>

        <h1 className='text-[3.8rem] pt-[1vw]'>
            Let’s take on the challenge together.
            Start your journey with an estimate!
        </h1>
        <h2 className='text-[1.25vw] pt-[6vw] max-w-[600px] font-helvetica'>
            In just three simple steps, we’ll uncover the key details
            of our shared journey.
        </h2>
        <div>
            <ul className='list-disc pt-[6vw] text-[18px]'>
                <li>
                    Determining the skills of specialists
                </li>
                <li>
                    Details about the project
                </li>
            </ul>
           <a href="/RaydiantWebs/contact/estimation">
             <div className='bg-white text-black text-[18px] font-helvetica px-6 py-3 rounded-lg mt-[3vw] w-fit flex items-center gap-8'>Start Estimation <GoArrowRight/></div>
           </a>
        </div>
    </div>
  )
}

export default ContactContent;