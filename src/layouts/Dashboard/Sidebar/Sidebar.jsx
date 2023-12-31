import { useState } from 'react'
// Components

// Icons

import { GrLogout } from 'react-icons/gr'
import { FcSettings } from 'react-icons/fc'
import { AiOutlineBars } from 'react-icons/ai'
import { BsGraphUp } from 'react-icons/bs'
import MenuItem from './MenuItem'
import ToggleBtn from '../../../components/Button/ToggleBtn'
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import useRole from '../../../hooks/useRole';
import HostMenu from './Menu/HostMenu'
import GuestMenu from './Menu/GuestMenu'
import AdminMenu from './Menu/AdminMenu'


const Sidebar = () => {
  const {logOut} = useAuth()
  const navigate = useNavigate()
  const [toggle, setToggle] = useState(false)
  const [isActive, setActive] = useState(false)
  const [role] = useRole()
  // console.log(role)
  //   For guest/host menu item toggle button
  const toggleHandler = event => {
    setToggle(event.target.checked)
  }
  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive)
  }
  return (
    <>
      {/* Small Screen Navbar */}
      <div className='bg-gray-100 text-gray-800 flex justify-between md:hidden'>
        <div>
          <div className='block cursor-pointer p-4 font-bold'>
            {/* <Logo /> */}
            <Link to='/'>
            <h1 className=' cursor-pointer text-blue-500 '>Hostel <span className='text-yellow-500'>Master</span> </h1>
            </Link>
          </div>

        </div>

        <button
          onClick={handleToggle}
          className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'
        >
          <AiOutlineBars className='h-5 w-5' />
        </button>
      </div>
      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && '-translate-x-full'
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <div className='w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center bg-blue-100 mx-auto'>
              {/* <Logo /> */}
              <Link to='/'>
            <h1 className=' cursor-pointer text-blue-500 text-xl font-extrabold'>Hostel<span className='text-yellow-500'>Master</span></h1>
            </Link>
            </div>
          </div>

          {/* Nav Items */}
          <div className='flex flex-col justify-between flex-1 mt-6'>
            {/* If a user is host */}
            {/* <ToggleBtn toggleHandler={toggleHandler} /> */}

              {/* If a user is host */}
              { role === 'host' || role === 'guest' ?  <ToggleBtn toggleHandler={toggleHandler} /> : ''}
            <nav>
              {/* <MenuItem
                icon={BsGraphUp}
                label='Statistics'
                address='/dashboard'
              /> */}


              {/* host menu  */}
              {role === 'guest' && <GuestMenu></GuestMenu>}
              {/* Host Menu Items */}
             {role === 'host' ? toggle ? <HostMenu></HostMenu> : <GuestMenu></GuestMenu> : '' }
              {/* Admin Menu Items */}
             {role === 'admin' && <AdminMenu></AdminMenu>}
              {/* Admin guest Items */}

              {/* Menu Items */}
            </nav>
          </div>
        </div>

        <div>
          <hr />

          <MenuItem
            icon={FcSettings}
            label='Profile'
            address='/dashboard/profile'
          />
          <button 
          onClick={logOut}
          className='flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform'>
            <GrLogout className='w-5 h-5' />

            <span  className='mx-4 font-medium'>Logout</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default Sidebar