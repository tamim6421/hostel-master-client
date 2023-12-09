import { useParams } from "react-router-dom";
import Container from "../../components/Shared/Container";
import { useEffect, useState } from "react";
import Loader from "../../components/Shared/Loader";


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
            <div className="pt-20" >
                <h1>Rooms details:{room.title} </h1>

                {/* room header  */}
                <div></div>

                {/* room details info  */}
                <div></div>

                {/* calender  */}
                <div></div>

                
            </div>

        </Container>
    );
};

export default RoomsDetails;