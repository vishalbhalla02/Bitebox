import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "./cartSlice";

const ExpandList = ({ items, page }) => {
  const dispatch = useDispatch();
  const [renderedItems, setRenderedItems] = useState([]);
  const [buttonDisabled, setButtonDisabled] = useState({}); // Track disabled state for buttons

  useEffect(() => {
    setRenderedItems(items);
  }, [items]);

  const handleAddItem = (item) => {
    dispatch(addItem(item));
    setButtonDisabled((prev) => ({
      ...prev,
      [item.card.info.id]: true, // Disable the button for this item
    }));

    // Re-enable button after 1 second
    setTimeout(() => {
      setButtonDisabled((prev) => ({
        ...prev,
        [item.card.info.id]: false, // Re-enable the button
      }));
    }, 1000);
  };

  const handleRemoveItem = (itemId) => {
    dispatch(removeItem(itemId));
  };

  return (
    <div>
      {renderedItems.map((item) => (
        <div
          key={item.card.info.id}
          className="border-b border-gray-300 py-4 flex flex-col sm:flex-row justify-between gap-4"
        >
          <div className="flex-1 px-2 flex flex-col justify-evenly">
            <h3 className="font-semibold text-lg">
              {item.card.info.name} -{" "}
              <span className={page === "Menu" ? "" : "font-bold"}>
                ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </h3>
            <p className="text-sm text-slate-600 mt-1">
              {item.card.info.description}
            </p>
          </div>

          <div className="flex flex-col items-center">
            <img
              className="w-[160px] h-[120px] rounded-lg object-cover"
              src={`https://media-assets.swiggy.com/swiggy/image/upload/${item.card.info.imageId}`}
              alt={item.card.info.name}
            />

            {page === "Menu" && (
              <button
                className="mt-2 px-3 py-1 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
                onClick={() => handleAddItem(item)}
                disabled={buttonDisabled[item.card.info.id]} // Disable the button after clicking
              >
                {buttonDisabled[item.card.info.id] ? "Added" : "Add +"}
              </button>
            )}
          </div>

          {page === "Cart" && (
            <div className="flex flex-col justify-center items-center px-2">
              <button
                className="px-3 py-1 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                onClick={() => handleRemoveItem(item.card.info.id)}
              >
                ❌
              </button>
              <span className="mt-2 font-bold text-xl">x{item.count}</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ExpandList;
