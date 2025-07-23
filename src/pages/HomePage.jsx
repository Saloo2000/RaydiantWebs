import React from 'react'
import HeroText from '../Components/HeroText';
import Stragetic from '../Components/Stragetic';
import WorkSpace from '../Components/WorkSpace';

function HomePage() {
  return (
        <div className="px-[32px] font-instrumentSans antialiased">
          <HeroText />
          <Stragetic />
          <WorkSpace />
        </div>
    
  )
}

export default HomePage;