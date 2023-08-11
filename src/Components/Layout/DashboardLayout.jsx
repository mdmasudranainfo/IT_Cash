import { AiOutlineArrowLeft } from 'react-icons/ai'
import DashboardMenu from '../DashboardComponent/DashboardMenu/DashboardMenu'
import { Outlet } from 'react-router-dom'

const DashboardLayout = () => {
  return (
    <div>
      <div className="flex">
        {/* dashboard menu */}
        <div className="w-[25%] min-h-screen sticky top-0 bg-[#212529]">
          <DashboardMenu />
        </div>
        {/* dashboard main section */}
        <div className="h-screen w-full ">
          <div className="flex justify-between p-4">
            <div className="">
              <AiOutlineArrowLeft className="text-3xl cursor-pointer" />
            </div>
            <div className="flex  items-center gap-4">
              <h1 className="text-2xl">Md Masud Rana</h1>
              <div className="avatar">
                <div className="w-12 rounded-full ring ring-[#0C4C7C] ring-offset-base-100 ring-offset-2">
                  <img src="https://i.pinimg.com/originals/55/aa/ff/55aaffcc69835faad6bc09c9d0f3bcc1.jpg" />
                </div>
              </div>
            </div>
          </div>

          {/*  */}
          <Outlet />

          {/*  */}
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout
