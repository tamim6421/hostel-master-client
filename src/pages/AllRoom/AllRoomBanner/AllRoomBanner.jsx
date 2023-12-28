
import './AllRoomBanner.css'
import { Link } from "react-router-dom";


const AllRoomBanner = () => {
    return (
      <div className="container h-[70vh]">
      <div className="overly">
        <div className="text-white">
        </div>
       
        
        <div>
          <div className="hero  ">
            <div className="flex h-[70vh] items-center justify-center">
           
            
              <div className="  md:px-5">
                <h1 className="text-3xl lg:text-6xl w-full font-bold font-rope pl-5 " data-aos="fade-down" >
                <span className='text-blue-500' data-aos="fade-down">Search your room </span> <span className='text-yellow-500'>by</span>
                <br />
                <span className='text-yellow-400' data-aos="fade-left">Area  </span></h1>
                 <h3 className='text-xl px-5 text-blue-500 font-semibold lg:mt-3 lg:text-4xl animate__animated animate__fadeInUp ' data-aos="fade-up">
                LUXURY EXPERIENCE<br />
                We have everything you need
                 </h3>
              <div className='ml-5'>

               

                </div>                      
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default AllRoomBanner;