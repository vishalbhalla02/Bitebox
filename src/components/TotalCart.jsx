import React from "react";
import { useSelector } from "react-redux";

function TotalCart() {
  const items = useSelector((store) => store.cart.items);

  const totalAmount = items.reduce((total, item) => {
    const price = item.card.info.price ?? item.card.info.defaultPrice;
    return total + price / 100;
  }, 0);

  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-5xl p-2 bg-gray-700 text-white rounded-lg font-bold text-xl hover:bg-slate-600">
      <button>Total: ₹ {totalAmount.toFixed(2)}</button>
    </div>
  );
}

export default TotalCart;
