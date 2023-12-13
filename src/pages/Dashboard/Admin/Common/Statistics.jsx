
import { Helmet } from 'react-helmet-async'
import useRole from '../../../../hooks/useRole'
import AdminStatistics from '../AdminStatistics/AdminStatistics'
// import AdminStatistics from '../../../components/Dashboard/Statistics/AdminStatistics'
// import GuestStatistics from '../../../components/Dashboard/Statistics/Guest/GuestStatistics'
// import HostStatistics from '../../../components/Dashboard/Statistics/Host/HostStatistics'

const Statistics = () => {
  const [role] = useRole()
  console.log(role)
  return (
    <div>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>


      <p>statistics</p>
      {/* {role === 'guest' && <GuestStatistics />}
      {role === 'host' && <HostStatistics />}*/}
      {role === 'admin' && <AdminStatistics />}
    </div>
  )
}

export default Statistics