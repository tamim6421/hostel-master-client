import Container from "../../Shared/Container";
import AreaBox from "./AreaBox";
import { AreaIcons } from "./AreaData";


const Area = () => {
    return (
        <div>
           <Container>
           {AreaIcons?.map( area => <AreaBox key={area.label} label={area.label} icon={area.icon}></AreaBox>)}
           </Container>
        </div>
    );
};

export default Area;