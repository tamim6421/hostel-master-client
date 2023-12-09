import Area from "../../components/Rooms/Area/Area"
import Rooms from "../../components/Rooms/Rooms"
import Container from "../../components/Shared/Container"
import Banner from "./Banner/Banner"

const Home = () => {
  return (
    <div>

      <h1>Welcome to StayVista</h1>
      {/* banner sections */}
      <Banner></Banner>

      {/* area sections  */}
      <Area></Area>

      {/* rooms sections  */}
    <Container>
    <Rooms></Rooms>
    </Container>
    </div>
  )
}

export default Home
