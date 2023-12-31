import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const GetInTouch = () => {
  return (
    <div className="my-36">
      <div>
        <h1 className="text-4xl font-bold text-blue-500 text-center">
          Do you have any questions? <br />
          We are available 24/7
        </h1>
      </div>

      <div className="md:w-3/4 mx-auto bg-blue-50 shadow-lg p-3 md:p-5  rounded-lg mt-10">
               <p className="text-center text-2xl mb-5 font-semibold text-gray-500 drop-shadow-lg"> Send Message Here </p>

               <form
               
               action="https://formspree.io/f/xjvqnjbd"
               method="POST"
               >
                <div className="relative w-full min-w-[200px] h-10">
                <input
                name="username"
                required
                type="text"
                autoComplete="off"
                className="peer  w-full h-full bg-transparent text-orange-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-orange-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-orange-gray-200 placeholder-shown:border-t-orange-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-orange-gray-200 focus:border-orange-500"
                placeholder=" " /><label
                className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-orange-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-orange-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-orange-gray-400 peer-focus:text-orange-500 before:border-orange-gray-200 peer-focus:before:!border-orange-500 after:border-orange-gray-200 peer-focus:after:!border-orange-500">You Name
                </label>
            </div>

                <div className="relative mt-10 w-full min-w-[200px] h-10">
                <input
                type="email"
                name="email"
                autoComplete="off"
                required
                className="peer w-full h-full bg-transparent text-orange-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-orange-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-orange-gray-200 placeholder-shown:border-t-orange-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-orange-gray-200 focus:border-orange-500"
                placeholder=" " /><label
                className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-orange-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-orange-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-orange-gray-400 peer-focus:text-orange-500 before:border-orange-gray-200 peer-focus:before:!border-orange-500 after:border-orange-gray-200 peer-focus:after:!border-orange-500">Your Email
                </label>
            </div>

            <div className="relative mt-10  w-full min-w-[200px]">
    <textarea
    name="message"
    required
    autoComplete="off"
      className="peer h-full min-h-[100px] w-full resize-none rounded-[7px] border border-orange-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-orange-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-orange-gray-200 placeholder-shown:border-t-orange-gray-200 focus:border-2 focus:border-orange-500 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-orange-gray-50"
      placeholder=" "></textarea>
    <label
      className=" before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-orange-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-orange-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-orange-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-orange-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-orange-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-orange-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-orange-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-orange-gray-500">
      Your Message
    </label>
  </div>

            <input className="btn  border-2 border-orange-300 bg-blue-500 text-white cursor-pointer mt-5 " type="submit" value="Send Message" />
               </form>
            </div>



            <div className="w-3/4  mx-auto mt-20">
                <p className="text-xl font-bold drop-shadow-lg">Don't be shy! Hit me up! </p>

             <div className="flex flex-col  md:flex-row gap-10 mt-10">
             <div className="flex gap-2 items-center" data-aos="fade-up" data-aos-duration="500">
                    <p>
                    <FaLocationDot className="text-2xl" ></FaLocationDot> 
                    </p>
                    <p>
                    <p className="text-lg font-semibold">Location</p>
                    <span>Mirpur- 6 Block-tha</span>
                    </p>
                </div>
                <div className="flex gap-2 items-center" data-aos="fade-down" data-aos-duration="500">
                    <p>
                    <MdEmail  className="text-2xl" ></MdEmail> 
                    </p>
                    <p>
                    <p className="text-lg font-semibold">Email</p>
                    <span>tamimhossain6421@gmail.com</span>
                    </p>
                </div>
                <div>
                <p className="flex justify-center md:justify-start gap-3" >
                <a href="https://github.com/tamim6421">
                    <p data-aos="fade-up" data-aos-duration="500" >
                    <FaGithub className="text-3xl" />
                    </p>
              
                </a>
                <a href="https://www.linkedin.com/in/tamim-hossain-eub/">
                    <p  data-aos="fade-down" data-aos-duration="500">

                <FaLinkedin className="text-3xl" />
                    </p>
                </a>
                <a href="https://www.facebook.com/tamin.hossain.77">
                    <p  data-aos="fade-up" data-aos-duration="500">

                <FaFacebook className="text-3xl " />
                    </p>
                </a>
            </p>

                </div>

             </div>
            </div>
    </div>
  );
};

export default GetInTouch;
