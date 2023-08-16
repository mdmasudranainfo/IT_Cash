import { AiFillStar, AiOutlineComment } from "react-icons/ai";
import logo from "../../assets/logo.jpg";
import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./BrowseTopCourses.css";
import { useEffect, useState } from "react";
import { baseUrl } from "../../utils/commonFunc";
import { toast } from "react-toastify";
import CourseCart from "./CourseCart";

const BrowseTopCourses = () => {
  const [topCourse, setTopCourse] = useState(null);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${baseUrl.url}/student/course`, {
          method: "get",
        });
        const data = await res.json();
        if (res.ok) {
          console.log("first", data);
          setTopCourse(data.data);
        }
      } catch (error) {
        toast.error(error?.message);
      }
    };
    fetchData();
  }, [update]);

  console.log("datata", topCourse);

  return (
    <div className="container mx-auto mt-[50px]">
      <h1 className="text-center text-[26px] font-bold">
        Browse Our Top Courses
      </h1>
      <h2 className="underline text-center mt-5 text-[#2441e7]">Top Courses</h2>

      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  gap-5 mt-10">
    

        {
          topCourse?.map((course,i)=><CourseCart key={i} course={course}/>)

        }
      </div>

      {/* cards  */}
    </div>
  );
};

export default BrowseTopCourses;
