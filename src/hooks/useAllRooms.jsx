
import useAuth from './useAuth';
import axiosSecure from '../api';
import { useQuery } from '@tanstack/react-query';

const useAllRooms = () => {
const {user} = useAuth()
    
    const {data: getRoom = [], refetch} = useQuery({
        queryKey: ['getRoom'],
        queryFn: async() =>{
          const res = await axiosSecure.get(`/myrooms/${user?.email}`)
          return res.data
        }
      })
    //   console.log(getRoom)
      return[getRoom, refetch]
 
};

export default useAllRooms;