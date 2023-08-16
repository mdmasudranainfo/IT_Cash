import { AiOutlineArrowLeft, AiOutlineMenu } from 'react-icons/ai'
import DashboardMenu from '../DashboardComponent/DashboardMenu/DashboardMenu'
import { Outlet } from 'react-router-dom'
import { useState } from 'react'

const DashboardLayout = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const [openMenu1, setOpenMenu1] = useState(false)
  console.log(openMenu1)

  return (
    <div>
      <div className="flex relative">
        {/* absulate menu start */}
        <div
          className={`absolute top-0 left-0 z-50 ${
            openMenu ? 'block lg:hidden' : 'hidden'
          }`}
        >
          <div className="max-w-[250px] bg-[#212529] min-h-screen ">
            <DashboardMenu setOpenMenu={setOpenMenu} />
          </div>
        </div>
        {/* absulate menu end  */}

        {/* dashboard menu */}
        <div
          className={`w-[25%]  hidden min-h-screen sticky top-0 bg-[#212529] ${
            openMenu1 ? 'lg:block ' : 'hidden'
          }`}
        >
          <DashboardMenu />
        </div>
        {/* dashboard main section */}
        <div className="h-screen w-full ">
          <div className="flex justify-between p-4">
            <div className="">
              <AiOutlineArrowLeft
                onClick={() => setOpenMenu1(!openMenu1)}
                className="text-3xl cursor-pointer"
              />
            </div>
            <div className="flex  items-center gap-4">
              <AiOutlineMenu
                onClick={() => setOpenMenu(!openMenu)}
                className="text-2xl block lg:hidden cursor-pointer"
              />
              <h1 className="text-2xl lg:block hidden">Md Masud Rana</h1>
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
