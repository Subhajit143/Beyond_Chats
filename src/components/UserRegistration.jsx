import React from "react"
import { useDispatch } from "react-redux"
import { setStep } from "../store/onboardingSlice"
import img1 from "../assets/Untitled-30.png"
import { RiEyeCloseLine } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";

const UserRegistration = () => {
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
    dispatch(setStep(2))
  }

  return (
    <div className="min-h-screen   p-8 rounded-lg flex items-center justify-center">
      
    <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-2xl sm:max-w-6xl  p-5">
    <div className="sm:w-1/2 px-12 ">
    <h2 className="font-bold text-3xl sm:text-5xl text-[#C65A61]">Login</h2>
    <p className="text-sm sm:text-lg mt-4">If you already a member. Easily log in</p>
    <p></p>
    <form onSubmit={handleSubmit} className="text-xl">
        <div >
          
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            required
            className="bg-white mt-6 p-3   block w-full rounded-xl  border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div >
        
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
            className="bg-white mt-6 p-3  block w-full rounded-xl border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div >
          
         <div className="relative">
         <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            required
            className="bg-white mt-6 mb-6 p-3  block w-full rounded-xl border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
          <RiEyeCloseLine className="absolute top-1/2 right-3 -translate-y-1/2" />
         </div>
        </div>
        <button
          type="submit"
          className="sm:text-xl w-full bg-[#5EC1B9] text-white py-2 px-4 rounded-2xl hover:bg-[#45717A] duration-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Login
        </button>
      </form>
      <div className="mt-5 grid grid-cols-3 items-center text-gray-400">
      <hr className="border-gray-400" />
          <p className="text-center text-sm">OR</p>
          <hr className="border-gray-400" />
      </div>
      <div className="mt-4">
        <button className="w-full bg-white py-2  rounded-2xl  duration-500 focus:outline-none focus:ring-2 mt-5 flex justify-center items-center text-lg">
        <FcGoogle className="mr-2 mt-1" />
          Login with Google
        </button>
        <div className="flex justify-between">
        <p className="text-sm mt-4 ">Forgot your password ?  </p>
        <button className="text-blue-800 underline mt-4">
          Register
        </button>
        </div>
      </div>
    </div>

    <div className="sm:block hidden  sm:w-1/2">
      <img src={img1} alt="login page img" className=" rounded-2xl scale-105 object-cover h-auto" />
    </div>
    </div>
    </div>
  )
}

export default UserRegistration

