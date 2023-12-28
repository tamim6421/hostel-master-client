/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom";
import axiosSecure from "../../../../api";
import toast from "react-hot-toast";
const AppliedRoomDetails = () => {
  const room = useLoaderData();
  const {loacation,area, bathrooms, bedrooms, description, title,from,guest,host,image,price, to, _id: roomId } = room
//   console.log(room);


  const handelAccept = async (room) =>{
    console.log("accept")

    const res = await axiosSecure.post('/confirmroom', room)
    console.log(res.data)
        if(res.data.upsertedId){
            toast.success('Request Accepted')
        }
  }
  return (
    <div>
        <h1 className="text-center my-10 text-3xl font-bold text-blue-400">  Room Details</h1>
      <div className="card flex p-4 flex-col gap-6 md:flex-row card-side bg-blue-50 shadow-xl">
    
        <div>
        <figure>
          <img
            src={room.image}
            alt="Movie"
            className="w-[300px]"
          />
        </figure>
        </div>
        <div className="">

    <div className="mb-5">
    <div className="avatar">
    <div className="w-12 rounded-full">
      <img src={room.host.image} />
    </div>
  </div>
  <div>
    <p>Host Name: {room.host.name} </p>
    <p>Host Email: {room.host.email} </p>
  </div>
    </div>
        
          <h2 className="card-title text-2xl text-gray-700">{room.title}</h2>
         
          <div className="text-gray-500">
            <p>Area : {room.area}</p>
            <p>Bedroom: {room.bedrooms} </p>
            <p>Bathroom: {room.bathrooms} </p>
            <p> Balcony: {room.guest} </p>
          </div>

          <div className="mt-5 text-gray-500">
            <p className="text-xl font-semibold text-gray-500">Available Room </p>
            <p>From : {room.from.slice(0,10)}</p>
            <p>To : {room.to.slice(0,10)}</p>
            <p > <span className="text-gray-500 text-lg">Price: </span> <span className="text-red-500 text-xl">$</span> {room.price} </p>
          </div>
            
         <div className="mt-5 text-gray-500 w-3/4 ">
         <p>{room.description}</p>
         </div>
          <div className="card-actions mt-5">
          <button 
          onClick={() =>handelAccept (room)}
          className="btn btn-success bg-green-500  text-white">
            Accept
            </button>
          <button className="btn btn-error text-white bg-red-500">
            Reject
            </button>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppliedRoomDetails;
