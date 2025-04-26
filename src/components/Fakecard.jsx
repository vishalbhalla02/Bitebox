import React from "react";

function Fakecard() {
  return (
    <div className="shadow-lg rounded-lg w-72 h-96 bg-slate-100 p-4 space-y-4">
      {/* Fake image */}
      <div className="bg-gray-300 h-40 w-full rounded-md"></div>

      {/* Fake title */}
      <div className="bg-gray-300 h-5 w-3/4 rounded"></div>

      {/* Fake rating/time */}
      <div className="bg-gray-300 h-4 w-1/2 rounded"></div>

      {/* Fake location */}
      <div className="bg-gray-300 h-4 w-2/3 rounded"></div>

      {/* Optional bottom bar */}
      <div className="bg-gray-300 h-3 w-full rounded mt-auto"></div>
    </div>
  );
}

export default Fakecard;
