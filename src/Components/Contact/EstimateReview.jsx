import srvc1 from '/service2.jpg'
import { AiFillStar } from "react-icons/ai";

function EstimateReview() {
  return (
    <div>
        <div className='ml-[4vw] bg-white w-[25vw] h-[75vh] pt-[2vw] px-[2vw] rounded-lg text-black flex flex-col justify-between'>
          <div>
              <h1 className='text-[1.8rem] leading-tight'>Lets Us know What's <br />
            your Thought about <br />
            project. </h1>
                  <div className='pl-[1vw]'>
                      <ul className='list-disc pt-[2vw] text-[18px]'>
                          <li>
                              Branding and Motion Design
                          </li>
                          <li>
                             Product Design
                          </li>
                          <li>
                             Time & Materials
                          </li>
                      </ul>
                  </div>
        <div className='bg-black w-[100%] text-white px-[2vw] mt-[2vw] py-[2vw] rounded-lg'>
        <h1 className='text-[24px] leading-tight'>I barely had to do anything</h1>
        <h2 className='py-3 text-[16px]'>We’re a creative digital agency, focusing on connecting customers with companies through ground-breaking digital marketing solutions.
        connecting customers with companies.</h2>
                  <div className='flex items-center justify-between gap-4 pt-2'>
       <div className='flex items-center gap-4'>
         <img src={srvc1} alt="ceo-founer" className='h-16 w-16 object-cover overflow-hidden rounded-full' />
        <span> Jeon Yin</span>
       </div>
       <div className='flex items-center gap-1'>
        <AiFillStar/>
        <AiFillStar/>
        <AiFillStar/>
        <AiFillStar/>
        <AiFillStar/>
       </div>
                  </div>
        </div>
           </div>



        </div>
    </div>
  )
}

export default EstimateReview;