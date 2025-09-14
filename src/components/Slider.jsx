import { useState } from "react";
import img1 from "../images/arrow_down.png";
import ExpandList from "./Expand_list";

function Slider({ data }) {
  const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    setShowItems((prev) => !prev);
  };

  return (
    <div className="mx-auto my-1 max-w-4xl rounded-lg p-4 sm:w-[90%] md:w-4/5">
      <div
        onClick={handleClick}
        className="flex cursor-pointer items-center justify-between hover:text-blue-600"
      >
        <span className="text-xs font-semibold sm:text-lg sm:font-bold">
          {data.title} ({data.itemCards.length})
        </span>
        <img
          className={`w-4 transition-transform duration-300 sm:w-5 ${
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
