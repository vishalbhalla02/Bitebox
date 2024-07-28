import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Slider from "./Slider";
import Reload from "./Reload";
import img1 from "../images/star.png";

function Resmenu() {
  const [menu, setMenu] = useState(null);
  const { id } = useParams();

  const restaurantInfo = menu?.data?.cards?.[2]?.card?.card?.info ?? {};

  const cards =
    menu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards ?? []; //arrays

  // Fetching menu data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.61450&lng=77.30630&restaurantId=${id}`
        );
        const json = await response.json();
        setMenu(json);
      } catch (error) {
        console.error("Error fetching data: ", error);
        alert("API issue");
      }
    };

    fetchData();
  }, [id]);

  // If nothing is there, reload icon
  if (!menu) {
    return (
      <h1>
        <Reload />
      </h1>
    );
  }

  return (
    <div className="mt-16 sm:mt-[7em]">
      <div className="bg-slate-100 m-auto max-w-screen-md sm:w-4/5 rounded-lg p-2 sm:px-4 flex justify-between">
        <div className="flex flex-col justify-evenly">
          <h1 className="text-2xl sm:text-4xl">{restaurantInfo.name}</h1>
          <h3>{restaurantInfo.cuisines?.join(" ")}</h3>
          <div className="flex items-center font-semibold gap-6 sm:gap-7">
            <div className="flex gap-1 items-center">
              <h3 className="text-sm sm:text-base">
                {restaurantInfo.avgRating}
              </h3>
              <img className="h-5" src={img1} alt="Rating star" />
            </div>
            <div>
              <h3 className="text-xs sm:text-base">
                {restaurantInfo.costForTwoMessage}
              </h3>
            </div>
            <div
              className={`px-3 ${
                restaurantInfo.availability?.opened
                  ? "bg-green-300"
                  : "bg-red-300"
              } rounded-lg`}
            >
              <h3 className="text-xs sm:text-base">
                {restaurantInfo.availability?.opened ? "OPEN" : "CLOSED"}
              </h3>
            </div>
          </div>
        </div>
        <div className="p-1 flex justify-center items-center">
          <img
            className="w-full block h-full min-w-[100px] max-w-40 rounded-lg"
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
              restaurantInfo.cloudinaryImageId
            }
            alt={restaurantInfo.name}
          />
        </div>
      </div>
      <div>
        {cards.map((e, index) => {
          if (e.card.card.itemCards) {
            return <Slider key={index} data={e.card.card} />;
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default Resmenu;
