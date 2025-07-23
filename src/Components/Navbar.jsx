import React from 'react'

function Navbar() {
  return (
    <div className='text-[20px] flex gap-6 '>
      <div className='relative group'><a className='py-2' href="/RaydiantWebs/work">Work</a><span class="absolute left-0 -bottom-1 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span></div>
      <div className='relative group'><a className='py-2' href="/RaydiantWebs/services">Services</a><span class="absolute left-0 -bottom-1 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span></div>
      <div className='relative group'><a className='py-2' href="/RaydiantWebs/experties">Expertise</a><span class="absolute left-0 -bottom-1 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span></div>
      <div className='relative group'><a className='py-2' href="#">Stories</a><span class="absolute left-0 -bottom-1 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span></div>
      <div className='relative group'><a className='py-2' href="#">Careers</a><span class="absolute left-0 -bottom-1 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span></div>
    </div>
  )
}

export default Navbar;