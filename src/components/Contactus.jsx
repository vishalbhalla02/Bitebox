import img1 from "../images/contact.png";

function ContactUs() {
  return (
    <div className="mt-4 flex h-screen flex-col items-center justify-center">
      {/* Header */}
      <h1 className="text-center text-3xl font-semibold">Contact Us</h1>

      <div className="sm:h-22 flex h-3/4 w-full min-w-[350px] flex-col items-center rounded-lg bg-slate-200 p-2 md:max-w-5xl md:flex-row md:justify-center md:text-2xl">
        {/* Left Side - Image */}
        <div className="flex h-1/2 w-[350px] items-center justify-center">
          <img className="h-full w-full" src={img1} alt="Contact Us" />
        </div>

        {/* Right Side - Form */}
        <div className="flex h-1/2 w-[350px] max-w-xl flex-col justify-around p-2 text-base">
          {/* Name Input */}
          <div className="">
            <input
              type="text"
              className="w-full rounded-lg border-2 border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Name"
            />
          </div>

          {/* Email Input */}
          <div className="">
            <input
              type="email"
              className="w-full rounded-lg border-2 border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Email"
            />
          </div>

          {/* Message Textarea */}
          <div className="">
            <textarea
              className="w-full rounded-lg border-2 border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Type your message here"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button className="w-full rounded-lg bg-orange-500 p-3 text-white transition hover:bg-orange-600 md:w-1/2">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
