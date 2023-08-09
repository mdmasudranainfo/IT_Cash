import { BsGooglePlay } from 'react-icons/bs'

const Footer = () => {
  return (
    <div>
      <div className="container mx-auto py-5">
        <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-10">
          {/* contact */}
          <div className="text-sm">
            <h2 className="text-[20px] my-12">CONTACT</h2>
            <p className="text-[#969696] ">
              Yahya Tower (2nd Floor), 335, M.M. Ali Road CDA Avenue, Lalkhan
              Bazar, Chittagong-4000
            </p>
            <p className="my-3 text-[#969696] ">+880 172 666 666</p>
            <p className="text-[#969696] ">support@startsmart.study</p>
          </div>

          {/* COMPANY */}

          <div className="text-sm">
            <h2 className="text-[20px] my-12">COMPANY</h2>
            <p className="my-2 text-[#969696] hover:translate-x-2 duration-300">
              <a href="">About Us</a>
            </p>
            <p className="my-2 text-[#969696] hover:translate-x-2 duration-300">
              <a href="">Blog</a>
            </p>
            <p className="my-2 text-[#969696] hover:translate-x-2 duration-300">
              <a href="">Contact</a>
            </p>
            <p className="my-2 text-[#969696] hover:translate-x-2 duration-300">
              <a href="">Become a Teacher</a>
            </p>
          </div>

          {/* PROGRAMS */}

          <div className="text-sm">
            <h2 className="text-[20px] my-12">PROGRAMS</h2>
            <p className="my-2 text-[#969696] hover:translate-x-2 duration-300">
              <a href="">Nanodegree Plus</a>
            </p>
            <p className="my-2 text-[#969696] hover:translate-x-2 duration-300">
              <a href="">Veterans</a>
            </p>
            <p className="my-2 text-[#969696] hover:translate-x-2 duration-300">
              <a href="">Georgia</a>
            </p>
            <p className="my-2 text-[#969696] hover:translate-x-2 duration-300">
              <a href="">Self-Driving Car</a>
            </p>
          </div>

          {/* SUPPORT */}

          <div className="text-sm">
            <h2 className="text-[20px] my-12">SUPPORT</h2>
            <p className="my-2 text-[#969696] hover:translate-x-2 duration-300">
              <a href="">Documentation</a>
            </p>
            <p className="my-2 text-[#969696] hover:translate-x-2 duration-300">
              <a href="">Forums</a>
            </p>
            <p className="my-2 text-[#969696] hover:translate-x-2 duration-300">
              <a href="">Language Packs</a>
            </p>
            <p className="my-2 text-[#969696] hover:translate-x-2 duration-300">
              <a href="">Release Status</a>
            </p>
          </div>

          {/* MOBILE */}
          <div className="">
            <h2 className="text-[20px] my-12">MOBILE</h2>

            <div className="bg-black text-[#969696] hover:text-white duration-300 ease-linear hover:bg-[#369fdb] flex items-center gap-4 p-3 px-6 rounded">
              <BsGooglePlay className="text-4xl " />
              <div className="">
                <h2 className="text-[16px] ">Google Play</h2>
                <p className="text-sm ">Get in on </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
