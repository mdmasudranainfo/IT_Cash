import {
  AiFillMessage,
  AiFillPlayCircle,
  AiFillSafetyCertificate,
  AiOutlineKey,
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineUser,
} from 'react-icons/ai'
import { GrMultimedia } from 'react-icons/gr'

import { Link } from 'react-router-dom'
import logo from '../../assets/logo.jpg'
import { Collapse } from 'react-collapse'
import { useState } from 'react'
import { BsFillLightningChargeFill } from 'react-icons/bs'

const CourseDetail = () => {
  const [accordion, setAccordion] = useState(false)
  return (
    <div className="my-[50px]">
      <div className="bg-[#E1E6EF] mx-5 rounded-md">
        <div className="flex gap-3 container mx-auto py-4 text-[15px]">
          <Link to="/">Home/</Link>
          <Link>Course/</Link>
          <Link className="text-[#7e7e7e]">
            Creative Graphics Design Course - Offline (Student)
          </Link>
        </div>
      </div>

      {/*  */}
      <div className="container mx-auto mt-[50px]">
        <div className="flex gap-10">
          {/*  */}
          <div className="w-[70%]">
            <h1 className="text-[26px] font-bol">
              Creative Graphics Design Course - Offline (Student)
            </h1>
            <button className="btn btn-sm bg-[#5CB85C] capitalize  text-white hover:text-black">
              Best Seller
            </button>
            <div className=" flex items-center gap-5 mt-5 text-sm text-[#7e7e7e]">
              <p className="flex items-center gap-1">
                <AiOutlineUser /> <span>57 students enrolled</span>
              </p>
              <p className="flex items-center gap-1">
                <AiFillMessage /> <span> 25 Review</span>
              </p>
            </div>

            {/* image */}

            <div className="">
              <img className="w-full mt-4" src={logo} alt="" />
            </div>

            {/* Overview */}
            <div className=" border p-5 mt-10">
              <h2 className="text-[20px] font-bold">Overview</h2>
              <h2 className="text-lg my-3">Course Description</h2>
              <p>
                Graphic Design - Offline (Student) Course Details: Total
                Classes: 22 Class Duration- 1.5 Hours Per week: 02 Class Class
                Room: Offline Lab Room
              </p>
            </div>

            {/*     Course Content */}
            <div className="mt-5 border p-5">
              <div className="flex justify-between ">
                <h1 className="text-[20px]">Course Content</h1>
                <p>24 Lectures</p>
              </div>

              <div className=" mt-4">
                {/* accordion */}

                <div
                  onClick={() => setAccordion(!accordion)}
                  className="flex justify-between bg-[#EDEFF7] p-4 cursor-pointer rounded"
                >
                  <h2>Getting Started</h2>
                  <span>
                    {!accordion ? <AiOutlinePlus /> : <AiOutlineMinus />}
                  </span>
                </div>
                {/* class item */}

                <Collapse isOpened={accordion}>
                  <div className="mt-4">
                    <p className="flex items-center gap-2 border-b py-5">
                      <AiFillPlayCircle className="text-2xl" />
                      <span>
                        1: Introducing with Photoshop, Document Setup & Related
                        tools
                      </span>
                    </p>

                    <p className="flex items-center gap-2 border-b py-5">
                      <AiFillPlayCircle className="text-2xl" />
                      <span>
                        1: Introducing with Photoshop, Document Setup & Related
                        tools
                      </span>
                    </p>
                  </div>
                </Collapse>

                {/* accordion */}
              </div>
            </div>
          </div>

          {/* cart */}

          <div className="w-[25%] ">
            <div className="border p-5">
              <div className="flex justify-between">
                <h2 className="text-[20px] text-[#333333]">Discount:</h2>
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white">
                  <span>50%</span>
                </div>
              </div>
              <h3>
                <del className="opacity-90 text-[20px]">৳17000</del>
              </h3>
              <h2 className="text-[30px] font-bold text-center">৳8500</h2>

              <div className="flex justify-center mt-4">
                <button className="btn rounded-full bg-[#5CB85C] text-white hover:text-black ease-linear duration-300">
                  Enroll Course
                </button>
              </div>
              <div className="text-[#7e7e7e] mt-4">
                <p>Includes</p>

                <p className="flex items-center gap-2 mt-2">
                  <AiOutlineKey />
                  <span> Full lifetime access</span>
                </p>
                <p className="flex items-center gap-2 mt-2">
                  <GrMultimedia />
                  <span> Full lifetime access</span>
                </p>
                <p className="flex items-center gap-2 mt-2">
                  <BsFillLightningChargeFill />
                  <span>Assignments</span>
                </p>
                <p className="flex items-center gap-2 mt-2">
                  <AiFillSafetyCertificate />
                  <span>Certificate of Completion</span>
                </p>
              </div>
            </div>

            <div className=" mt-10 pt-5 border">
              <h2 className="text-[20px]  px-5">Course Features</h2>
              <div className="">
                <p className="text-[15px] px-5 border-b py-3 flex justify-between">
                  <span>Lectures</span>{' '}
                  <span className="text-[#7e7e7e]"> 24</span>
                </p>
                <p className="text-[15px] px-5 border-b py-3 flex justify-between">
                  <span>Quizzes</span>{' '}
                  <span className="text-[#7e7e7e]"> 24</span>
                </p>
                <p className="text-[15px] px-5 border-b py-3 flex justify-between">
                  <span>Skill level</span>{' '}
                  <span className="text-[#7e7e7e]"> All level</span>
                </p>
                <p className="text-[15px] px-5 border-b py-3 flex justify-between">
                  <span>Assessments</span>{' '}
                  <span className="text-[#7e7e7e]">Yes</span>
                </p>
              </div>
            </div>
          </div>

          {/*  */}
        </div>
      </div>
    </div>
  )
}

export default CourseDetail
