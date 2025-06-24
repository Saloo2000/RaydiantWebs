import React from 'react'
import Logo from './Logo'
import Navbar from './Navbar'
import Contact from './Contact'

function Header() {
  return (
    <div>
        <header className='px-[32px] py-7 flex justify-between items-center '>
          <Logo/>
          <Navbar/>
          <Contact/>
        </header>
    </div>
  )
}

export default Header