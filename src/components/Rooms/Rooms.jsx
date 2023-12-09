import { useEffect, useState } from "react";
import RoomCards from "./RoomCards";


const Rooms = () => {
    const [rooms, setRooms] = useState([])

    useEffect( () =>{
        fetch('/rooms.json')
        .then(res => res.json())
        .then( data => {
            setRooms(data)
        })
    } ,[])
    return (
        <div className="pt-10">
            <h1 className="my-10 text-3xl"> Total Rooms :{rooms?.length} </h1>
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {
                    rooms?.map(room => <RoomCards key={room._id} room={room}></RoomCards>)
                }
            </div>
        </div>
    );
};

export default Rooms;