import { FaBedPulse } from "react-icons/fa6";
import { FaBath } from "react-icons/fa6";

const BestRoomCards = ({room}) => {
    console.log(room)
  return (
    <div>
      <div className="card  bg-base-100 shadow-xl">
        <figure>
          <img
            className="box  h-[300px] object-cover"
            src={room.image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold text-gray-500">{room.title}</h2>
         <div className="text-gray-500 flex">
            <p className="flex items-center gap-5">
            <FaBedPulse className="text-3xl text-blue-500" />
            {room.bedrooms}
            </p>
            <p className="flex items-center gap-5">
            <FaBath  className="text-3xl text-blue-500" />
            {room.bedrooms}
            </p>
         </div>
         <div>
            <h1>
                <span className="text-2xl font-bold">{room.price}</span> / <span> Month </span>
            </h1>
         </div>
         
        </div>
      </div>
    </div>
  );
};

export default BestRoomCards;
