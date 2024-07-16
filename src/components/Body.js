import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [input, setInput] = useState("");
  const handleClick = () => {
    const filteredData = listOfRestaurants.filter(
      (restaurant) => restaurant.info.avgRating > 4
    );
    setFilteredRestaurants(filteredData);
  };
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.351794605603306&lng=78.55934254825114&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const jsonData = await data.json();
      setListOfRestaurants(
        jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredRestaurants(
        jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.log(error);
    }
  };
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body-container">
      <div className="search-container">
        <input
          placeholder="search restaurants"
          className="input-field"
          onChange={handleChange}
        ></input>
        <button
          className="search-btn"
          onClick={() => {
            const restaurants = listOfRestaurants.filter((restaurant) =>
              restaurant.info.name.toLowerCase().includes(input.toLowerCase())
            );
            setFilteredRestaurants(restaurants);
          }}
        >
          search
        </button>
        <button
          className="rated-btn"
          children="Top-Rated"
          onClick={handleClick}
        ></button>
      </div>
      <div className="rest-container">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
