import { AiOutlineUser } from 'react-icons/ai'
import { BsBagCheck } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.jpg'
import wava from '../../assets/wave.png'
import './header.css'

const Header = () => {
  const menuItems = (
    <>
      <li>
        <Link className="uppercase" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="uppercase" to="/">
          Course
        </Link>
      </li>
      <li>
        <Link className="uppercase" to="/">
          Event
        </Link>
      </li>
      <li>
        <Link className="uppercase" to="/">
          Blog
        </Link>
      </li>
      <li>
        <Link className="uppercase" to="/">
          Contact
        </Link>
      </li>
    </>
  )
  return (
    <div className=" MainHeader relative text-white  py-5">
      <div className="container mx-auto">
        {/* top bar */}
        <div className="md:flex justify-between  hidden">
          <div className="flex gap-5">
            <a href="tel:+8801 660 101 704">+8801 660 101 704</a>
            <a href="mailto:info@startsmart.study"> info@startsmart.study</a>
          </div>
          <div className="flex items-center gap-5">
            <span>
              <AiOutlineUser className="text-2xl" />
            </span>
            <div className="">
              <Link to="/login">Login</Link> /{' '}
              <Link to="register">Register</Link>
            </div>
            <span>
              <BsBagCheck className="text-2xl" />
            </span>
          </div>
        </div>

        {/* navbar  */}
        <div className="navbar mt-5">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52"
              >
                {menuItems}
              </ul>
            </div>
            <Link
              to="/"
              className=" normal-case text-xl flex items-center gap-5"
            >
              <img
                className="max-w-[150px] md:block hidden"
                src={logo}
                alt=""
              />
              <span className="text-3xl">IT CASH</span>
            </Link>
          </div>
          <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal px-1 ">{menuItems}</ul>
          </div>
        </div>

        {/* navbar end  */}
      </div>

      {/* bannar start */}
      <div className="flex items-center justify-center py-32 mb-44  ">
        <div className=" text-center">
          <h1 className="text-[50px] font-bold">Find the Best Courses</h1>
          <p>
            Technology is brining a massive wave of evolution on learning things
            on different ways.
          </p>
          <button className="btn  capitalize rounded-full mt-4 border-2 border-white bg-transparent text-white hover:text-black">
            Read to get Started
          </button>
        </div>
      </div>
      {/* bannar end  */}

      {/* svg */}
      <div className=" absolute bottom-[-20px] left-0 w-full ">
        <img className="w-full" src={wava} alt="" />
      </div>
    </div>
  )
}

export default Header
