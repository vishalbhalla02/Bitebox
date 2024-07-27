import React from "react";
import img1 from "./../images/about.png";
function About() {
  return (
    <div className="mt-[7.5em] ">
      <div className="flex justify-center items-center max-w-screen-xl mx-auto lg:w-4/5 py-14 flex-col md:flex-row">
        <div className="flex flex-col justify-center text-2xl md:text-3xl lg:text-5xl">
          <h1 className="px-8 ">Welcome to </h1>
          <h1 className="px-8 p-2">The world of</h1>
          <h1 className=" p-2 md:p-4 lg:p-8 text-white bg-orange-400 rounded-2xl">
            Tasty & Fresh Food
          </h1>
        </div>
        <img className="p-2 md:p-12 w-3/4 md:w-1/2 h-full" src={img1} alt="" />
      </div>
      <footer className="bg-gray-200 w-full absolute bottom-0">
        <div className="m-auto w-64 ">
          <span>Created by ♥ Vishal Bhalla</span>
        </div>
      </footer>
    </div>
  );
}

export default About;
