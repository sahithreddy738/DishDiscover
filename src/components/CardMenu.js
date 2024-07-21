import { ITEM_URL } from "../utils/constants";

const CardMenu = ({ menuData }) => {
  const { name, imageId, price, ratings,description,defaultPrice } = menuData.card.info;
  const { rating } = ratings.aggregatedRating;
  return (
      <div className="w-[700px] mx-auto my-6 p-4 flex justify-between shadow-lg rounded-lg">
        <div className="flex flex-col space-y-3 w-10/12">
          <h2 className="font-bold ">{name}</h2>
          <h3 >Rs.{price>0?price/100:defaultPrice/100}</h3>
          <h4>
            {rating?rating+" rating":""}
          </h4>
          <p>{description}</p>
        </div>
        <div className="w-2/12">
          <img src={ITEM_URL + imageId} className="h-[100px] rounded-lg"></img>
        </div>
      </div>
  );
};

export default CardMenu;
