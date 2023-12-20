
import { useQuery } from "@tanstack/react-query";
import axiosSecure from "../../../../api";
import { Link } from "react-router-dom";
const AppliedRooms = () => {
    
    const {data: getRoom = [], refetch} = useQuery({
        queryKey: ['getRoom'],
        queryFn: async() =>{
          const res = await axiosSecure.get(`/rooms`)
          return res.data
        }
      })
      console.log(getRoom)

    return (
        <div>
           <div>
             <h1 className="text-center my-10 text-3xl text-orange-400 font-bold">Applied Rooms
             <hr className="w-36 text-center mx-auto mt-3 border-2 border-blue-600" />
             </h1>
            
             </div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr className="bg-blue-500 text-white text-lg">
        <th>
         No
        </th>
        <th>Room</th>
        <th>Area</th>
      
        <th>Price/month</th>
        <th>Date - from/to</th>
        <th>Host</th>
      </tr>
    </thead>
    <tbody>
        {
            getRoom?.map( (room ,idx) => 
            <tr key={idx}>
            <th>
             {idx + 1}
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-16 h-16">
                    <img src={room?.image} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{room?.title}</div>
                 
                </div>
              </div>
            </td>
            <td>
              <p>{room?.area}</p>
              <br/>
              <span className="badge badge-ghost badge-sm">{room?.location}</span>
            </td>
            <td>{room?.price}</td>
            <td>
                <p> <span>From - </span> <span> {room?.from.slice(0,10)}</span> </p>
                <p> <span className="mr-5">To - </span> <span> {room?.to.slice(0,10)}</span> </p>
                
            </td>
            <th>
             <Link to = {`/dashboard/roomDetails/${room?._id}`}>
             <button className="btn btn-info bg-blue-600 text-white btn-sm">details</button>
             </Link>
            </th>
          </tr>
            )
        }

     
    </tbody>
    
  </table>
</div>
        </div>
    );
};

export default AppliedRooms;