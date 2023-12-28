import { useEffect, useState } from "react";
import Container from "../../components/Shared/Container";
import { getAllRooms } from "../../api/utils";
import AllRoomBanner from "./AllRoomBanner/AllRoomBanner";
import { FaSearch } from "react-icons/fa";


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



    return (
        <div className="pt-20">
            <Container>
                <div>
                <AllRoomBanner></AllRoomBanner>
                </div>
                <h1 className="text-center mt-10 text-3xl font-bold text-blue-500">All Rooms {rooms.length} </h1>
                <div>
                <div className='relative text-center mt-10'>
                <input type="text" placeholder="Type here" className="input input-bordered input-lg w-full max-w-xs rounded-full " />
                <button className="btn btn-circle btn-outline absolute">
                <FaSearch />
                </button>
                </div>


                </div>

            </Container>
        </div>
    );
};

export default AllRoom;