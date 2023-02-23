import React, { useEffect, useState } from 'react'
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) => restaurant?.data?.name?.toLowerCase()?.includes(searchText));
  return filterData;
}

const Body = () => {
  const [searchText, setSearchText] = useState("")
  const [restaurants, setRestaurants] = useState([])
  const [filteredRestaurants, setFilteredRestaurants] = useState([])

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.9660636&lng=82.2250967&page_type=DESKTOP_WEB_LISTING")
    const json = await data.json();
    setRestaurants(json?.data?.cards[2]?.data?.data?.cards)
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards)
  }

  if(!restaurants) return null;

  return (restaurants.length === 0) ? <Shimmer /> : (
    <>
      <div className='search-container'>
        <input className='search-input' value={searchText} onChange={(e) => setSearchText(e.target.value)} />
        <button className='search-btn' onClick={() => setFilteredRestaurants(filterData(searchText, restaurants))}>Search</button>
      </div>
      <div className="restaurantList">
        {filteredRestaurants.length === 0 ? (<h1>No Restaurant match your Filter!!</h1>) :(filteredRestaurants.map((restaurant) => (
          <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
        )))}
      </div>
    </>
  );
};


export default Body