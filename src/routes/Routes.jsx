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
        path: '/rooms/:id',
        element: <PrivetRoutes><RoomsDetails></RoomsDetails></PrivetRoutes>,
        loader: ({params}) => getSingleRoom(params.id)
      }
    ],
  },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <SignUp /> },
  {
    path: '/dashboard',
    element: <Dashboard></Dashboard>
  }
])
