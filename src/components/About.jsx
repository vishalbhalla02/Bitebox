import React from "react";
import img1 from "./../images/about.png";

function About() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      {/* Hero Section */}
      <div className="mt-[7.5em] flex flex-col md:flex-row justify-center items-center max-w-screen-xl mx-auto px-6 py-14">
        {/* Text Section */}
        <div className="flex flex-col justify-center text-2xl md:text-3xl lg:text-5xl text-center md:text-left">
          <h1 className="px-4 md:px-8">Welcome to</h1>
          <h1 className="px-4 md:px-8 p-2">The world of</h1>
          <h1 className="p-2 md:p-4 lg:p-8 text-white bg-orange-400 rounded-2xl">
            Tasty & Fresh Food
          </h1>
        </div>

        {/* Image Section */}
        <div className="p-2 md:p-12 w-full md:w-1/2 flex justify-center">
          <img
            className="w-full h-auto rounded-lg "
            src={img1}
            alt="About Us"
          />
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-200 w-full py-4">
        <div className="text-center">
          <span>Created with ♥ using React</span>
        </div>
      </footer>
    </div>
  );
}

export default About;
