import React, { useEffect, useState } from "react";
import ResCard from "./Res-card";
import Fakecard from "./Fakecard";
import { Link } from "react-router-dom";

function RestaurantContainer() {
  const [rest, Setrest] = useState([]);
  const [srch, Setsrch] = useState("");
  const [another_list, setanother_list] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    finder();
  }, [srch]);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://food-del-backend-xe66.onrender.com/api"
      );
      const json = await data.json();
      const restaurants =
        json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants ||
        json.data.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      Setrest(restaurants);
      setanother_list(restaurants);
    } catch (err) {
      console.log("Error fetching data:", err);
      alert("Api issue");
    }
  };

  const finder = () => {
    const up_list = rest.filter((res) =>
      res.info.name.toLowerCase().includes(srch.toLowerCase())
    );
    setanother_list(up_list);
  };

  return (
    <div className="md:mt-[8em] mt-20">
      <div className="flex justify-center  ">
        <input
          className="border-4 border-blue-200 rounded-lg md:text-lg md:w-2/4 w-5/6 px-4 md:mb-4"
          value={srch}
          onChange={(e) => Setsrch(e.target.value)}
          type="text"
          placeholder="Search your restaurant here"
        />
      </div>
      {rest.length === 0 ? (
        <div className="flex flex-wrap gap-5 m-auto w-4/5 md:my-4 justify-center">
          <Fakecard />
          <Fakecard />
          <Fakecard />
          <Fakecard />
          <Fakecard />
          <Fakecard />
          <Fakecard />
          <Fakecard />
          <Fakecard />
          <Fakecard />
        </div>
      ) : (
        <div className="flex flex-wrap gap-5 m-auto w-4/5 my-4 mb-16 justify-center">
          {another_list.map((res) => (
            <Link to={"/restaurants/" + res.info.id} key={res.info.id}>
              <ResCard
                name={res.info.name}
                img_id={res.info.cloudinaryImageId}
                rating={res.info.avgRating}
                time={res.info.sla.deliveryTime}
                areaname={res.info.areaName}
              />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default RestaurantContainer;
