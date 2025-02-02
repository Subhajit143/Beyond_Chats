import React from "react";

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  ">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
      <div className=" flex flex-col text-center items-center font-semibold text-[#0F4B68]">
      <p>Scrapping Your Website </p>
      <p>Please Wait ...</p>
      </div>
    </div>
  );
};

export default Loader;
