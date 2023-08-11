import { NavLink } from 'react-router-dom'
import logo from '../../../assets/logo.jpg'

import { MdDashboard } from 'react-icons/md'
import { AiFillSetting, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { Collapse } from 'react-collapse'
import { useState } from 'react'

const DashboardMenu = () => {
  const [Operation, setOperation] = useState()
  return (
    <div className="text-[#979696]">
      {/* logo */}
      <div className="p-10">
        <img className="mx-w-full " src={logo} alt="" />
      </div>

      {/* menu items */}
      <div className="px-4">
        <div className="">
          <NavLink
            to="/dashboard/activeclass"
            className={({ isActive }) =>
              isActive
                ? 'flex items-center gap-2 text-white'
                : 'flex items-center gap-2 hover:text-white ease-in duration-200'
            }
          >
            <MdDashboard /> Dashboard{' '}
          </NavLink>
        </div>

        <div className="mt-1 ">
          <div
            onClick={() => setOperation(!Operation)}
            className={`flex items-center gap-2 cursor-pointer hover:text-white ease-in duration-200`}
          >
            <AiFillSetting /> <span>Class Operation </span>{' '}
            <span>{!Operation ? <AiOutlinePlus /> : <AiOutlineMinus />}</span>
          </div>

          <Collapse isOpened={Operation}>
            <div className=" ml-6 mt-1">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? 'text-white'
                    : 'hover:text-white ease-in duration-200'
                }
                to="/dashboard/joinclass"
              >
                Join Class
              </NavLink>
            </div>

            <div className=" ml-6 mt-1">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? 'text-white'
                    : 'hover:text-white ease-in duration-200'
                }
                to="/dashboard/homework"
              >
                {' '}
                Homework Submit
              </NavLink>
            </div>
          </Collapse>
        </div>
      </div>
    </div>
  )
}

export default DashboardMenu
