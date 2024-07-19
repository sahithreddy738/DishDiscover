import { useParams } from "react-router-dom";
import CardMenu from "./CardMenu";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/userestaurantMenu";


const RestaurantMenu=() =>{
    const {resId}=useParams();
    const restaurantData=useRestaurantMenu(resId);
    if(restaurantData.length===0) return <Shimmer/>;
    const {name,costForTwoMessage,avgRatingString,totalRatingsString,sla,feeDetails}=restaurantData[2].card?.card?.info;
    const {slaString}=sla;
    const {message}=feeDetails;
    const {itemCards}=restaurantData[4].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    return(
        <div>
           <div className="mx-[275px] shadow-sm bg-black text-white rounded-lg flex flex-col space-y-2 my-4 p-4">
                <h1 className="font-bold text-2xl">{name}</h1>
                <h3>{costForTwoMessage}</h3>
                <h3>{avgRatingString}({totalRatingsString})</h3>
                <h5>{slaString}</h5>
                <p>{message}</p>
           </div>
           <div>
              <h1 className="mt-6 font-bold  px-2 mx-[275px] text-xl">Recommended Items</h1>
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