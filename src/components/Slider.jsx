import { useState } from "react";
import img1 from "../images/arrow_down.png";
import ExpandList from "./Expand_list";

function Slider({ data }) {
  const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    setShowItems((prev) => !prev);
  };

  return (
    <div className="m-auto max-w-screen-md sm:w-4/5 my-4 bg-gray-50 shadow-lg p-4 rounded-lg transition duration-300">
      <div
        onClick={handleClick}
        className="flex justify-between items-center cursor-pointer hover:text-blue-600"
      >
        <span className="font-semibold sm:font-bold text-sm sm:text-lg">
          {data.title} ({data.itemCards.length})
        </span>
        <img
          className={`w-5 transition-transform duration-300 ${
            showItems ? "rotate-180" : ""
          }`}
          src={img1}
          alt="Toggle items"
        />
      </div>

      <hr className="my-2 border-gray-300" />

      {showItems && <ExpandList items={data.itemCards} page="Menu" />}
    </div>
  );
}

export default Slider;
