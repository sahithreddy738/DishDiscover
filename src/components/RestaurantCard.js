import { FOOD_URL } from "../utils/constants";

const RestaurantCard=({resData}) =>{
    const {name,areaName,costForTwo,cuisines,avgRating,sla,cloudinaryImageId}=resData?.info;
    const {deliveryTime}=sla;
    return (
        <div className="rest-card">
             <img className="rest-logo" src={FOOD_URL+cloudinaryImageId}></img>
             <h3>{name}</h3>
             <h4>{areaName}</h4>
             <h4>{costForTwo}</h4>
             <h4>{cuisines.join(",")}</h4>
             <h4>{avgRating} Rating</h4>
             <h4>{deliveryTime} Minutes</h4>
            
        </div>
    )
}

export default RestaurantCard;