import React, { useEffect } from "react";

function Reload() {
  useEffect(() => {
    // Disable scrolling when the loading screen is displayed
    document.body.style.overflow = "hidden";

    // Enable scrolling after the loading screen is removed (optional, in case needed)
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-white pt-8">
      <div className="flex flex-col items-center">
        <div className="w-10 h-10 border-4 border-blue-400 border-dashed rounded-full animate-spin"></div>
        <p className="mt-2 text-blue-500 text-sm font-medium animate-pulse">
          Loading, please wait...
        </p>
      </div>
    </div>
  );
}

export default Reload;
