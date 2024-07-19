import { useEffect,useState } from "react";
import { RESTAURANT_MENU_URL } from "./constants";

const useRestaurantMenu=(resId) =>{
    const [restaurantData,setRestaurantData]=useState([]);
    useEffect(()=>{
        fetchRestaurantData();
    },[])
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
    return restaurantData;
}

export default useRestaurantMenu;