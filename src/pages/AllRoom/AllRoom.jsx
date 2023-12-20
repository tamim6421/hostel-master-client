import { useEffect, useState } from "react";
import Container from "../../components/Shared/Container";
import { getAllRooms } from "../../api/utils";


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
                <h1 className="text-center mt-10 text-3xl font-bold text-blue-500">All Rooms</h1>
                <div>
                    
                </div>

            </Container>
        </div>
    );
};

export default AllRoom;