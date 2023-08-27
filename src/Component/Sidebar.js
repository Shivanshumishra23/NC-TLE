import React from 'react'
import { BiSolidDashboard } from "react-icons/bi";
import {IoIosStats} from "react-icons/io"
import {TbReportSearch,TbSettingsDollar} from "react-icons/tb"
import {MdNotificationAdd,MdMessage,MdLogout,MdHelp} from "react-icons/md"

const Sidebar = () => {
  return (
    <div className='h-full w-1/6 bg-orange-500 opacity-90 text-white hidden lg:flex lg:flex-col justify-between rounded '>
       <div className='mt-8 m-5 text-3xl font-bold'>NC ETL</div>
       <div>
       <div className='m-2 text-xl flex font-semibold py-2 p-1 bg-white text-cyan-400 rounded-3xl'><BiSolidDashboard  size={28}/> &nbsp; DashBoard</div>
       <div className='m-6 text-xl flex  font-semibold'><IoIosStats  size={28} />&nbsp; Stastics</div>
       <div className='m-6 text-xl  flex  font-semibold'><TbReportSearch size={28}/>&nbsp; Reports</div>
       <div className='m-6 text-xl  flex font-semibold'><TbSettingsDollar size={28}/>&nbsp;Setting </div>
       </div>
       <div>
       
       <div className='m-6 text-xl  flex font-semibold'><MdNotificationAdd size={28}/>&nbsp;Notification</div>
       <div className='m-6 text-xl flex  font-semibold'><MdMessage size={28}/>&nbsp;Message</div>
       <div className='m-6 text-xl flex  font-semibold'><MdLogout size={28}/>&nbsp;Logout</div>
       </div>
       
       <div className='m-6 text-xl  flex font-semibold'><MdHelp size={28}/>&nbsp; Help</div>

{/* <div className='h-full w-auto text-white  flex flex-col grid place-content-center items-center'>

<div className=' bg-orange-500 '>
<div className='mb-1'><BiSolidDashboard  size={42}/> </div>
<div className='mb-1'><IoIosStats  size={42} /></div>
<div className='mb-1'><TbReportSearch size={42}/></div>
<div className='mb-8'><TbSettingsDollar size={42}/></div>
<div className='mb-1'><MdNotificationAdd size={42}/></div>
<div className='mb-1'><MdMessage size={42}/></div>
<div className='mb-8'><MdLogout size={42}/></div>
<div className='mb-1'><MdHelp size={42}/></div>

</div>
</div> */}

    </div>


  )
}

export default Sidebar
