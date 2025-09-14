import img1 from "./../images/about.png";

function About() {
  return (
    <>
      {/* Hero Section */}
      <div className="flex h-screen flex-col items-center justify-center gap-4 lg:flex-row">
        {/* Text Section */}
        <div className="flex w-3/4 flex-col items-center rounded-md bg-slate-300 p-2 text-2xl sm:text-4xl lg:w-1/3 lg:p-8">
          <h1 className="">Welcome to</h1>
          <h1 className="">The world of</h1>
          <h1 className="rounded-lg bg-orange-400 p-2 text-white">
            Tasty & Fresh Food
          </h1>
        </div>

        {/* Image Section */}
        <div className="w-3/4 max-w-md">
          <img className="w-full" src={img1} alt="About Us" />
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-200">
        <div className="fixed bottom-0 left-0 w-full bg-gray-800 p-2 text-center text-white sm:text-base">
          <span>Created with ♥ using React</span>
        </div>
      </footer>
    </>
  );
}

export default About;
