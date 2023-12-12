import { Navigate } from "react-router-dom";
import useRoll from "../hooks/UseRole";
import Loader from "../../components/Shared/Loader";


const HostRoute = ({children}) => {
    const [role, isLoading] = useRoll()
    // console.log(role)
    if(isLoading) return <Loader></Loader>
    if(role === 'host') return children

    
    return <Navigate to='/dashboard' ></Navigate>
};

export default HostRoute;