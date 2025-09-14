import { useEffect, useState } from "react";
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
          `https://food-del-backend-xe66.onrender.com/api/menu/${id}`,
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
      <div className="flex items-center justify-center">
        <Reload />
      </div>
    );
  }

  return (
    <div className="mt-8 p-1 sm:mt-[45px]">
      {/* Restaurant Info */}
      <div className="text m-4 mx-auto flex max-w-4xl justify-between rounded-lg bg-slate-200 sm:w-[90%] md:w-4/5">
        <div className="flex flex-col justify-evenly p-2">
          <h1 className="text-xl font-semibold sm:text-3xl">
            {restaurantInfo.name || "Restaurant Name"}
          </h1>
          <h3 className="text-xs text-gray-700 sm:text-base">
            {restaurantInfo.cuisines?.join(", ") || "Cuisine info"}
          </h3>
          <div className="mt-2 flex items-center gap-6 font-semibold sm:gap-7">
            <div className="flex items-center gap-1">
              <h3 className="text-xs sm:text-base">
                {restaurantInfo.avgRating ?? "--"}
              </h3>
              <img className="h-5" src={img1} alt="Rating star" />
            </div>
            <div>
              <h3 className="text-xs text-gray-600 sm:text-base">
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
        <div className="flex items-center justify-center p-1 transition-all">
          <img
            className="block h-full w-full min-w-[100px] max-w-40 rounded-lg"
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
      <div className="">
        {cards.filter((card) => card.card.card.itemCards).length > 0 ? (
          cards.map((e, index) => {
            if (e.card.card.itemCards) {
              return <Slider key={index} data={e.card.card} />;
            }
            return null;
          })
        ) : (
          <div className="mt-10 text-center text-lg text-gray-600">
            No menu items available.
          </div>
        )}
      </div>
    </div>
  );
}

export default Resmenu;
