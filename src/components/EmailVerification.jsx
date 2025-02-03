


import React from "react"
import { useDispatch } from "react-redux"
import { setStep } from "../store/onboardingSlice"
import img1 from "../assets/image.png"
import { RiEyeCloseLine } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { BiLeftArrowAlt } from "react-icons/bi";

const EmailVerification = () => {
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
    dispatch(setStep(3))
  }

  const OTP_LENGTH = 4;
  const otpInputs = Array(OTP_LENGTH).fill("");

  const handleChange = (e, index) => {
    const { value } = e.target;
    if (value.match(/^[0-9]$/)) {
      e.target.value = value;
      if (index < OTP_LENGTH - 1) {
        e.target.nextElementSibling?.focus();
      }
    } else {
      e.target.value = "";
    }
  };

  const handleBackspace = (e, index) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      e.target.previousElementSibling?.focus();
    }
  };

  const handleBack =()=>{
    dispatch(setStep(1))
  }

  return (
    <>
    
    <div className="relative min-h-screen   p-8 rounded-lg flex items-center justify-center">
     <button 
            onClick={handleBack} 
            className="absolute top-4 left-4 p-2 rounded-full hover:bg-gray-200 transition duration-300"
          >
            <BiLeftArrowAlt className="text-4xl text-gray-600" />
          </button>
    <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl sm:max-w-6xl   ">
    <div className="sm:w-1/2 px-12 py-10">
    <h2 className="font-bold text-3xl sm:text-5xl text-[#7E6EF7]">Enter OTP</h2>
    <p className="text-sm sm:text-lg  mt-8">We send One Time Password on your register Email .</p>
    <p></p>
    <div className="flex justify-center gap-2 mt-5">
          {otpInputs.map((_, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              className="w-15 h-15 text-lg text-center border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleBackspace(e, index)}
            />
          ))}
        </div>

        <button onClick={handleSubmit} className="sm:text-xl mt-6 bg-blue-500 text-white py-2 px-4 rounded-lg w-full hover:bg-blue-600 transition">
          Verify OTP
        </button>
      <div className="mt-5 grid grid-cols-3 items-center text-gray-400">
      <hr className="border-gray-400" />
          <p className="text-center text-sm">OR</p>
          <hr className="border-gray-400" />
      </div>
      <div className="mt-4 mb-8">
        <button className="w-full bg-white py-2 sm:text-xl  rounded-2xl  duration-500 focus:outline-none focus:ring-2 mt-5 flex justify-center items-center text-sm">
        <FcGoogle className="mr-2" />
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
      <img src={img1} alt="login page img" className=" rounded-2xl  object-cover h-auto" />
    </div>
    </div>
    </div>
    </>
  )
}

export default EmailVerification
