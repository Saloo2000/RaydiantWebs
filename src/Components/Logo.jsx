import React from 'react'
import { Link } from 'react-router-dom'

function Logo() {
  return (
          <Link to="/">
              <div>
            <h2 className='font-helvetica font-bold text-[1.4vw]'>RAYDIANT WEB</h2>
            <p className='font-montserrat font-semibold text-[.4vw] -mt-1'>Lighting Up the Digital Horizon</p>
            </div>
          </Link>
  )
}

export default Logo