import { RESTAURANT_LIST } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body =() =>{
    const [listOfRestaurants,setListOfRestaurants]=useState(RESTAURANT_LIST);
    const [input,setInput]=useState("");
    const handleClick=() => {
        const filteredData=listOfRestaurants.filter(restaurant=>restaurant.info.avgRating>4);
        setListOfRestaurants(filteredData);
    }
    const handleChange=(e) => {
       setInput(e.target.value);
    }
    return (
        <div className="body-container">
             <input placeholder="search restaurants" className="input-field" onChange={handleChange}></input>
             <button className="rated-btn" children="Top-Rated"  onClick={handleClick}></button>
             <div className="rest-container">
                 {
                    listOfRestaurants.filter(restaurant=>restaurant.info.name.toLowerCase().includes(input)).map((restaurant) => <RestaurantCard key={restaurant.info.id} resData={restaurant}/>)
                 }
             </div>

        </div>
    )
}

export default Body;