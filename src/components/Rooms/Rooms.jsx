import { useEffect, useState } from "react";
import RoomCards from "./RoomCards";
import { useNavigate, useSearchParams } from "react-router-dom";
import Heading from "../Shared/Heading";
import Loader from "../Shared/Loader";


const Rooms = () => {
    const [rooms, setRooms] = useState([])
    const [params , setParams] = useSearchParams()
    const area = params.get("area")
    const [loading, setLoading] = useState(false)

    useEffect( () =>{
        setLoading(true)
        fetch('/rooms.json')
        .then(res => res.json())
        .then( data => {
            if(area){
                const filterArea = data.filter(room => room.area === area)
                // console.log(filterArea)
                setRooms(filterArea)
            }
            else{

                setRooms(data)
            }
            setLoading(false)
        })
    } ,[area])

        if(loading) return <Loader></Loader>

    return (
        <div className="pt-10">
        <div>
            {rooms && rooms.length > 0 ? 
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {
                    rooms?.map(room => <RoomCards key={room._id} room={room}></RoomCards>)
                }
            </div> :
            <div className="my-20">
            <Heading title={"No Hostel Available In This Area"} center={true} subtitle={'please find others area '}></Heading>
            </div>
            }
        </div>
        </div>
    );
};

export default Rooms;