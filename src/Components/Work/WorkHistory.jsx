import vid1 from "/video-3.mp4";
import vid2 from "/video-4.mp4";
import vid3 from "/video-5.mp4";
import vid4 from "/video-6.mp4";
import vid5 from "/video-7.mp4";
import vid6 from "/video-8.mp4";

function WorkHistory() {
  return (
    <div className="mb-[5vw]">
        <h2 className='text-[24px] font-medium font-helvetica tracking-[32px] italic'>Featured</h2> 
    <div className='flex py-[5vw]'>
    <div className='w-[50%] relative'>
        <video src={vid1} className="h-[100%] object-cover object-center" autoPlay loop muted></video>
        <a href="#">
        <h2 className="text-red-600 font-bold text-[1.8vw] py-2 uppercase pl-8">SmartBuild Portal</h2>
        <h3 className="font-semibold text-[1.2vw] pl-8 text-zinc-500">Construction inspection made digital.</h3>
        </a>
    </div>
    
    <div className='w-[50%] relative'>
        <video src={vid2} className="h-[100%] object-cover object-center" autoPlay loop muted></video>
        <a href="#">
        <h2 className="text-red-600 font-bold text-[1.8vw] py-2 uppercase pl-8">TrackFleet 360</h2>
        <h3 className="font-semibold text-[1.2vw] pl-8 text-zinc-500">Live fleet tracking and analytics.</h3>
        </a>
    </div>
    </div>

      <div className='flex py-[5vw]'>
    <div className='w-[50%] relative'>
        <video src={vid3} className="h-[100%] object-cover object-center" autoPlay loop muted></video>
        <a href="#">
        <h2 className="text-red-600 font-bold text-[1.8vw] py-2 uppercase pl-8">ShopNest E-Commerce</h2>
        <h3 className="font-semibold text-[1.2vw] pl-8 text-zinc-500">Custom online store experience.</h3>
        </a>
    </div>
    
    <div className='w-[50%] relative'>
        <video src={vid4} className="h-[100%] object-cover object-center" autoPlay loop muted></video>
        <a href="#">
        <h2 className="text-red-600 font-bold text-[1.8vw] py-2 uppercase pl-8">HealthSync CRM</h2>
        <h3 className="font-semibold text-[1.2vw] pl-8 text-zinc-500">Patient and clinic management made easy.</h3>
        </a>
    </div>
    </div>

          <div className='flex py-[5vw]'>
    <div className='w-[50%] relative'>
        <video src={vid5} className="h-[100%] object-cover object-center" autoPlay loop muted></video>
        <a href="#">
        <h2 className="text-red-600 font-bold text-[1.8vw] py-2 uppercase pl-8">RaySecure Cloud</h2>
        <h3 className="font-semibold text-[1.2vw] pl-8 text-zinc-500">Secure cloud backup and recovery.</h3>
        </a>
    </div>
    
    <div className='w-[50%] relative'>
        <video src={vid6} className="h-[100%] object-cover object-center" autoPlay loop muted></video>
        <a href="#">
        <h2 className="text-red-600 font-bold text-[1.8vw] py-2 uppercase pl-8">Eventia Booking Suite</h2>
        <h3 className="font-semibold text-[1.2vw] pl-8 text-zinc-500">Easy event planning and ticketing.</h3>
        </a>
    </div>
    </div>

    </div>
  )
}

export default WorkHistory