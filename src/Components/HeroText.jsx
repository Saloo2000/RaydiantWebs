import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { set } from 'react-hook-form';
import video1 from "/video-4.mp4" 

gsap.registerPlugin(SplitText);

function HeroText() {
    const [value, setValue] = useState(false);
      const textRef = useRef(null);

  useEffect(() => {
    // Split text into characters
    const split = new SplitText(textRef.current, { type: "chars" });
    const chars = split.chars; // Array of character elements

    // Animation
    gsap.fromTo(
      chars,
      { opacity: 0, y: 50 }, 
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.05,
        ease: "power4.out",
        onComplete: () => {
          // Cleanup if needed
          split.revert();
        },
      }
    );
  }, []);

    function handleValue() {
        setValue(true);
    }

    function removeValue() {
        setValue(false);
    }

     const preventContextMenu = (e) => e.preventDefault();

  return (
    <>
      <div className="flex items-center min-h-[70vh] relative w-full">
        <h1 className="text-[5.21vw] uppercase font-bold leading-[5vw]" useRef={textRef}>
          An independent hub of <br /> creative innovation for the intelligent era.
        </h1>
        <p className="text-[1.25vw] max-w-[280px] font-helvetica font-semibold leading-6 absolute right-1/4 bottom-10">
          We blend design and technology to craft meaningful experiences for people and brands.
        </p>
      </div>

      <div className="relative w-full h-[40vw] my-28">
        <video 
          contextMenu={preventContextMenu}
          src={video1}
          muted 
          loop 
          autoPlay 
          className="w-full h-full z-20 object-cover object-center rounded-lg"
        ></video>
        
        <div onMouseEnter={handleValue} onMouseLeave={removeValue} className='flex text-[18px] justify-between items-center pt-8 antialiased cursor-cell'>

        <div className='relative group font-helvetica '>
        <a href="#" className='font-semibold'>Breaking Boundaries of Innovation Limits</a>
        <span class={`absolute left-0 -bottom-1 h-[2px] w-0 bg-black transition-all duration-500 ${value && "w-full"}`}></span>
        </div>

         <p className='text-start self-start'>Advancing trust with innovation, precision, and excellence.</p>
            <p className='font-semibold self-end'> 1 / 4 </p>
        </div>

      </div>
    </>
  );
}

export default HeroText;
