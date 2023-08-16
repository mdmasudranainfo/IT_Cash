const HomeworkSubmit = () => {
  return (
    <div className="p-4">
      <div className="">
        <h1 className="text-3xl">Homework Submit</h1>
      </div>

      {/*  */}
      <div className="grid grid-cols-2 mt-5 gap-4">
        <div className="">
          <p>Course (Click to load...)</p>

          <select className="select select-bordered w-full mt-2">
            <option disabled selected>
              Who shot first?
            </option>
            <option>Han Solo</option>
            <option>Greedo</option>
          </select>
        </div>

        <div className="">
          <p>Batch (Click to load...)</p>

          <select className="select select-bordered w-full mt-2">
            <option disabled selected>
              Who shot first?
            </option>
            <option>Han Solo</option>
            <option>Greedo</option>
          </select>
        </div>
      </div>
      {/*  */}
      <div className="flex justify-center mt-5">
        <button className="btn bg-[#0d6efd] text-white hover:text-black duration-300 ease-in">
          Submit
        </button>
      </div>
    </div>
  )
}

export default HomeworkSubmit
