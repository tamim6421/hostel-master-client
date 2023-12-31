import { Link } from "react-router-dom";



const AllRoomCard = ({room}) => {
    // console.log(room)
    return (
     <Link to={`/rooms/${room?._id}`}>
        <div className='col-span-1 cursor-pointer shadow-md  group'>
      <div className='flex flex-col gap-2 w-full shadow-sm rounded-lg p-1'>
        <div
          className='
            aspect-square 
            w-full 
            relative 
            overflow-hidden 
            rounded-xl
          '
        >
          <img
            className='
              object-cover 
              h-full 
              w-full 
              group-hover:scale-110 
              transition
            '
            src={room.image}
            alt='Room'
          />
          <div
            className='
            absolute
            top-3
            right-3
          '
          >
            {/* <HeartButton /> */}
          </div>
        </div>
        <div className='font-semibold text-lg'>{room?.area}</div>
        <div className='font-light text-neutral-500'>
          5 nights . June 19 - 26
        </div>
        <div className='flex flex-row items-center gap-1'>
          <div className='font-semibold'>$ {room?.price}</div>
          <div className='font-light'> / Month</div>
        </div>
      </div>
    </div>
     </Link>
    );
};

export default AllRoomCard;