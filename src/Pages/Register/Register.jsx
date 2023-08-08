/* eslint-disable react/no-unescaped-entities */
import { useForm } from 'react-hook-form'

const Register = () => {
  const { register, handleSubmit } = useForm()
  const onSubmit = data => {
    console.log(data)
  }
  return (
    <div className="container mx-auto max-w-[1140px]">
      <h1 className="text-[#233d63] text-[18px] my-10 p-2 text-center bg-[#adb2bb4f] rounded-lg">
        {' '}
        Student Registration Form
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="">
        <div className="grid grid-cols-12">
          {/* Mobile Number* */}
          <div className="col-span-6">
            <p className="text-red-500">Mobile Number*</p>
            <div className="flex md:items-center md:flex-row flex-col md:gap-10 gap-2 mt-3">
              <input
                {...register('Number', { required: true })}
                className="border-2 rounded-md  p-2  focus:outline-none w-[300px] max-w-full"
                placeholder="Mobile Number"
                type="text"
              />

              <span className="text-xl text-[#51be78]">0</span>
              <input
                type="submit"
                className="btn w-[150px] max-w-full  bg-[#192675]  text-white hover:text-black ease-in duration-300 "
                value="Send OTP"
              />
            </div>
          </div>

          {/* OTP No */}
          <div className="col-span-6">
            <p className="text-red-500">OTP No*</p>
            <div className="flex md:flex-row flex-col md:items-center justify-between md:gap-10 gap-5 mt-3">
              <input
                {...register('OTP', { required: true })}
                className="border-2 rounded-md  p-2  focus:outline-none w-[300px] max-w-full"
                placeholder="OTP No"
                type="text"
              />

              <input
                type="submit"
                className="btn w-[150px] max-w-full  bg-[#192675]  text-white hover:text-black ease-in duration-300 "
                value="Verify"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-x-4">
          {/* Name */}
          <div className="col-span-6">
            <p className="text-red-500">Name*</p>
            <div className=" mt-3">
              <input
                {...register('Name', { required: true })}
                className="border-2 rounded-md  p-2  focus:outline-none w-full max-w-full"
                placeholder="Name*"
                type="text"
              />
            </div>
          </div>

          {/* Email  */}
          <div className="col-span-6">
            <p className="text-red-500">Email Address*</p>
            <div className=" mt-3">
              <input
                {...register('Email', { required: true })}
                className="border-2 rounded-md  p-2  focus:outline-none w-full max-w-full"
                placeholder="Email Address"
                type="text"
              />
            </div>
          </div>
        </div>
        {/* Address */}
        <div className="">
          <p className="text-red-500">Address</p>
          <div className=" mt-3">
            <input
              {...register('Address', { required: true })}
              className="border-2 rounded-md  p-2  focus:outline-none w-full max-w-full"
              placeholder="Address"
              type="text"
            />
          </div>
        </div>
        <div className="grid grid-cols-12">
          {/* Father */}
          <div className="col-span-6">
            <p className="">Father's Name</p>
            <div className=" mt-3">
              <input
                {...register('FatherName')}
                className="border-2 rounded-md  p-2  focus:outline-none w-full max-w-full"
                placeholder="Father's Name"
                type="text"
              />
            </div>
          </div>
          {/* Father's Contact No */}
          <div className="col-span-6">
            <p className="">Father's Contact No</p>
            <div className=" mt-3">
              <input
                {...register('Father_Contact')}
                className="border-2 rounded-md  p-2  focus:outline-none w-full max-w-full"
                placeholder="01xxxxxxxxx"
                type="text"
              />
            </div>
          </div>
        </div>
        {/* Guardian Name */}
        <div className="">
          <p className="">Guardian Name</p>
          <div className=" mt-3">
            <input
              {...register('GuardianName')}
              className="border-2 rounded-md  p-2  focus:outline-none w-full max-w-full"
              placeholder="Guardian Name"
              type="text"
            />
          </div>
        </div>
        {/* Guardian Contact No */}
        <div className="">
          <p className="">Guardian Contact No</p>
          <div className=" mt-3">
            <input
              {...register('GuardianContact')}
              className="border-2 rounded-md  p-2  focus:outline-none w-full max-w-full"
              placeholder="01xxxxxxxxx"
              type="text"
            />
          </div>
        </div>
        {/* District */}
        <div className="">
          <p className="">District</p>
          <div className=" mt-3">
            <select
              //   {...register('password', { required: true })}
              className="border-2 rounded-md  p-2 focus:outline-none w-full max-w-full"
              placeholder="01xxxxxxxxx"
              type="text"
            >
              <option value="">bangladesh</option>
              <option value="">bangladesh</option>
            </select>
          </div>
        </div>
        {/* Country */}
        <div className="">
          <p className="">Country</p>
          <div className=" mt-3">
            <select
              //   {...register('password', { required: true })}
              className="border-2 rounded-md  p-2  focus:outline-none w-full max-w-full"
              placeholder="01xxxxxxxxx"
              type="text"
            >
              <option value="">bangladesh</option>
              <option value="">bangladesh</option>
            </select>
          </div>
        </div>
        {/* Date of Birth */}
        <div className="lg:col-span-2">
          <p className="text-red-500">Date of Birth*</p>
          <div>
            <input
              name="date_of_birth"
              // onChange={handleRegisterInput}
              type="date"
              className="border"
              placeholder="Date of birth"
            />
          </div>
        </div>
        {/* Contact Person */}
        <div className="">
          <p className="text-red-500">Contact Person*</p>
          <div className=" mt-3">
            <input
              {...register('ContactPerson', { required: true })}
              className="border-2 rounded-md  p-2  focus:outline-none w-full max-w-full"
              placeholder="Contact Person*"
              type="text"
            />
          </div>
        </div>
        {/* NID No* */}
        <div className="">
          <p className="">NID No</p>
          <div className=" mt-3">
            <input
              //   {...register('password', { required: true })}
              className="border-2 rounded-md  p-2  focus:outline-none w-full max-w-full"
              placeholder="NID No*"
              type="text"
            />
          </div>
        </div>
        {/* Password */}
        <div className="lg:col-span-2 grid lg:grid-cols-3 gap-3">
          <div className="">
            <p className="text-red-500">Password*</p>
            <div className=" mt-3">
              <input
                {...register('password', { required: true })}
                className="border-2 rounded-md  p-2  focus:outline-none w-full max-w-full"
                placeholder="Password"
                type="text"
              />
            </div>
          </div>

          <div className="">
            <p className="text-red-500">Confirm Password*</p>
            <div className=" mt-3">
              <input
                {...register('Confirm_Password', { required: true })}
                className="border-2 rounded-md  p-2  focus:outline-none w-full max-w-full"
                placeholder="Confirm Password"
                type="text"
              />
            </div>
          </div>

          <div className="">
            <p className="text-red-500">what is the result of 40 + 20 ?*</p>
            <div className=" mt-3">
              <input
                {...register('what is the result of 40 + 20 ?', {
                  required: true,
                })}
                className="border-2 rounded-md  p-2  focus:outline-none w-full max-w-full"
                placeholder="Answer"
                type="text"
              />
            </div>
          </div>
        </div>

        <div className="">
          <input
            type="submit"
            className="btn w-[150px] max-w-full  bg-[#192675] capitalize  text-white hover:text-black ease-in duration-300 "
            value="Save"
          />
        </div>
      </form>
    </div>
  )
}

export default Register
