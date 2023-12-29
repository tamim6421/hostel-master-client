import { useLoaderData } from "react-router-dom"
import Area from "../../components/Rooms/Area/Area"
import Rooms from "../../components/Rooms/Rooms"
import Container from "../../components/Shared/Container"
import Banner from "./Banner/Banner"
import './Home.css'
import Features from "./Features/Features"
import BestRoom from "./BestRoom/BestRoom"

const Home = () => {
  // const [params , setParams] = useSearchParams()
  // const area = params.get("area")
  // console.log(area)
  return (
    <div className="home">

   
      {/* banner sections */}
      <Banner></Banner>

      {/* area sections  */}
      <Area></Area>

      {/* rooms sections  */}
    <Container>
    <Rooms></Rooms>
    <Features></Features>
    <BestRoom></BestRoom>
    </Container>
    </div>
  )
}

export default Home
