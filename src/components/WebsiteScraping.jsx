import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { setStep } from "../store/onBoardingSlice"
import Navbar from "./Navbar"

const WebsiteScraping = () => {
  const dispatch = useDispatch()
  const [selectedPage, setSelectedPage] = useState(null)

  // Dummy data for demonstration
  const pages = [
    { id: 1, url: "https://example.com", status: "detected" },
    { id: 2, url: "https://example.com/about", status: "scraped" },
    { id: 3, url: "https://example.com/contact", status: "pending" },
  ]

  const handlePageClick = (page) => {
    setSelectedPage(page)
  }

  const handleContinue = () => {
    dispatch(setStep(5))
  }

  return (
    <>
   
    <h2 className="text-2xl sm:text-4xl font-semibold m-6 md:pl-28  opacity-45">Website Scraping</h2>
    <hr className="w-full fixed left-0 border-gray-300" />
   


    <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg ">
      
      <div className="grid grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg sm:text-4xl font-medium mb-4">Detected Pages</h3>
          <ul className="space-y-2">
            {pages.map((page) => (
              <li
                key={page.id}
                className={`p-2 rounded cursor-pointer ${selectedPage?.id === page.id ? "bg-indigo-100" : "hover:bg-gray-100"}`}
                onClick={() => handlePageClick(page)}
              >
                {page.url} - {page.status}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg sm:text-4xl font-medium mb-4">Scraped Data</h3>
          {selectedPage ? (
            <div>
              <h4 className="font-medium">{selectedPage.url}</h4>
              <p>Scraped data chunks would be displayed here.</p>
            </div>
          ) : (
            <p>Select a page to view scraped data.</p>
          )}
        </div>
      </div>
      <button
        onClick={handleContinue}
        className="mt-8 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Continue to Chatbot Integration
      </button>
    </div>
    </>
  )
}

export default WebsiteScraping

