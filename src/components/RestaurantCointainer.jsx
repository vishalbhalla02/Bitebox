import React, { useEffect, useState } from "react";
import ResCard from "./Res-card";
import Fakecard from "./Fakecard";
import { Link } from "react-router-dom";

function RestaurantContainer() {
  const [rest, Setrest] = useState([]);
  const [srch, Setsrch] = useState("");
  const [another_list, setanother_list] = useState([]);
  const [loading, setLoading] = useState(true); // added loading state

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    finder();
  }, [srch]);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://food-del-backend-xe66.onrender.com/api",
      );
      const json = await data.json();
      const restaurants =
        json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
      Setrest(restaurants);
      setanother_list(restaurants);
    } catch (err) {
      alert("Api issue : Try refreshing web");
    } finally {
      setLoading(false); // set loading to false after fetch
    }
  };

  const finder = () => {
    const up_list = rest.filter((res) =>
      res.info.name.toLowerCase().includes(srch.toLowerCase()),
    );
    setanother_list(up_list);
  };

  return (
    <div className="mt-4 h-full w-full sm:my-16">
      <div className="mt-12 flex items-center justify-center">
        <input
          className="m-2 w-5/6 rounded-lg border-4 border-blue-200 px-4 md:m-6 md:w-2/4 md:text-lg"
          value={srch}
          onChange={(e) => Setsrch(e.target.value)}
          type="text"
          placeholder="Search your restaurant here"
        />
      </div>

      {loading ? (
        <div className="flex flex-wrap justify-center gap-2 sm:gap-8">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-8">
            {[...Array(20)].map((_, idx) => (
              <Fakecard key={idx} />
            ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-wrap justify-center gap-2 sm:gap-8">
          {another_list.length > 0 ? (
            another_list.map((res) => (
              <Link to={"/restaurants/" + res.info.id} key={res.info.id}>
                <ResCard
                  name={res.info.name}
                  img_id={res.info.cloudinaryImageId}
                  rating={res.info.avgRating}
                  time={res.info.sla.deliveryTime}
                  areaname={res.info.areaName}
                />
              </Link>
            ))
          ) : (
            <div className="mt-10 w-full text-center text-lg font-medium">
              No restaurants found.
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default RestaurantContainer;
