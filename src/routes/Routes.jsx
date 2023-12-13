import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../pages/Home/Home'
import ErrorPage from '../pages/ErrorPage'
import Login from '../pages/Login/Login'
import SignUp from '../pages/SignUp/SignUp'
import RoomsDetails from '../pages/RoomsDetails/RoomsDetails'
import PrivetRoutes from './PrivetRoutes/PrivetRoutes'
import { getAllRooms, getSingleRoom } from '../api/utils'
import Dashboard from '../layouts/Dashboard/Dashboard'
import AddRoom from '../layouts/Dashboard/AddRoom/AddRoom'
import MyRoom from '../layouts/Dashboard/MyRoom/MyRoom'
import ManageUsers from '../pages/Dashboard/Admin/ManageUsers'
import AdminRoute from './AdminRoutes/AdminRoute'
import Profile from '../pages/Dashboard/Admin/Common/Profile'
import MyBookings from '../pages/RoomsDetails/MyBooking/MyBookings'
import ManageBookings from '../pages/RoomsDetails/ManageBookings/ManageBookings'
import Statistics from '../pages/Dashboard/Admin/Common/Statistics'
import ContactUs from '../pages/ContactUs/ContactUs'
import UpdateRoom from '../layouts/Dashboard/MyRoom/UpdateRoom'


export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path:'contact',
        element: <ContactUs></ContactUs>
      },
      {
        path: '/rooms/:id',
        element: <PrivetRoutes><RoomsDetails></RoomsDetails></PrivetRoutes>,
        loader: ({params}) => getSingleRoom(params.id)
      },
      
    ],
  },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <SignUp /> },
  {
    path: '/dashboard',
    element: <PrivetRoutes><Dashboard></Dashboard></PrivetRoutes>,
    children:[
      {
        path:'addRoom',
        element: <AddRoom></AddRoom>
      },
      {
        path: 'myRoom',
        element: <PrivetRoutes><MyRoom></MyRoom></PrivetRoutes>
      },
      {
        path: 'updateRoom/:id',
        element: <UpdateRoom></UpdateRoom>,
        loader: ({params}) => fetch(`https://hostel-master-server.vercel.app/updateroom/${params.id}`)
      },
      {
        path: 'manage-users',
        element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
      },
      {
        path: 'profile',
        element: <Profile></Profile>
      },
      {
        path: 'myBookings',
        element: <MyBookings></MyBookings>
      },
      {
        path: 'manageBookings',
        element: <ManageBookings></ManageBookings>
      },
      {
        path: 'adminState',
        element: <Statistics></Statistics>
      }
    ]
  }
])
