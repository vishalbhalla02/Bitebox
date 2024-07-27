import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "./cartSlice";

const ExpandList = ({ items, page }) => {
  const dispatch = useDispatch();
  const [renderedItems, setRenderedItems] = useState([]);
  const [renderIds, setRenderIds] = useState(new Map());

  useEffect(() => {
    const uniqueItems = [];
    const newRenderIds = new Map();

    items.forEach((item) => {
      const itemId = item.card.info.id;
      if (!newRenderIds.has(itemId)) {
        newRenderIds.set(itemId, 1);
        uniqueItems.push(item);
      } else {
        newRenderIds.set(itemId, newRenderIds.get(itemId) + 1);
      }
    });

    setRenderIds(newRenderIds);
    setRenderedItems(uniqueItems);
  }, [items]);

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  const handleRemoveItem = (itemId) => {
    dispatch(removeItem(itemId));
  };

  return (
    <div>
      {renderedItems.map((item) => (
        <div
          key={item.card.info.id}
          className="border-gray-300 border-b-4 flex"
        >
          <div className="w-full p-4 flex flex-col justify-evenly">
            <div>
              <span className="font-medium">{item.card.info.name} - </span>
              <span className={page === "Menu" ? "" : "font-bold"}>
                ₹{" "}
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-sm text-slate-600">
              {item.card.info.description}
            </p>
          </div>
          <div className="relative">
            <img
              className="w-[200px] h-[144px] rounded-lg m-auto"
              src={`https://media-assets.swiggy.com/swiggy/image/upload/${item.card.info.imageId}`}
              alt={item.card.info.name}
            />
            {page === "Menu" && (
              <button
                className="p-1 rounded-lg bg-black text-white shadow-lg mx-auto block mt-2"
                onClick={() => handleAddItem(item)}
              >
                Add +
              </button>
            )}
          </div>
          {page === "Cart" && (
            <div className="flex flex-col justify-evenly items-center p-2">
              <button
                className="p-1 rounded-lg text-white bg-red-600"
                onClick={() => handleRemoveItem(item.card.info.id)}
              >
                ❌
              </button>
              <span className="font-bold text-xl">
                x{renderIds.get(item.card.info.id)}
              </span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ExpandList;
