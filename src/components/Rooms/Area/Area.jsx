import Container from "../../Shared/Container";
import AreaBox from "./AreaBox";
import { AreaIcons } from "./AreaData";


const Area = () => {
    return (
           <Container>
            <div>
                <h1 className="mt-20 mb-10 text-center  text-3xl font-bold">Select Your Area </h1>
            </div>
        <div className="pt-4 flex gap-3 overflow-hidden flex-wrap items-center content-center justify-center ">
           {AreaIcons?.map( area => <AreaBox key={area.label} label={area.label} icon={area.icon}></AreaBox>)}
        </div>
           </Container>
    );
};

export default Area;