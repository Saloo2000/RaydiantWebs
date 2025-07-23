import srvc2 from '/exp-bg2.jpg'
import expBg from '/exp-bg1.jpg'

function ExpertiseHero() {
  return (
    <div className='px-[32px]'>
        <div className='h-[75vh] flex flex-col justify-center font-instrumentSans antialiased'>
        <h2 className='text-[100px] font-instrumentSans uppercase font-bold leading-[5vw]'>Digital DNA</h2>
       <div className='flex gap-6 '>
        
        <h2 className='text-[100px] font-instrumentSans uppercase font-bold leading-[5vw] flex'>What We’re</h2></div>
        <h2 className='text-[100px] font-instrumentSans uppercase  font-bold leading-[5vw] flex items-center gap-3'>Made Of  <img src={srvc2} className='w-[160px] ml-4 rounded-lg h-[80px] object-cover mt-5' alt="" /> </h2>
        <img src={expBg} className='w-[500px] h-[600px] absolute object-cover object-center rounded-lg right-[10%] top-[15%]' alt="expertise-bg-cover" />
        <p className="text-[1.25vw] max-w-[380px] font-helvetica font-semibold leading-6 text-end absolute right-[12vw] top-[29vw] text-white mix-blend-ligh">
        Innovative IT solutions, scalable code, and user-first design — all powered by deep technical proficiency.
        </p>
        </div>
    </div>
  )
}
export default ExpertiseHero;