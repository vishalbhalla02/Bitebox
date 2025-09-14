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

  // Group items by id and count quantities
  const groupedItems = cartItems.reduce((acc, item) => {
    const itemId = item.card.info.id;
    if (acc[itemId]) {
      acc[itemId].count += 1;
    } else {
      acc[itemId] = { ...item, count: 1 };
    }
    return acc;
  }, {});

  const groupedItemsArray = Object.values(groupedItems);

  return (
    <div className="m-auto mt-16 text-center sm:mt-[7.5em]">
      <h1 className="text-xl font-bold sm:text-3xl">Cart</h1>
      <button
        className="m-2 rounded-lg bg-black p-2 text-white hover:bg-gray-800"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>
      {groupedItemsArray.length === 0 ? (
        <h2 className="text-lg sm:text-xl">Cart is empty</h2>
      ) : (
        <div className="m-auto my-6 w-4/5 max-w-screen-md bg-gray-50 shadow-lg">
          <ExpandList items={groupedItemsArray} page="Cart" />
        </div>
      )}
      <TotalCart />
    </div>
  );
}

export default Cart;
