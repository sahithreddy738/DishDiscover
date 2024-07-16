import { useNavigate } from "react-router-dom";
import { FOOD_URL } from "../utils/constants";

const RestaurantCard=({resData}) =>{
    const {id,name,areaName,costForTwo,cuisines,avgRating,sla,cloudinaryImageId}=resData?.info;
    const {slaString}=sla;
    const navigate=useNavigate();
    const handleClick=() => {
        navigate("/restaurant/"+id);
    }
    return (
        <div className="rest-card" onClick={handleClick}>
             <img className="rest-logo" src={FOOD_URL+cloudinaryImageId}></img>
             <h3>{name}</h3>
             <h4>{areaName}</h4>
             <h4>{costForTwo}</h4>
             <h4>{cuisines.join(",")}</h4>
             <h4>{avgRating} Rating</h4>
             <h4>{slaString}</h4>
        </div>
    )
}

export default RestaurantCard;