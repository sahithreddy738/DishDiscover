import { useNavigate } from "react-router-dom";
import { FOOD_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const {
    id,
    name,
    areaName,
    costForTwo,
    cuisines,
    avgRating,
    sla,
    cloudinaryImageId,
  } = resData?.info;
  const { slaString } = sla;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/restaurant/" + id);
  };
  return (
    <div
      className="w-[250px] bg-gray-300 m-4 mt-0 p-4 rounded-lg hover:cursor-pointer"
      onClick={handleClick}
      data-testid="resCard"
    >
      <img className="w-60 rounded-lg" src={FOOD_URL + cloudinaryImageId}></img>
      <h3 className="my-4 font-bold">{name}</h3>
      <div className="flex flex-col space-y-2 text-lg">
        <h4>{areaName}</h4>
        <h4>{costForTwo}</h4>
        <h4>{avgRating} Rating</h4>
        <h4>{slaString}</h4>
      </div>
      <div className="break-words">
        <p className="text-wrap ">{cuisines.join(",")}</p>
      </div>
    </div>
  );
};

export const withPromotedRestaurantCard=(RestaurantCard) =>{
    return (props) => {
        const {header,subHeader}=props.resData?.info?.aggregatedDiscountInfoV3;

        return(
            <div data-testid="resCard">
                 <p className="text-black pt-3 pl-8 font-bold text-2xl">{header} {subHeader}</p>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}

export default RestaurantCard;
