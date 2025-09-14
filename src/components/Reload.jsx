import { useEffect } from "react";

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
    <div className="flex min-h-screen items-center justify-center bg-white pt-8">
      <div className="flex flex-col items-center">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-dashed border-blue-400"></div>
        <p className="mt-2 animate-pulse text-sm font-medium text-blue-500">
          Loading, please wait...
        </p>
      </div>
    </div>
  );
}

export default Reload;
