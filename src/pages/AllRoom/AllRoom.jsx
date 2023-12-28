import { useEffect, useState } from "react";
import Container from "../../components/Shared/Container";
import { getAllRooms } from "../../api/utils";
import AllRoomBanner from "./AllRoomBanner/AllRoomBanner";
import { FaSearch } from "react-icons/fa";
import Rooms from "../../components/Rooms/Rooms";
import AllRoomCard from "./AllRoomBanner/AllRoomCard";
import Heading from "../../components/Shared/Heading";


const AllRoom = () => {
    const [rooms, setRooms] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect( () =>{
        getAllRooms()
        .then(data =>{
            setRooms(data)
        })
       
    } ,[])

        // if(loading) return <Loader></Loader>

        console.log(rooms)

    return (
        <div className="pt-20">
            <Container>
                <div>
                <AllRoomBanner></AllRoomBanner>
                </div>
                <h1 className="text-center mt-10 text-3xl font-bold text-blue-500">All Rooms {rooms.length} </h1>
                <div className="mt-20">
                    <div>
                        <p className="text-center mb-2 text-2xl font-bold text-yellow-500 drop-shadow-lg">Search Room By Area</p>
                    </div>

                <div className='relative text-center '>
               <form >
               <input type="text" placeholder="Type here" className="input input-bordered input-lg w-full max-w-xs rounded-full " />
                <button className="btn btn-circle  bg-blue-500 hover:bg-blue-600  text-white absolute">
                <FaSearch className="text-2xl" />
                </button>
               </form>
                </div>

                    <div className="mt-20">
                    <div>
            {rooms && rooms.length > 0 ? 
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {
                    rooms?.map(room => <AllRoomCard key={room._id} room={room}></AllRoomCard>)
                }
            </div> :
            <div className="my-20">
            <Heading title={"No Hostel Available In This Area"} center={true} subtitle={'please find others area '}></Heading>
            </div>
            }
        </div>
                    </div>

                </div>

            </Container>
        </div>
    );
};

export default AllRoom;