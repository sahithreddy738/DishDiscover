import { useParams } from "react-router-dom";
import CardMenu from "./CardMenu";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/userestaurantMenu";
import useOnlineStatus from "../utils/useOnlineStatus";

const RestaurantMenu=() =>{
    const {resId}=useParams();
    const restaurantData=useRestaurantMenu(resId);
    const onlineStatus=useOnlineStatus();
    if(onlineStatus===false) return <h1>Check your Internet Connection!!!</h1>
    if(restaurantData.length===0) return <Shimmer/>;
    const {name,costForTwoMessage,avgRatingString,totalRatingsString,sla,feeDetails}=restaurantData[2].card?.card?.info;
    const {slaString}=sla;
    const {message}=feeDetails;
    const {itemCards}=restaurantData[4].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    return(
        <div className="menu-container">
           <div className="menu-heading">
                <h1>{name}</h1>
                <h3>{costForTwoMessage}</h3>
                <h3>{avgRatingString}({totalRatingsString})</h3>
                <h5>{slaString}</h5>
                <p>{message}</p>
           </div>
           <div className="menu-list">
                {
                    itemCards && itemCards.map((menu)=><CardMenu key={menu.card?.info?.id} menuData={menu}/>)
                }
           </div>
        </div>
    )
}

export default RestaurantMenu;