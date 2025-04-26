import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import img1 from "../images/delivery-bike.png";

function Header() {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-slate-200 top-0 p-3 shadow-md fixed w-full z-50">
      <div className="w-14 sm:w-36 sm:mx-7 sm:ps-4">
        <Link to="/">
          <img className="block w-9 sm:w-16" src={img1} alt="Logo" />
        </Link>
      </div>
      <div className="flex items-center sm:pe-16 sm:ps-4 font-normal">
        <ul className="text-xs sm:text-lg flex items-center gap-x-2 sm:gap-x-5">
          <li className="hover:text-orange-600 transition-colors duration-150">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-orange-600 transition-colors duration-150">
            <Link to="/about">About Us</Link>
          </li>
          <li className="hover:text-orange-600 transition-colors duration-150">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="hover:text-orange-600 transition-colors duration-150">
            <Link to="/cart">
              Cart{" "}
              {cartItems.length !== 0 && (
                <span className="text-[10px] bg-orange-500 text-white px-1.5 py-0.5 rounded-full ml-1">
                  {cartItems.length}
                </span>
              )}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
