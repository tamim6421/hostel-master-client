
import { IoLocation } from "react-icons/io5";
import { FaBed } from "react-icons/fa6";
import { MdBrunchDining } from "react-icons/md";
import { FaLeaf } from "react-icons/fa";
import { FaCentos } from "react-icons/fa6";
import { GiCyborgFace } from "react-icons/gi";


const Features = () => {
  return (
    <div className="my-36">
      <h1 className="text-center text-3xl text-blue-400 font-bold mb-10">Features that will make you comfortable </h1>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-3">

        <div className="card  bg-base-100 shadow-xl">
          <figure className="px-10  pt-10 box">
            <p className="bg-blue-100 p-3 rounded-full">
            <IoLocation className="text-6xl text-blue-500" />
            </p>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-gray-500 font-bold">Beachfront Location</h2>
            <p className="text-gray-500">Our hotel is situated right on the beach, offering stunning ocean views and immediate access to the sandy shores.</p>
          </div>
        </div>


        <div className="card  bg-base-100 shadow-xl">
          <figure className="px-10  pt-10 box">
            <p className="bg-blue-100 p-3 rounded-full">
            <FaBed  className="text-6xl text-blue-500" />
            </p>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-gray-500 font-bold">Luxury Accommodations</h2>
            <p className="text-gray-500">Experience comfort and style in our well-appointed rooms and suites, designed for a relaxing stay.</p>
          </div>
        </div>


        <div className="card  bg-base-100 shadow-xl">
          <figure className="px-10  pt-10 box">
            <p className="bg-blue-100 p-3 rounded-full">
            <MdBrunchDining className="text-6xl text-blue-500" />
            </p>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-gray-500 font-bold">On-Site Dining</h2>
            <p className="text-gray-500">Enjoy a variety of culinary delights at our on-site restaurants, catering to different tastes and preferences.</p>         
          </div>
        </div>



        <div className="card  bg-base-100 shadow-xl">
          <figure className="px-10  pt-10 box">
            <p className="bg-blue-100 p-3 rounded-full">
            <FaLeaf className="text-6xl text-blue-500" />
            </p>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-gray-500 font-bold">Recreational Facilities</h2>
            <p className="text-gray-500">Our hotel offers a range of recreational activities, including water sports, swimming pools, and fitness centers.</p>
          </div>
        </div>


        <div className="card  bg-base-100 shadow-xl">
          <figure className="px-10  pt-10 box">
            <p className="bg-blue-100 p-3 rounded-full">
            <FaCentos className="text-6xl text-blue-500" />
            </p>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-gray-500 font-bold">Spa and Wellness Services</h2>
            <p className="text-gray-500">Unwind and rejuvenate at our spa, where you can indulge in massages and treatments for ultimate relaxation.</p>        
          </div>
        </div>


        <div className="card  bg-base-100 shadow-xl">
          <figure className="px-10  pt-10 box">
            <p className="bg-blue-100 p-3 rounded-full">
            <GiCyborgFace className="text-6xl text-blue-500" />
            </p>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-gray-500 font-bold">Surfing Lessons</h2>
            <p className="text-gray-500">Our hotel offers surfing lessons and equipment rentals, allowing guests of all levels to enjoy the thrill of riding the waves.</p>
          </div>
        </div>



      </div>
    </div>
  );
};

export default Features;
