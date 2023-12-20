import { useLoaderData} from "react-router-dom";
import Container from "../../components/Shared/Container";
import Header from "./Header/Header";
import RoomInfo from "./RoomInfo";
import RoomRservations from "./RoomRservations";
import { Helmet } from "react-helmet-async";


const RoomsDetails = () => {
    const room = useLoaderData()
    // console.log(room)


    return (
        <Container>
            <Helmet>
                <title>Hostel | RoomDetails</title>
            </Helmet>
            <div className="pt-20 max-w-screen-lg mx-auto" >
          

                {/* room header  */}
                <div className="my-5 ">
                    <Header room={room}></Header>
                </div>

                {/* room details info  */}
                <div className="grid grid-cols- md:grid-cols-7">
                <RoomInfo room={room}></RoomInfo>

                <div className="md:col-span-3 mx-auto order-first md:order-last mt-10">
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