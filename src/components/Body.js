import RestaurantCard, { withPromotedRestaurantCard } from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [input, setInput] = useState("");
  const onlineStatus = useOnlineStatus();
  const RestaurantCardUpdated = withPromotedRestaurantCard(RestaurantCard);
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
  if (onlineStatus === false) return <h1>Check your Internet Connection!!!</h1>;
  return  listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body-container">
      <div className="flex m-4 p-2">
        <div>
          <input
            placeholder="Search Restaurants"
            className="border border-solid rounded-md px-4 py-2 "
            onChange={handleChange}
          ></input>
          <button
            className="bg-green-300 mx-2 px-4 py-2 rounded-lg"
            onClick={() => {
              const restaurants = listOfRestaurants.filter((restaurant) =>
                restaurant.info.name.toLowerCase().includes(input.toLowerCase())
              );
              setFilteredRestaurants(restaurants);
            }}
            data-testid="search-btn"
          >
            Search
          </button>
        </div>
        <button
          className="bg-black text-white mx-2 px-4 py-2 rounded-lg "
          children="Top-Rated ⭐"
          onClick={handleClick}
          data-testid="rating-btn"
        ></button>
      </div>
      <div className="flex flex-wrap" data-testid="res-list">
        {filteredRestaurants?.map((restaurant) =>
          restaurant.info.aggregatedDiscountInfoV3 &&
          Object.keys(restaurant.info.aggregatedDiscountInfoV3).length > 0 ? (
            <RestaurantCardUpdated
              key={restaurant.info.id}
              resData={restaurant}
            />
          ) : (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          )
        )}
      </div>
    </div>
  );
};

export default Body;
