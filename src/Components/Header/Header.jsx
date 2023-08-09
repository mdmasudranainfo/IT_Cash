import { AiOutlineUser } from 'react-icons/ai'
import { BsBagCheck } from 'react-icons/bs'
import { Link } from 'react-router-dom'

import wava from '../../assets/wave.png'
import './header.css'
import Navbar from '../Navbar/Navbar'

const Header = () => {
  return (
    <div className=" MainHeader relative text-white    ">
      <div className="container mx-auto">
        {/* top bar */}
        <div className="md:flex justify-between  hidden py-5">
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
      </div>

      <Navbar />

      {/* bannar start */}
      <div className="flex items-center justify-center py-52 ">
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
