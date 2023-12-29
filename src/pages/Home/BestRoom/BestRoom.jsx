import { useEffect, useState } from "react";
import { getAllRooms } from "../../../api/utils";
import BestRoomCards from "./BestRoomCards";

const BestRoom = () => {
    const [rooms, setRooms] = useState([])

    useEffect( () =>{
        getAllRooms()
        .then(data =>{
            setRooms(data)
        })
    } , [])
    return (
        <div>
            <div>
                <h1 className="text-center text-3xl text-blue-400 font-bold">Our Best Rooms</h1>
            </div>
            <div>
       
            <div className="grid gap-8 grid-cols-1 mt-10 md:grid-cols-3 ">
                {
                    rooms?.slice(0, 3).map(room => <BestRoomCards key={room._id} room={room}></BestRoomCards>)
                }
            </div> 
            <div className="my-20">
           
            </div>
            
        </div>
        </div>
    );
};

export default BestRoom;