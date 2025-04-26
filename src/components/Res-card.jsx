import React from "react";
import img1 from "../images/star.png";

function ResCard({ name, img_id, rating, time, areaName }) {
  const imageUrl = img_id
    ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${img_id}`
    : "https://via.placeholder.com/250x250?text=Image+Unavailable";

  return (
    <div className="shadow-lg rounded-xl w-72 h-96 bg-slate-100 p-4 flex flex-col justify-between transition-all duration-200 hover:bg-slate-200 hover:scale-[1.02]">
      <img
        className="rounded-lg w-full h-64 object-cover"
        src={imageUrl}
        alt={name}
        loading="lazy"
      />
      <h3 className="font-bold text-lg whitespace-nowrap overflow-hidden text-ellipsis mt-2">
        {name}
      </h3>
      <p className="text-sm text-gray-600 truncate">{areaName}</p>
      <div className="flex justify-between items-center font-semibold mt-1">
        <div className="flex gap-1 items-center">
          <span>{rating ?? "--"}</span>
          <img className="h-[18px]" src={img1} alt="Rating star" />
        </div>
        <p className="text-sm text-gray-700">{time ? `${time} mins` : "--"}</p>
      </div>
    </div>
  );
}

export default ResCard;
