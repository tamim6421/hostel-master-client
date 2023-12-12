import { Navigate } from "react-router-dom";
import useRole from "../../hooks/useRole";
import Loader from "../../components/Shared/Loader";



const AdminRoute = ({children}) => {
    const [role, isLoading] = useRole()
    // console.log(role)
    if(isLoading) return <Loader></Loader>
    if(role === 'admin') return children

    
    return <Navigate to='/dashboard' ></Navigate>
};

export default AdminRoute;