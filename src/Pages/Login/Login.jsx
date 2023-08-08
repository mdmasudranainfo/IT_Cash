/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

const Login = () => {
  const { register, handleSubmit } = useForm()
  const onSubmit = data => {
    console.log(data)
  }

  return (
    <div className="container mx-auto">
      <div className="flex flex-col justify-center items-center ">
        <div className="max-w-[350px]">
          <h1 className="text-[25px] text-[#233d63] font-bold text-center">
            Login to your account
          </h1>

          <p className="mt-1  text-center">
            Don't have an account?{' '}
            <Link to="/register" className="text-[#233d63] underline ">
              Sign Up!
            </Link>
          </p>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
            <input
              {...register('number', { required: true })}
              className="border-2 min-w-full p-3  focus:outline-none"
              placeholder="Mobile Number"
              type="text"
            />
            <input
              {...register('password', { required: true })}
              className="border-2 min-w-full p-3 mt-5  focus:outline-none"
              placeholder="Password"
              type="password"
            />
            <div className="mt-5 flex justify-between">
              <p className="flex items-center gap-2">
                {' '}
                <input type="checkbox" className="checkbox" />
                Remember Me
              </p>
              <p className="text-red-500">Forget Password?</p>
            </div>
            <input
              type="submit"
              className="btn w-full bg-[#192675] mt-5 text-white hover:text-black ease-in duration-300"
              value="Login"
            />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
