import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/Pasted image (1).png'

const Navbar = () => {
  const [navColor, setNavColor] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setNavColor(true)
      } else {
        setNavColor(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

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
    <div className={`my-5 sticky top-0 z-50   ${navColor && 'bg-[#318DC5] '}`}>
      {/* navbar  */}
      <div>
        <div className="navbar container mx-auto ">
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
            </Link>
          </div>
          <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal px-1 ">{menuItems}</ul>
          </div>
        </div>
      </div>

      {/* navbar end  */}
    </div>
  )
}

export default Navbar
