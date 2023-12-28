import { useSearchParams } from "react-router-dom";
import Container from "../../Shared/Container";
import AreaBox from "./AreaBox";
import { AreaIcons } from "./AreaData";


const Area = () => {
    const [params , setParams] = useSearchParams()
    const area = params.get("area")
    // console.log(area)
    return (
           <Container>
            <div>
                <h1 className="mt-20 mb-10 text-center text-3xl md:text-5xl text-blue-400 font-bold">Most Demandable Area </h1>
            </div>
        <div className="pt-4 flex gap-3 overflow-hidden flex-wrap items-center content-center justify-center ">
           {AreaIcons?.map( item => <AreaBox
            key={item.label} 
            label={item.label}
             icon={item.icon}
             selected = {area === item.label}
             >

             </AreaBox>)}
        </div>
           </Container>
    );
};

export default Area;