import { MdAddHomeWork } from "react-icons/md";

import { HiMiniHomeModern } from "react-icons/hi2";
import { MdOutlineManageHistory } from 'react-icons/md'
import MenuItem from "../MenuItem";

const HostMenu = () => {
  return (
    <>
      <MenuItem icon={MdAddHomeWork} label="Add Room" address="addRoom" />

      <MenuItem icon={HiMiniHomeModern} label="My Rooms" address="myRoom" />

      <MenuItem
        icon={MdOutlineManageHistory}
        label='Manage Bookings'
        address='manageBookings'
      />
    </>
  );
};

export default HostMenu;


// <MenuItem
// icon={MdOutlineAddHomeWork }
// label='Add Room'
// address='addRoom'
// />

// <MenuItem
// icon={BsHouseCheckFill  }
// label='My Rooms'
// address='myRoom'
// />