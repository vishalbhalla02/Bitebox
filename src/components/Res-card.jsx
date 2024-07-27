import React from "react";
import img1 from "../images/star.png";

function ResCard({ name, img_id, rating, time, areaName }) {
  return (
    <div className="shadow-lg rounded-lg w-72 h-96 bg-slate-100 p-4 flex flex-col justify-between hover:bg-slate-200">
      <img
        className="rounded-lg w-64 h-64 object-cover"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          img_id
        }
        alt={name}
      />
      <h3 className="font-bold text-lg whitespace-nowrap overflow-hidden text-ellipsis">
        {name}
      </h3>
      <p>{areaName}</p>
      <div className="flex justify-between font-semibold">
        <div className="flex gap-1 items-center">
          <span>{rating}</span>
          <img className="h-[18px]" src={img1} alt="Rating star" />
        </div>
        <p>{`${time} mins`}</p>
      </div>
    </div>
  );
}

export default ResCard;
