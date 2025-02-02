import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { setStep } from "../store/onBoardingSlice"

const ChatbotIntegration = () => {
  const dispatch = useDispatch()
  const [showFeedback, setShowFeedback] = useState(false)

  const handleTestChatbot = () => {
    // Logic to open a new window with the dummy chatbot
    window.open("https://example.com/test-chatbot", "_blank")
  }

  const handleContinue = () => {
    dispatch(setStep(6))
  }

  return (
  <>
  
    <h2 className="text-2xl sm:text-4xl font-semibold m-6 md:pl-28  opacity-45">Chatbot Integration & Testing</h2>
    <hr className="w-full fixed left-0 border-gray-300" />
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg text-xl">
      

      <button
        onClick={handleTestChatbot}
        className="mb-4 sm:text-xl bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Test Chatbot
      </button>

      <div className="mb-6">
        <button onClick={() => setShowFeedback(!showFeedback)} className="text-indigo-600 text-xl hover:text-indigo-800">
          {showFeedback ? "Hide Feedback" : "Show Feedback"}
        </button>
        {showFeedback && (
          <div className="mt-2 p-4 bg-gray-100 rounded">
            <h3 className="font-medium  mb-2">Feedback</h3>
            <textarea className="w-full p-2 border rounded" placeholder="Enter your feedback here..." />
          </div>
        )}
      </div>

      <div className="mb-6">
        <h3 className="font-medium mb-2">Integration Instructions</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
          {`<script src="https://your-chatbot-url.com/script.js"></script>`}
        </pre>
        <button className="mt-2 text-indigo-600 hover:text-indigo-800">Email Instructions to Developer</button>
      </div>

      <button
        onClick={handleContinue}
        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Continue to Integration Test
      </button>
    </div>
  </>
  )
}

export default ChatbotIntegration

