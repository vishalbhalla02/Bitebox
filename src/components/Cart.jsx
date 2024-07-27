import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ExpandList from "./Expand_list";
import { clearCart } from "./cartSlice";
import TotalCart from "./TotalCart";

function Cart() {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-auto mt-16 sm:mt-[7.5em]">
      <h1 className="font-bold text-xl sm:text-3xl">Cart</h1>
      <button
        className="bg-black text-white p-2 rounded-lg m-2 hover:bg-gray-800"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>
      {cartItems.length === 0 ? (
        <h2 className="text-lg sm:text-xl">Cart is empty</h2>
      ) : (
        <div className="max-w-screen-md w-4/5 bg-gray-50 shadow-lg m-auto my-6">
          <ExpandList items={cartItems} page="Cart" />
        </div>
      )}
      <TotalCart />
    </div>
  );
}

export default Cart;
