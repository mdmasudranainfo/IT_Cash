import { AiFillStar, AiOutlineComment } from 'react-icons/ai'
import logo from '../../assets/logo.jpg'
import { AiOutlineUser } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  return (
    <div className="container mx-auto mt-[50px]">
      <h1 className="text-center text-[26px] font-bold">
        Browse Our Top Courses
      </h1>
      <h2 className="underline text-center mt-5 text-[#2441e7]">Top Courses</h2>

      {/* cards  */}
      <div className="grid grid-cols-4 gap-5">
        <div className="shadow-md rounded-md courseBox">
          <div className="relative h-44">
            {/* absulate start  */}

            <button className="absolute left-3 top-3 bg-[#c75533] hover:text-black text-white btn btn-sm capitalize bestSeller opacity-0">
              Best Seller
            </button>
            <div className="absolute w-full flex items-center justify-center  h-full bg-[#0000006b] p-5 left-0 top-0 priview">
              <Link className="text-white">Course Preview</Link>
            </div>
            {/* absulate end  */}

            <img src={logo} alt="" />
          </div>
          <div className="p-5">
            <h2 className="text-lg ">
              Creative Graphics Design Course - Offline Student
            </h2>
            <div className=" flex items-center gap-1">
              <AiFillStar className="text-[#d0d23c] text-xl" />
              <AiFillStar className="text-[#d0d23c] text-xl" />
              <AiFillStar className="text-[#d0d23c] text-xl" />
              <AiFillStar className="text-[#d0d23c] text-xl" />
              <AiFillStar className="text-[#d0d23c] text-xl" />
              <span>(6)</span>
            </div>
            <button className="btn bg-[#28a745] text-white mt-4 hover:text-black ease-in duration-300 capitalize btn-sm">
              Enroll Now
            </button>
            <div className="flex  justify-between items-center pt-2 mt-3 border-t-2">
              <div className="flex gap-2">
                <AiOutlineUser className="text-xl" />
                <span>300</span>
              </div>
              <div className="flex gap-2">
                <AiOutlineComment className="text-xl" />
                <span>300</span>
              </div>
              <div className="text-[#c75533] text-lg font-bold">৳7500</div>
              <div className="text-sm">
                <del>৳8000</del>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
