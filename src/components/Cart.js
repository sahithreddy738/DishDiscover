import { useDispatch, useSelector } from "react-redux";
import CardMenu from "./CardMenu";
import { clearCart } from "../utils/slices/cartSlice";
import { CART_EMPTY_URL } from "../utils/constants";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cardItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const filteredCartItems=[...new Set(cardItems)];
  return cardItems.length > 0 ? (
    <div className="w-[7/12] mx-auto flex flex-col space-y-2">
      <div className="flex flex-col space-y-2 w-[5/12] mx-auto">
        <h1 className="font-bold text-2xl my-4 text-center">Cart-Items</h1>
        <button
          className="p-2 text-white bg-black rounded-lg"
          onClick={() => dispatch(clearCart())}
        >
          Clear Cart
        </button>
      </div>
      {filteredCartItems &&
        filteredCartItems.map((cardItem, index) => (
          <CardMenu key={index} menuData={cardItem} />
        ))}
    </div>
  ) : (
    <div className="w-[7/12] mx-auto flex flex-col">
      <img src={CART_EMPTY_URL} className="w-[300px] rounded-lg mx-auto"></img>
      <div className="flex flex-col w-[8/12] mx-auto text-center space-y-4">
        <h1 className="font-bold text-2xl">Your cart is empty</h1>
        <p className="text-xl">You can go to home page to view more restaurants</p>
        <button
          className="text-white bg-orange-400 rounded-lg w-[250px] p-2 mx-auto"
          onClick={() => navigate("/")}
        >
          See Restaurants Near You
        </button>
      </div>
    </div>
  );
};

export default Cart;
