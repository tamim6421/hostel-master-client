

import DatePicker from "./Calender";
import Calender from "./Calender";
import Button from "../../components/Button/Button";
import { useState } from "react";
import { formatDistance } from "date-fns";
import useAuth from './../../hooks/useAuth';


const RoomRservations = ({room}) => {


    // let [isOpen, setIsOpen] = useState(false)
    // const {user} = useAuth()
  
    // const closeModal = () =>{
    //   setIsOpen(false)
    // }
  
    // const [value, setValue] = useState({
    //   startDate: new Date(room?.from),
    //   endDate: new Date (room?.to),
    //   key: 'selection'
    // })
  
  
  
    //   const totalDays = parseInt(formatDistance( new Date(room?.to), new Date(room?.from)).split(' ')[0])
    //   const totalPrice = totalDays * room?.price
      
  
    //   const [bookingInfo, setBookingInfo] = useState({
    //     guest: {name: user?.displayName, email: user?.email, image: user?.photoURL},
    //     host: room?.host?.email,
    //     location: room?.location,
    //     price: totalPrice,
    //     to: value.endDate,
    //     from: value.startDate,
    //     title: room?.title,
    //     roomId: room?._id,
    //     image: room?.image
    //   })
  


    return (
        <div>
            <div className="rounded-xl border-2 border-orange-200 overflow-hidden bg-white shadow-lg">
      <div className="flex items-center gap-1 p-4">
        <p className="text-2xl font-bold">
         <span className="text-red-400"> $ </span><span className="text-blue-400"> {room?.price}</span> / <span className="text-xl">Month</span>
        </p>
      </div>

      <hr />
      {/* calender component */}
      <div className="flex justify-center">
        <Calender></Calender>
      </div>

      <div>
        <div className="px-5 p-4">
          <div>
            <Button 
            disabled={''}
            // onClick={ () => setIsOpen(true)}
            label={"Reserve"}></Button>
          </div>
          <hr className="border-2 border-orange-200" />
          <div className="flex items-center justify-between mt-3">
            <p className="text-xl font-bold">Total : 000 </p>
            {/* <p> ${totalPrice} </p> */}
          </div>
        </div>
      </div>

      {/* <BookingModal closeModal={closeModal} isOpen={isOpen} bookingInfo={bookingInfo}></BookingModal> */}

    </div>
        </div>
    );
};

export default RoomRservations;