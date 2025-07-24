import React from 'react'
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <div className='bg-black text-[18px] text-white px-10 py-3 rounded-full'>
        <Link to="/contact">Contact</Link>
   </div>
  )
}

export default Contact;