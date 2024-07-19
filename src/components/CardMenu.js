import { ITEM_URL } from "../utils/constants";

const CardMenu = ({ menuData }) => {
  const { name, imageId, price, ratings,description } = menuData.card.info;
  const { rating } = ratings.aggregatedRating;
  return (
      <div className="mx-[275px]  my-9 p-6 flex justify-between shadow-lg rounded-lg">
        <div className="flex flex-col space-y-3 w-[750px]">
          <h2 className="font-bold ">{name}</h2>
          <h3 >Rs.{price>0?price/100:200}</h3>
          <h4>
            {rating?rating+" rating":""}
          </h4>
          <p>{description}</p>
        </div>
        <div className="flex">
          <img src={ITEM_URL + imageId} className="w-[100px] h-[100px] rounded-lg"></img>
        </div>
      </div>
  );
};

export default CardMenu;
