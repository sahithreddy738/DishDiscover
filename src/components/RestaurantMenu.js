import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/userestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";


const RestaurantMenu = () => {
  const { resId } = useParams();
  const restaurantData = useRestaurantMenu(resId);
  if (restaurantData.length === 0) return <Shimmer />;
  const {
    name,
    costForTwoMessage,
    avgRatingString,
    totalRatingsString,
    sla,
    feeDetails,
  } = restaurantData[2].card?.card?.info;
  const { slaString } = sla;
  const { message } = feeDetails;
  const items = restaurantData[4].groupedCard?.cardGroupMap?.REGULAR?.cards;
  console.log(restaurantData);
  return (
    <div>
      <div className="w-[800px] mx-auto shadow-sm bg-black text-white rounded-lg flex flex-col space-y-2 my-4 p-4">
        <h1 className="font-bold text-2xl">{name}</h1>
        <h3>{costForTwoMessage}</h3>
        <h3>
          {avgRatingString}({totalRatingsString})
        </h3>
        <h5>{slaString}</h5>
        <p>{message}</p>
      </div>
      <div className="menu-list">
        {items && items.map((card,ind) =>
          card.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ? (
            <RestaurantCategory
              data={card.card?.card}
              key={card.card?.card?.title}
            />
          ) : card.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory" ? (
            <div className="w-[800px] mx-auto my-9 shadow-lg rounded-lg">
              <span className="font-extrabold text-2xl p-2 m-2">{card.card?.card?.title}</span>
              {card.card?.card?.categories.map((menu,ind) => (
                <RestaurantCategory key={menu.title} data={menu} />
              ))}
            </div>
          ) : (
            <></>
          )
        )}
      </div>
    </div>
  );
};

export default RestaurantMenu;
