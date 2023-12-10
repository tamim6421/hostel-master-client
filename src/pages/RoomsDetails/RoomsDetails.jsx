import { useParams } from "react-router-dom";
import Container from "../../components/Shared/Container";
import { useEffect, useState } from "react";
import Loader from "../../components/Shared/Loader";
import Header from "./Header/Header";
import RoomInfo from "./RoomInfo";
import { Calendar } from "react-date-range";
import RoomRservations from "./RoomRservations";


const RoomsDetails = () => {
    const {id} = useParams()
    // console.log(id)
    const [room, setRoom] = useState({})
    const [loading, setLoading] = useState(false)

    useEffect( () =>{
        setLoading(true)
        fetch('/rooms.json')
        .then(res => res.json())
        .then( data => {
           
            const singleRoom = data?.find( home => home._id === id)
            setRoom(singleRoom)
            setLoading(false)
            }
    )} ,[id])

        if(loading) return <Loader></Loader>



    return (
        <Container>
            <div className="pt-20 max-w-screen-lg mx-auto" >
          

                {/* room header  */}
                <div className="my-5 ">
                    <Header room={room}></Header>
                </div>

                {/* room details info  */}
                <div className="grid grid-cols-2 md:grid-cols-7">
                <RoomInfo room={room}></RoomInfo>

                <div className="md:col-span-3  order-first md:order-last mt-10">
                 {/* Room reservations  */}

                    <RoomRservations room={room}></RoomRservations>
       
                </div>

                </div>

                <div></div>

                
            </div>

        </Container>
    );
};

export default RoomsDetails;