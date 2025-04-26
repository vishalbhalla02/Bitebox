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
    menu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards ||
    menu?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards ||
    [];

  // Fetching menu data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://food-del-backend-xe66.onrender.com/api/menu/${id}`
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

  if (!menu) {
    return (
      <div className="mt-16 sm:mt-[7em] flex justify-center items-center">
        <Reload />
      </div>
    );
  }

  return (
    <div className="mt-16 sm:mt-[7em]">
      {/* Restaurant Info */}
      <div className="bg-slate-100 m-auto max-w-screen-md sm:w-4/5 rounded-lg p-2 sm:px-4 flex justify-between animate-fade-in">
        <div className="flex flex-col justify-evenly">
          <h1 className="text-2xl sm:text-4xl font-semibold">
            {restaurantInfo.name || "Restaurant Name"}
          </h1>
          <h3 className="text-sm sm:text-base text-gray-700">
            {restaurantInfo.cuisines?.join(", ") || "Cuisine info"}
          </h3>
          <div className="flex items-center font-semibold gap-6 sm:gap-7 mt-2">
            <div className="flex gap-1 items-center">
              <h3 className="text-sm sm:text-base">
                {restaurantInfo.avgRating ?? "--"}
              </h3>
              <img className="h-5" src={img1} alt="Rating star" />
            </div>
            <div>
              <h3 className="text-xs sm:text-base text-gray-600">
                {restaurantInfo.costForTwoMessage ?? "--"}
              </h3>
            </div>
            <div
              className={`px-3 py-1 ${
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
        <div className="p-1 flex justify-center items-center transition-all">
          <img
            className="w-full block h-full min-w-[100px] max-w-40 rounded-lg"
            src={
              restaurantInfo.cloudinaryImageId
                ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restaurantInfo.cloudinaryImageId}`
                : "https://via.placeholder.com/150" // fallback image
            }
            alt={restaurantInfo.name}
          />
        </div>
      </div>

      {/* Menu Cards */}
      <div className="mt-6">
        {cards.filter((card) => card.card.card.itemCards).length > 0 ? (
          cards.map((e, index) => {
            if (e.card.card.itemCards) {
              return <Slider key={index} data={e.card.card} />;
            }
            return null;
          })
        ) : (
          <div className="text-center text-lg text-gray-600 mt-10">
            No menu items available.
          </div>
        )}
      </div>
    </div>
  );
}

export default Resmenu;
