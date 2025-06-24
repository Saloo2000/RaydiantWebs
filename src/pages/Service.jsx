import React from 'react'
import ServiceHero from '../Components/ServiceHero';
import Services from '../Components/Services';
import TeamInfo from '../Components/TeamInfo';
import ServiceVideo from '../Components/ServiceVideo';

function Service() {
  return (
    <div>
      <ServiceHero/>
   <div className='bg-[#161616]'>
       <Services/>
      <TeamInfo/>
      <ServiceVideo/>
   </div>
    </div>
  )
}

export default Service;