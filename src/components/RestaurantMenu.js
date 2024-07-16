import { useEffect, useState } from "react";
import { RESTAURANT_MENU_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import CardMenu from "./CardMenu";
import Shimmer from "./Shimmer";

const RestaurantMenu=() =>{
    const [restaurantData,setRestaurantData]=useState([]);
    useEffect(()=>{
        fetchRestaurantData();
    },[])
    const {resId}=useParams();
    const fetchRestaurantData=async() =>{
        try {
            console.log(RESTAURANT_MENU_URL+resId);
            const data=await fetch(RESTAURANT_MENU_URL+resId);
            const jsonData=await data.json();
            setRestaurantData(jsonData.data?.cards);
        } catch (error) {
            console.log(error);
        }
    } 
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