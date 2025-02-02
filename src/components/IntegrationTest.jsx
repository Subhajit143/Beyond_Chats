import React, { useState } from "react"
import Confetti from "react-confetti"
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa"

const IntegrationTest = () => {
  const [testStatus, setTestStatus] = useState(null)

  const handleTestIntegration = () => {
    // Simulate integration test
    setTimeout(() => {
      const success = Math.random() > 0.5
      setTestStatus(success ? "success" : "failure")
    }, 2000)
  }

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg  text-center">
      <h2 className="text-3xl font-semibold mb-6 text-gray-800">Integration Test</h2>

      <button
        onClick={handleTestIntegration}
        className="mb-6 bg-indigo-600 text-white text-lg py-2 px-6 rounded-md hover:bg-indigo-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Test Integration
      </button>

      {testStatus === "success" && (
        <>
          <Confetti />
          <div className="text-center mt-6">
            <h3 className="text-2xl font-medium text-green-600 mb-4">Integration Successful! 🎉</h3>
            <p className="text-gray-600 mb-6">Everything is set up and ready to go!</p>

            <div className="flex justify-center gap-4 mb-6 px-4">
              <button className="bg-indigo-600 text-white text-lg py-2 px-5 rounded-md hover:bg-indigo-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                Go to Admin Panel
              </button>
              <button className="bg-green-600 text-white text-lg py-2 px-5 rounded-md hover:bg-green-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-500">
                Start Chat
              </button>
            </div>

            {/* Social Media Sharing Buttons */}
            <h4 className="text-lg font-semibold text-gray-700 mb-4">Share your success!</h4>
            <div className=" flex justify-center gap-6">
              <a
                href="https://www.linkedin.com/sharing/share-offsite/?url=yourwebsite.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-700 text-white flex items-center gap-2 px-4 py-2 rounded-md hover:bg-blue-800 transition duration-300"
              >
                <FaLinkedin className="text-2xl" /> <h1 className="hidden sm:block">Share on LinkedIn</h1>
              </a>
              <a
                href="https://www.facebook.com/sharer/sharer.php?u=yourwebsite.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white flex items-center gap-2 px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
              >
                <FaFacebook className="text-2xl" /> <h1 className="hidden sm:block">Share on Facebook</h1>
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-pink-600 text-white flex items-center gap-2 px-4 py-2 rounded-md hover:bg-pink-700 transition duration-300"
              >
                <FaInstagram className="text-2xl" /> <h1 className="hidden sm:block">Share on Instagram</h1>
              </a>
            </div>
          </div>
        </>
      )}

      {testStatus === "failure" && (
        <div className="text-center mt-6">
          <h3 className="text-2xl font-medium text-red-600 mb-4">Integration Failed ❌</h3>
          <p className="text-gray-600 mb-4">Don't worry! Try the following options:</p>

          <div className="flex justify-center gap-4">
            <button className="bg-indigo-600 text-white text-lg py-2 px-6 rounded-md hover:bg-indigo-700 transition duration-300">
              Retry Integration
            </button>
            <button className="bg-gray-600 text-white text-lg py-2 px-6 rounded-md hover:bg-gray-700 transition duration-300">
              Troubleshoot
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default IntegrationTest
