/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { baseUrl, getDataFor, type } from "../../utils/commonFunc";
import { country, district } from "../../utils/staticData";
import { toast } from "react-toastify";

const Register = () => {
  const [number, setNumber] = useState();
  const [varificationCode, setVarificationCode] = useState(null);
  const [userCode, setUserCode] = useState("");
  const [activeForm, setActiveForm] = useState(false);
  // REGISTRATION FORM DATA
  const [registrationData, setRegistrationData] = useState({});

  const handleVarifyNumber = async (e) => {
    e.preventDefault();
    if (number === null || number?.length < 10 || number === undefined) {
      toast.error("Invalid number");
      return;
    }
    const crudType = type("POST", { type: "form", data: { phone: number } });
    const { data, message } = await getDataFor(
      `${baseUrl.url}/verify/code`,
      crudType
    );
    toast.success(message);
    setVarificationCode(data);
  };

  const matchCodeFromUser = (e) => {
    e.preventDefault();
    if (+varificationCode === +userCode) {
      toast.success("Successfull in varification");
      setActiveForm(true);
    }
  };

  const handleRegisterInput = (e) => {
    setRegistrationData({
      ...registrationData,
      [e.target.name]: e.target.value,
    });
  };
  const handleRegister = async (e) => {
    e.preventDefault();
    if (+registrationData.result !== 29) {
      return;
    }
    registrationData.mobile = number;
    delete registrationData.result;
    const crudType = type("POST", { type: "form", data: registrationData });
    const { message } = await getDataFor(
      `${baseUrl.url}/student/register`,
      crudType
    );
    toast.success(message);
  };

  return (
    <div className="container mx-auto max-w-[1140px] px-4">
      <h1 className="text-[#233d63] text-[18px] my-10 p-2 text-center bg-[#adb2bb4f] rounded-lg">
        {" "}
        Student Registration Form
      </h1>

      <div className="grid grid-cols-12">
        <form
          className="lg:col-span-6 col-span-12 mt-4"
          onSubmit={handleVarifyNumber}
        >
          {/* Mobile Number* */}
          <div className="">
            <p className="text-red-500">Mobile Number*</p>
            <div className="flex md:items-center md:flex-row flex-col lg:gap-10 gap-2 mt-3">
              <input
                // {...register("Number", { required: true })}
                onChange={(e) => setNumber(e.target.value)}
                className="border-2 rounded-md  p-2  focus:outline-none md:w-[300px] max-w-full"
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
        </form>

        {/* OTP No */}
        <form
          onSubmit={matchCodeFromUser}
          className="lg:col-span-6 col-span-12 mt-4"
        >
          <p className="text-red-500">OTP No*</p>
          <div className="flex md:flex-row flex-col md:items-center lg:justify-between md:gap-10 gap-5 mt-3">
            <input
              onChange={(e) => setUserCode(e.target.value)}
              className="border-2 rounded-md  p-2  focus:outline-none md:w-[300px] max-w-full"
              placeholder="OTP No"
              type="text"
            />

            <input
              type="submit"
              className="btn w-[150px] max-w-full  bg-[#192675]  text-white hover:text-black ease-in duration-300 "
              value="Verify"
            />
          </div>
        </form>
      </div>

      {/* register start */}
      {activeForm && (
        <form onSubmit={handleRegister}>
          <div className="grid grid-cols-12 gap-x-4">
            {/* Name */}
            <div className="md:col-span-6 col-span-12 mt-4">
              <p className="text-red-500">Name*</p>
              <div className=" mt-3">
                <input
                  name="name"
                  onChange={handleRegisterInput}
                  className="border-2 rounded-md  p-2  focus:outline-none w-full max-w-full"
                  placeholder="Name*"
                  type="text"
                />
              </div>
            </div>

            {/* Email  */}
            <div className="md:col-span-6 col-span-12 mt-4">
              <p className="text-red-500">Email Address*</p>
              <div className=" mt-3">
                <input
                  name="email"
                  onChange={handleRegisterInput}
                  className="border-2 rounded-md  p-2  focus:outline-none w-full max-w-full"
                  placeholder="Email Address"
                  type="text"
                />
              </div>
            </div>
          </div>
          {/* Address */}
          <div className="mt-4">
            <p className="text-red-500">Address</p>
            <div className=" mt-3">
              <input
                name="address"
                onChange={handleRegisterInput}
                className="border-2 rounded-md  p-2  focus:outline-none w-full max-w-full"
                placeholder="Address"
                type="text"
              />
            </div>
          </div>

          <div className="grid grid-cols-12 gap-x-4">
            {/* Father */}
            <div className="md:col-span-6 col-span-12 mt-4">
              <p className="">Father's Name</p>
              <div className=" mt-3">
                <input
                  name="father_name"
                  onChange={handleRegisterInput}
                  className="border-2 rounded-md  p-2  focus:outline-none w-full max-w-full"
                  placeholder="Father's Name"
                  type="text"
                />
              </div>
            </div>
            {/* Father's Contact No */}
            <div className="md:col-span-6 col-span-12 mt-4">
              <p className="">Father's Contact No</p>
              <div className=" mt-3">
                <input
                  name="father_number"
                  onChange={handleRegisterInput}
                  className="border-2 rounded-md  p-2  focus:outline-none w-full max-w-full"
                  placeholder="01xxxxxxxxx"
                  type="text"
                />
              </div>
            </div>
          </div>

          <div className=" grid grid-cols-12 gap-x-4">
            {/* Guardian Name */}
            <div className="  md:col-span-6 col-span-12 mt-4">
              <p className="">Guardian Name</p>
              <div className=" mt-3">
                <input
                  name="guardian_name"
                  onChange={handleRegisterInput}
                  className="border-2 rounded-md  p-2  focus:outline-none w-full max-w-full"
                  placeholder="Guardian Name"
                  type="text"
                />
              </div>
            </div>
            {/* Guardian Contact No */}
            <div className=" md:col-span-6 col-span-12 mt-4">
              <p className="">Guardian Contact No</p>
              <div className=" mt-3">
                <input
                  name="guardian_number"
                  onChange={handleRegisterInput}
                  className="border-2 rounded-md  p-2  focus:outline-none w-full max-w-full"
                  placeholder="01xxxxxxxxx"
                  type="text"
                />
              </div>
            </div>
          </div>
          <div className=" grid grid-cols-12 gap-x-4">
            {/* District */}
            <div className="  md:col-span-6 col-span-12 mt-4">
              <p className="">District</p>
              <div className=" mt-3">
                <select
                  name="district"
                  onChange={handleRegisterInput}
                  className="border-2 rounded-md  p-2 focus:outline-none w-full max-w-full"
                  placeholder="01xxxxxxxxx"
                  type="text"
                >
                  {district.map((opt, i) => {
                    const { value, label } = opt;
                    return (
                      <option key={i} value={value}>
                        {label}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            {/* Country */}
            <div className=" md:col-span-6 col-span-12 mt-4">
              <p className="">Country</p>
              <div className=" mt-3">
                <select
                  name="country"
                  onChange={handleRegisterInput}
                  className="border-2 rounded-md  p-2  focus:outline-none w-full max-w-full"
                  placeholder="01xxxxxxxxx"
                  type="text"
                >
                  {country.map((opt, i) => {
                    const { value, label } = opt;
                    return (
                      <option key={i} value={value}>
                        {label}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
          </div>
          {/* Date of Birth */}
          <div className="">
            <p className="text-red-500">Date of Birth*</p>
            <div>
              <input
                name="date_of_birth"
                onChange={handleRegisterInput}
                type="date"
                className="border"
                placeholder="Date of birth"
              />
            </div>
          </div>

          <div className="grid grid-cols-12 gap-x-4">
            {/* Contact Person */}
            <div className=" md:col-span-6 col-span-12 mt-4">
              <p className="text-red-500">Contact Person*</p>
              <div className=" mt-3">
                <input
                  name="contact_person"
                  onChange={handleRegisterInput}
                  className="border-2 rounded-md  p-2  focus:outline-none w-full max-w-full"
                  placeholder="Contact Person*"
                  type="text"
                />
              </div>
            </div>
            {/* NID No* */}
            <div className=" md:col-span-6 col-span-12 mt-4">
              <p className="">NID No</p>
              <div className=" mt-3">
                <input
                  name="nid_no"
                  onChange={handleRegisterInput}
                  className="border-2 rounded-md  p-2  focus:outline-none w-full max-w-full"
                  placeholder="NID No*"
                  type="text"
                />
              </div>
            </div>
          </div>
          {/* Password */}
          <div className="grid grid-cols-12 gap-x-4">
            <div className=" md:col-span-4 col-span-12 mt-4">
              <p className="text-red-500">Password*</p>
              <div className=" mt-3">
                <input
                  name="password"
                  onChange={handleRegisterInput}
                  className="border-2 rounded-md  p-2  focus:outline-none w-full max-w-full"
                  placeholder="Password"
                  type="text"
                />
              </div>
            </div>

            <div className=" md:col-span-4 col-span-12 mt-4">
              <p className="text-red-500">Confirm Password*</p>
              <div className=" mt-3">
                <input
                  name="confirm_password"
                  onChange={handleRegisterInput}
                  className="border-2 rounded-md  p-2  focus:outline-none w-full max-w-full"
                  placeholder="Confirm Password"
                  type="text"
                />
              </div>
            </div>

            <div className=" md:col-span-4 col-span-12 mt-4">
              <p className="text-red-500">what is the result of 40 + 20 ?*</p>
              <div className=" mt-3">
                <input
                  name="result"
                  onChange={handleRegisterInput}
                  className="border-2 rounded-md  p-2  focus:outline-none w-full max-w-full"
                  placeholder="Answer"
                  type="text"
                />
              </div>
            </div>
          </div>

          <div className=" mt-5">
            <input
              type="submit"
              className="btn w-[150px] max-w-full  bg-[#192675] capitalize  text-white hover:text-black ease-in duration-300 "
              value="Submit"
            />
          </div>
        </form>
      )}
    </div>
  );
};

export default Register;
