
import { FaArrowRight } from "react-icons/fa";

const RoomInfo = ({ room }) => {
    return (
      <div className='col-span-4 flex flex-col gap-8'>
        <div className='flex flex-col gap-2'>
          <div
            className='
                text-xl 
                font-semibold 
                flex 
                flex-row 
                items-center
                gap-2
              '
          >
            <div className="mt-5">
                <p>Hosted by</p>
               <p className="text-gray-500">  {room?.host?.name}</p>
                 
                 </div>
  
           <div>
           <img
              className='rounded-full'
              height='30'
              width='30'
              alt='Avatar'
              src={room?.host?.image}
            />
           </div>
          </div>
          <div
            className='
                flex 
                flex-row 
                items-center 
                gap-4 
                font-light
                text-neutral-500
              '
          >
            <div>{room?.bedrooms} rooms</div>
            <div>{room?.bathrooms} balcony</div>
            <div>{room?.guests} bathroom</div>
          </div>
        </div>
  
        <hr />
        <div
          className='
          text-lg font-light text-neutral-500'
        >
          {room?.description}
        </div>
        <hr />
        <div>
            <h1 className="text-2xl font-semibold uppercase text-blue-500">Room Facilities</h1>
            <ul className="space-y-5 mt-5" >
                <li className="flex items-center gap-1 text-xl" >
                <FaArrowRight className="text-2xl text-yellow-300" />
                Stoves
                </li>
                <li  className="flex items-center gap-1 text-xl" >
                <FaArrowRight  className="text-2xl text-yellow-300" />
                Plug Sockets
                </li>
                <li  className="flex items-center gap-1 text-xl" >
                <FaArrowRight  className="text-2xl text-yellow-300" />
                Security 
                </li>
                <li  className="flex items-center gap-1 text-xl" >
                <FaArrowRight  className="text-2xl text-yellow-300" />
                Free WiFi
                </li>
                <li  className="flex items-center gap-1 text-xl" >
                <FaArrowRight  className="text-2xl text-yellow-300" />
                24/7 Electricity
                </li>
            </ul>
        </div>
      </div>
    )
  }
  
  export default RoomInfo