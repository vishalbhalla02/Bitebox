import img1 from "../images/star.png";

function ResCard({ name, img_id, rating, time, areaName }) {
  const imageUrl = img_id
    ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${img_id}`
    : "https://via.placeholder.com/250x250?text=Image+Unavailable";

  return (
    <div className="flex w-full max-w-40 flex-col justify-between rounded-xl bg-slate-300 p-4 shadow-lg transition-all duration-200 hover:scale-[1.02] hover:bg-slate-200 sm:max-w-60 md:max-w-72">
      <img
        className="h-full w-full rounded-lg object-cover"
        src={imageUrl}
        alt={name}
        loading="lazy"
      />
      <h3 className="mt-2 overflow-hidden text-ellipsis whitespace-nowrap text-lg font-bold">
        {name}
      </h3>
      <p className="truncate text-sm text-gray-600">{areaName}</p>
      <div className="mt-1 flex items-center justify-between font-semibold">
        <div className="flex items-center gap-1">
          <span>{rating ?? "--"}</span>
          <img className="h-[18px]" src={img1} alt="Rating star" />
        </div>
        <p className="text-sm text-gray-700">{time ? `${time} mins` : "--"}</p>
      </div>
    </div>
  );
}

export default ResCard;
