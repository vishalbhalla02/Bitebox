import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import img1 from "../images/delivery-bike.png";

function Header() {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="fixed top-0 z-50 flex h-12 w-full justify-between bg-slate-200 p-1 sm:h-16 lg:px-16">
      <div className="h-full bg-yellow-300">
        <Link to="/">
          <img className="h-full w-auto" src={img1} alt="Logo" />
        </Link>
      </div>
      <div className="sm:text-lg">
        <ul className="flex h-full items-center gap-x-4">
          <li className="transition-colors duration-150 hover:text-orange-600">
            <Link to="/">Home</Link>
          </li>
          <li className="transition-colors duration-150 hover:text-orange-600">
            <Link to="/about">About Us</Link>
          </li>
          <li className="transition-colors duration-150 hover:text-orange-600">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="transition-colors duration-150 hover:text-orange-600">
            <Link to="/cart">
              Cart{" "}
              {cartItems.length !== 0 && (
                <span className="ml-1 rounded-full bg-orange-500 px-1.5 py-0.5 text-[10px] text-white">
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
