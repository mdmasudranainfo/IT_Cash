const JoinClass = () => {
  return (
    <div className="p-4">
      <div className="">
        <h1 className="text-3xl">Join Class</h1>
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
    </div>
  )
}

export default JoinClass
