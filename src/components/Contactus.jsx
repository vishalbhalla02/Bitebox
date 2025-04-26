import React from "react";
import img1 from "../images/contact.png";

function ContactUs() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      {/* Header */}
      <h1 className="text-3xl md:text-5xl font-semibold text-center mb-8">
        Contact Us
      </h1>

      <div className="flex flex-col md:flex-row md:max-w-4xl w-full bg-white  p-6 rounded-lg">
        {/* Left Side - Image */}
        <div className="flex justify-center items-center md:w-1/2 mb-6 md:mb-0">
          <img
            className="w-full h-auto max-w-[400px] rounded-lg"
            src={img1}
            alt="Contact Us"
          />
        </div>

        {/* Right Side - Form */}
        <div className="flex flex-col justify-evenly md:w-1/2 px-4 md:px-8">
          {/* Name Input */}
          <div className="mt-4">
            <input
              type="text"
              className="border-2 border-gray-300 px-3 py-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Name"
            />
          </div>

          {/* Email Input */}
          <div className="mt-4">
            <input
              type="email"
              className="border-2 border-gray-300 px-3 py-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Email"
            />
          </div>

          {/* Message Textarea */}
          <div className="mt-4">
            <textarea
              className="border-2 border-gray-300 px-3 py-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Type your message here"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-6">
            <button className="bg-orange-500 p-3 rounded-lg w-full md:w-1/2 text-white hover:bg-orange-600 transition">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
