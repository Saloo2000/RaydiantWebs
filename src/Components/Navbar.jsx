import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='text-[20px] flex gap-6 '>
      <div className='relative group'><Link className='py-2' to="/work">Work</Link><span class="absolute left-0 -bottom-1 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span></div>
      <div className='relative group'><Link className='py-2' to="/services">Services</Link><span class="absolute left-0 -bottom-1 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span></div>
      <div className='relative group'><Link className='py-2' to="/experties">Expertise</Link><span class="absolute left-0 -bottom-1 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span></div>
      <div className='relative group'><Link className='py-2' to="#">Stories</Link><span class="absolute left-0 -bottom-1 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span></div>
      <div className='relative group'><Link className='py-2' to="#">Careers</Link><span class="absolute left-0 -bottom-1 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span></div>
    </div>
  )
}

export default Navbar;