


import { FaUsersCog } from "react-icons/fa";
import MenuItem from "../MenuItem";
import { BsGraphUp } from "react-icons/bs";


const AdminMenu = () => {
    return <>
      <MenuItem
                icon={BsGraphUp}
                label='Statistics'
                address='adminState'
              />

     <MenuItem icon={FaUsersCog} label="Manage Users" address="manage-users" />
    </>
};

export default AdminMenu;