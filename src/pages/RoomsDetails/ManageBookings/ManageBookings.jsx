import { Helmet } from "react-helmet-async";

import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import { getHostBooking } from "../../../api/utils";
import Loader from "../../../components/Shared/Loader";
import TableRow from "../MyBooking/TableRow";



const ManageBookings = () => {

  const{user, loading} = useAuth()

  const {data: bookings =[], isLoading, refetch} = useQuery({
      queryKey : ['bookings', user?.email],
      enabled: !loading,
      queryFn: async () => getHostBooking(user?.email)
  })

  // console.log(bookings)

  if(isLoading) return <Loader></Loader>


    return (
        <div className="bg-blue-50">
               <Helmet>
        <title>Manage Bookings</title>
      </Helmet>

      <div className='container mx-auto px-4 sm:px-8 '>
        <div className='py-8'>
          <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto '>
            <div className='inline-block min-w-full shadow rounded-lg overflow-hidden '>
              <table className='min-w-full leading-normal'>
                <thead>
                  <tr>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-blue-400  border-b border-gray-200 text-white text-left text-lg uppercase font-normal'
                    >
                      Title
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-blue-400  border-b border-gray-200 text-white text-left text-lg uppercase font-normal'
                    >
                      Guest Info
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-blue-400  border-b border-gray-200 text-white text-left text-lg uppercase font-normal'
                    >
                      Price
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-blue-400  border-b border-gray-200 text-white text-left text-lg uppercase font-normal'
                    >
                      From
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-blue-400  border-b border-gray-200 text-white text-left text-lg uppercase font-normal'
                    >
                      To
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-blue-400  border-b border-gray-200 text-white text-left text-lg uppercase font-normal'
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  
                  {/* Table row data */}

                  {
                       bookings && bookings?.map( booking => <TableRow key={booking._id} booking = {booking}></TableRow>)
                    }
                
                
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
        </div>
    );
};

export default ManageBookings;