
import { FaFingerprint } from "react-icons/fa";

import { GrUserAdmin } from 'react-icons/gr'


import MenuItem from "../MenuItem";

const GuestMenu = () => {


  
//   const closeModal = () =>{
//     setIsOpen(false)
//   }


//   const modalHandler = async () =>{
  
//     try {
//      const res = await becomeHost(user?.email)
//      console.log(res)
//      if(res.modifiedCount > 0){
//       toast.success('Success ! , Please wait for admin confirmation')
//      }
//      else{
//       toast.success('!Please wait for admin approval')
//      }
      
//     } catch (error) {
//       console.log(error)
//     }
//     finally{
//       setIsOpen(false)
//     }
//   }

    return  <>
   
    <MenuItem icon={FaFingerprint } label="My Bookings" address="myBookings" />

    {/* button  */}
    {/* {role == 'guest' && (
        <div
        onClick={ () => setIsOpen(true)}
        className='flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform text-gray-600  hover:bg-gray-300   hover:text-gray-700 cursor-pointer'>
          <GrUserAdmin className='w-5 h-5' />

          <span className='mx-4 font-medium'>Become A Host</span>
        </div>
      )} */}

      {/* <HostModal closeModal={closeModal} isOpen={isOpen} modalHandler={modalHandler}></HostModal> */}
  </>
};

export default GuestMenu;