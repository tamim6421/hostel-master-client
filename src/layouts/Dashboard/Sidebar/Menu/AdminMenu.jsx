


import { FaUsersCog } from "react-icons/fa";
import MenuItem from "../MenuItem";


const AdminMenu = () => {
    return <>
     <MenuItem icon={FaUsersCog} label="Manage Users" address="manage-users" />
    </>
};

export default AdminMenu;