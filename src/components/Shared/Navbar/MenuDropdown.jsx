import { AiOutlineMenu } from 'react-icons/ai'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'
import avatarImg from '../../../assets/images/placeholder.jpg'

const MenuDropdown = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { user, logOut } = useAuth()

  return (
    <div className='relative'>
      <div className='flex flex-row items-center gap-3'>
        {/* Become A Host btn */}
        <div className='hidden md:block'>
          <ul className='flex gap-5'>
            <li>
              <Link to='contact'>Contact Us</Link>
            </li>
            <li>
              <Link>All Rooms</Link>
            </li>
          </ul>
        </div>


        <div className='hidden md:block'>
         <Link to='/'>
         <button className='disabled:cursor-not-allowed cursor-pointer hover:bg-neutral-100 btn py-3 px-4 text-sm font-semibold rounded-full  transition'>
            Home
          </button>
         </Link>
        </div>


        {/* Dropdown btn */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className='p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'
        >
          <AiOutlineMenu />
          <div className='hidden md:block'>
            {/* Avatar */}
            <img
              className='rounded-full'
              referrerPolicy='no-referrer'
              src={user && user.photoURL ? user.photoURL : avatarImg}
              alt='profile'
              height='30'
              width='30'
            />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className='absolute rounded-xl shadow-md w-[40vw] md:w-[10vw] bg-white overflow-hidden right-0 top-12 text-sm'>
          <div className='flex flex-col cursor-pointer'>
            <Link
              to='/'
              className='block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold'
            >
              Home
            </Link>
            <Link
              to='/'
              className='block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold'
            >
              All Rooms
            </Link>
            <Link
              to='/'
              className='block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold'
            >
              Contract Us
            </Link>

          {
            user?
             <>
               <Link
              to='/dashboard'
              className='px-4 py-3 text-center hover:bg-blue-400 hover:text-white transition font-semibold'
            >
              Dashboard
            </Link>

            <button
            onClick={logOut}
              className='px-4 py-3  hover:bg-blue-400 hover:text-white transition font-semibold'
            >
             Logout
            </button>

             </> : 
            
            <>
               <Link
              to='/login'
              className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
            >
              Login
            </Link>
            <Link
              to='/signup'
              className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
            >
              Sign Up
            </Link>
             </>
          }
         
          </div>
        </div>
      )}
    </div>
  )
}

export default MenuDropdown
