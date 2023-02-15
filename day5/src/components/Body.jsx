import React, { useState } from 'react'
import RestaurantCard from './RestaurantCard';
import restaurantList from './data'

const Body = () => {
  const [searchText, setSearchText] = useState("")
  const [restaurants, setRestaurants] = useState(restaurantList)
  
  function filterData(searchText, restaurants) {
    const filterData = restaurants.filter((restaurant) => restaurant.data.name.toLowerCase().includes(searchText));
    return filterData;
  }
  
    return (
      <>
      <div className='search-container'>
        <input className='search-input' value={searchText} onChange={(e) => setSearchText(e.target.value)} />
        <button className='search-btn' onClick={() => setRestaurants(filterData(searchText, restaurants))}>Search</button>  
      </div>
      <div className="restaurantList">
        {restaurants.map((restaurant) => (
          <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
        ))}
      </div>
      </>
    );
  };
  

export default Body
