import { RESTAURANT_LIST } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body =() =>{
    return (
        <div className="body-container">
             <input placeholder="search here"></input>
             <div className="rest-container">
                 {
                    RESTAURANT_LIST.map((restaurant) => <RestaurantCard key={restaurant.info.id} resData={restaurant}/>)
                 }
             </div>

        </div>
    )
}

export default Body;