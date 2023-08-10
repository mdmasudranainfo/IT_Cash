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
          <NavLink className="flex items-center gap-2">
            <MdDashboard /> Dashboard{' '}
          </NavLink>
        </div>

        <div className="mt-1    ">
          <NavLink
            onClick={() => setOperation(!Operation)}
            className="flex items-center gap-2"
          >
            <AiFillSetting /> <span>Class Operation </span>{' '}
            <span>{!Operation ? <AiOutlinePlus /> : <AiOutlineMinus />}</span>
          </NavLink>

          <Collapse isOpened={Operation}>
            <div className=" ml-6 mt-1">
              <NavLink>Join Class</NavLink>
            </div>
          </Collapse>
        </div>
      </div>
    </div>
  )
}

export default DashboardMenu
