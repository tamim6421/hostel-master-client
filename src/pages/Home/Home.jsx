import { useSearchParams } from "react-router-dom"
import Area from "../../components/Rooms/Area/Area"
import Rooms from "../../components/Rooms/Rooms"
import Container from "../../components/Shared/Container"
import Banner from "./Banner/Banner"

const Home = () => {
  // const [params , setParams] = useSearchParams()
  // const area = params.get("area")
  // console.log(area)
  return (
    <div>

   
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
