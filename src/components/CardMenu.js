import { useDispatch, useSelector } from "react-redux";
import { ITEM_URL } from "../utils/constants";
import { addItem, removeItem } from "../utils/slices/cartSlice";

const CardMenu = ({ menuData }) => {
  const { name, imageId, price, ratings, description, defaultPrice,id } =
    menuData.card.info;
  const { rating } = ratings.aggregatedRating;
  const dispatch = useDispatch();
  const cardItems = useSelector((store) => store.cart.items);
  const handleClick = () => {
    dispatch(addItem(menuData));
  };
  const toBeRemoveItems=cardItems.filter((item)=>item.card?.info?.id===id);
  return (
    <div data-testid="food-item" className="w-[700px] mx-auto my-6 p-4 flex justify-between shadow-lg rounded-lg">
      <div className="flex flex-col space-y-3 w-10/12">
        <h2 className="font-bold ">{name}</h2>
        <h3>Rs.{price > 0 ? price / 100 : defaultPrice / 100}</h3>
        <h4>{rating ? rating + " rating" : ""}</h4>
        <p>{description}</p>
      </div>
      <div className="w-2/12">
        <img src={ITEM_URL + imageId} className="h-[100px] rounded-lg"></img>
        <div className="flex flex-row space-x-2 align-middle">
          <button
            className="text-2xl m-2 px-[5px] bg-black text-white rounded-lg cursor-pointer"
            onClick={() => handleClick()}
            data-testid="add-food-btn"
          >
            +
          </button>
          <h1 className="font-bold pt-3">{toBeRemoveItems.length>0?toBeRemoveItems.length:""}</h1>
          { toBeRemoveItems.length>0 ? (
            <>
              <button
                className="text-2xl m-2 px-[5px] bg-black text-white rounded-lg cursor-pointer"
                onClick={()=>dispatch(removeItem(menuData))}
                data-testid="remove-food-btn"
              >
                -
              </button>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardMenu;
