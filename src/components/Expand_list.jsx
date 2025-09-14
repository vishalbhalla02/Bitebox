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
          className="flex flex-col justify-between gap-1 border-b border-gray-300 pb-2 sm:flex-row"
        >
          <div className="flex flex-1 flex-col justify-evenly px-2">
            <h3 className="text-base font-semibold sm:text-lg">
              {item.card.info.name} -{" "}
              <span className={page === "Menu" ? "" : "font-bold"}>
                ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </h3>
            <p className="text-xs text-slate-600 sm:mt-1 sm:text-base">
              {item.card.info.description}
            </p>
          </div>

          <div className="flex flex-col items-center">
            <img
              className="h-[120px] w-[160px] rounded-lg object-cover"
              src={`https://media-assets.swiggy.com/swiggy/image/upload/${item.card.info.imageId}`}
              alt={item.card.info.name}
            />

            {page === "Menu" && (
              <button
                className="mt-1 rounded-lg bg-orange-500 px-3 py-1 text-white transition hover:bg-orange-600 sm:mt-2"
                onClick={() => handleAddItem(item)}
                disabled={buttonDisabled[item.card.info.id]} // Disable the button after clicking
              >
                {buttonDisabled[item.card.info.id] ? "Added" : "Add +"}
              </button>
            )}
          </div>

          {page === "Cart" && (
            <div className="flex flex-col items-center justify-center px-2">
              <button
                className="rounded-lg bg-red-600 px-3 py-1 text-white transition hover:bg-red-700"
                onClick={() => handleRemoveItem(item.card.info.id)}
              >
                ❌
              </button>
              <span className="mt-2 text-xl font-bold">x{item.count}</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ExpandList;
