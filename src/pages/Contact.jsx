import React from 'react'
import ContactContent from '../Components/Contact/ContactContent'
import ContactReview from '../Components/Contact/ContactReview'

function Contact() {
  return (
    <div className='bg-black text-white h-[100vh] flex items-center gap-10'>
      <ContactContent/>
      <div className='h-[80vh] w-[1px] bg-white'></div>
      <ContactReview/>
    </div>
  )
}

export default Contact