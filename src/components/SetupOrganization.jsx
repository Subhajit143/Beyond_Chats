
import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { setStep } from "../store/onboardingSlice"
import img1 from "../assets/Untitled-30 (1).png"
import { RiEyeCloseLine } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { BiLeftArrowAlt } from "react-icons/bi";

const SetupOrganization = () => {
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
    dispatch(setStep(4))
  }
  const [websiteUrl, setWebsiteUrl] = useState("")
  const [description, setDescription] = useState("")


  const fetchMetaDescription = async () => {
    // Implement logic to fetch meta description
    // This is a placeholder and would require server-side implementation
    const fetchedDescription = "Auto-fetched meta description"
    setDescription(fetchedDescription)
  }
  const handleBack =()=>{
      dispatch(setStep(-1))
    }
  return (
    <div className="relative  min-h-screen   p-8 rounded-lg flex items-center justify-center">
      <button 
        onClick={handleBack} 
        className="absolute top-4 left-4 p-2 rounded-full hover:bg-gray-200 transition duration-300"
      >
        <BiLeftArrowAlt className="text-4xl text-gray-600" />
      </button>
    <div className="bg-gray-100 flex justify-between rounded-2xl shadow-lg max-w-3xl sm:max-w-6xl  p-5">
    <div className="sm:w-2/3 px-12 ">
    <h2 className="font-bold text-3xl sm:text-5xl text-[#259299]">Setup Organization</h2>
    <p className="text-sm sm:text-lg mt-4">Enter your Exsiting Company Detalils</p>
    <p></p>
    <form onSubmit={handleSubmit} className="text-lg">
        <div >
          
          <input
            type="text"
            id="companyName"
            name="companyName"
            placeholder="Company Name"
            required
            className="bg-white mt-8 p-3    block w-full rounded-xl  border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div >
        
        <input
            type="url"
            id="websiteUrl"
            name="websiteUrl"
            placeholder="Website URL"
            value={websiteUrl}
            onChange={(e) => setWebsiteUrl(e.target.value)}
            required
            className="bg-white mt-6 p-3   block w-full rounded-xl  border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div >
          
         <div className="">
         <textarea
            id="description"
            name="description"
            value={description}
            placeholder="Company Descrption"
            onChange={(e) => setDescription(e.target.value)}
            className="bg-white mt-6 p-3   block w-full rounded-xl  border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
          <button
            type="button"
            onClick={fetchMetaDescription}
            className="py-3 mt-2 text-sm sm:text-lg text-indigo-600 hover:text-indigo-800"
          >
            Auto-fetch description
          </button>
          
         </div>
        </div>
        <button
          type="submit"
          className="w-full bg-[#5EC1B9] sm:text-xl text-white py-2 px-4 rounded-2xl hover:bg-[#45717A] duration-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Submit
        </button>
      </form>
      <div className="mt-5 grid grid-cols-3 items-center text-gray-400">
      <hr className="border-gray-400" />
          <p className="text-center text-sm">OR</p>
          <hr className="border-gray-400" />
      </div>
      
    </div>

    <div className="sm:block hidden overflow-visible  sm:w-1/2 min-w-[300px] min-h-[500px] flex justify-center items-center">
      <img src={img1} alt="login page img" className=" rounded-2xl scale-105 h-auto  object-cover" />
    </div>
    </div>
    </div>
  )
}

export default SetupOrganization
