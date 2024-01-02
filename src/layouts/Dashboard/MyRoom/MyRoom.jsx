
import RoomDataRow from "./RoomDataRow/RoomDataRow"
import useAllRooms from "../../../hooks/useAllRooms"


const MyRoom = () => {
const [getRoom, refetch] = useAllRooms()
   
    // const [rooms, setRooms] = useState()

    // const {data: getRoom = [], refetch} = useQuery({
    //   queryKey: ['getRoom'],
    //   queryFn: async() =>{
    //     const res = await axiosSecure.get(`/myrooms/${user?.email}`)
    //     return res.data
    //   }
    // })
    // console.log(getRoom)

  

  return (
    <>
    

      <div className='container mx-auto px-4 lg:px-8'>
        <div className='py-8'>
          <div className='-mx-4 lg:-mx-8 px-4 lg:px-8 py-4 overflow-x-auto'>
            <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
              <table className='min-w-full leading-normal'>
                <thead >
                  <tr className="bg-orange-500 text-white ">
                    <th
                      scope='col'
                      className='px-5 py-3 bg-orange-500  border-b border-gray-200 text-white text-left text-lg uppercase font-normal'
                    >
                      Title
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-orange-500  border-b border-gray-200 text-white text-left text-lg uppercase font-normal'
                    >
                      Location
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-orange-500  border-b border-gray-200 text-white text-left text-lg uppercase font-normal'
                    >
                      Price
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-orange-500  border-b border-gray-200 text-white text-left text-lg uppercase font-normal'
                    >
                      From
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-orange-500  border-b border-gray-200 text-white text-left text-lg uppercase font-normal'
                    >
                      To
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-orange-500  border-b border-gray-200 text-white text-left text-lg uppercase font-normal'
                    >
                      Delete
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-orange-500  border-b border-gray-200 text-white text-left text-lg uppercase font-normal'
                    >
                      Update
                    </th>
                  </tr>
                </thead>

                <tbody>
                    {/* Room row data */}
                    {
                        getRoom?.map(room => <RoomDataRow key={room._id} room={room} refetch={refetch}></RoomDataRow>)
                    }

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MyRoom