import { ITEM_URL } from "../utils/constants";

const CardMenu = ({ menuData }) => {
  const { name, imageId, price, ratings,description } = menuData.card.info;
  const { rating } = ratings.aggregatedRating;
  return (
      <div className="card-container">
        <div className="card-info">
          <h2>{name}</h2>
          <h3>Rs.{price>0?price/100:200}</h3>
          <h4>
            {rating?rating+" rating":""}
          </h4>
          <p>{description}</p>
        </div>
        <div className="card-img">
          <img src={ITEM_URL + imageId} className="menu-img"></img>
        </div>
      </div>

  );
};

export default CardMenu;
