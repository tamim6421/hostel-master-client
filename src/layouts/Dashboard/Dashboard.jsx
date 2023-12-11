import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";


const Dashboard = () => {
    return (
        <div className='relative min-h-screen md:flex'>
        {/* Sidebar Component */}
        <Sidebar></Sidebar>
        <div className='flex-1  md:ml-64'>

          <div className='p-5'>
            {/* Outlet for dynamic contents */}
            <Outlet></Outlet>
            </div>

        </div>
      </div>
    );
};

export default Dashboard;