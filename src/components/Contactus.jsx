import React from "react";
import img1 from "../images/contact.png";

function ContactUs() {
  return (
    <div className="flex flex-col md:flex-row md:max-w-4xl m-auto sm:mt-20 mt-14 h-[80vh]">
      <div className="flex justify-center items-center h-1/2 md:h-3/5 p-4 md:w-1/2">
        <img
          className="w-full h-auto max-w-[400px]"
          src={img1}
          alt="Contact Us"
        />
      </div>
      <div className="flex flex-col justify-evenly h-1/2 md:h-3/5 w-5/6 md:w-1/2 md:pe-8 md:p-4">
        <h1 className="text-3xl md:text-5xl font-semibold">Contact Us</h1>
        <div>
          <input
            type="text"
            className="border-2 border-black px-3 py-2 w-full rounded-lg"
            placeholder="Name"
          />
        </div>
        <div>
          <input
            type="email"
            className="border-2 border-black px-3 py-2 w-full rounded-lg"
            placeholder="Email"
          />
        </div>
        <div>
          <textarea
            className="border-2 border-black px-3 py-2 w-full rounded-lg"
            placeholder="Type your message here"
          />
        </div>
        <div className="flex justify-center">
          <button className="bg-orange-500 p-3 rounded-lg w-full md:w-1/2 text-white">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
