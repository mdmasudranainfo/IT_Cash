const ActiveCourses = () => {
  return (
    <div className="px-4">
      <div className="">
        <h1 className="text-2xl">Hello, Mehadi Hasan !</h1>
        <h1 className="text-2xl">Student ID : 120858</h1>
      </div>

      <div className="mt-10">
        <h1 className="text-2xl  text-center text-[#0d6efd]">
          Your Active Courses
        </h1>
      </div>

      {/* table start*/}
      <div className="overflow-x-auto mt-4">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-[16px]">
              <th>#Invoice</th>
              <th> Date</th>
              <th> Total Amount</th>
              <th> Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr className="hover:bg-[#ECECEC]">
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* table end*/}
    </div>
  )
}

export default ActiveCourses
