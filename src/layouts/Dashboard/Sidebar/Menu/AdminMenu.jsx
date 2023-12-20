


import { FaUsersCog } from "react-icons/fa";
import MenuItem from "../MenuItem";
import { BsGraphUp } from "react-icons/bs";
import { MdOutlineAddHomeWork } from "react-icons/md";

const AdminMenu = () => {
    return <>
      <MenuItem
                icon={BsGraphUp}
                label='Statistics'
                address='adminState'
              />

     <MenuItem icon={FaUsersCog} label="Manage Users" address="manage-users" />
     <MenuItem icon={MdOutlineAddHomeWork} label="Applied Rooms" address="appliedRooms" />
    </>
};

export default AdminMenu;