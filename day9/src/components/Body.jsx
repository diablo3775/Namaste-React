import Shimmer from './Shimmer';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useOnline from '../hooks/useOnline';
import RestaurantCard from './RestaurantCard';
import { filterData, sortData } from '../utils/helper';
import useRestaurantData from '../hooks/useRestaurantData';

const Body = () => {
  const [restaurants, filteredRestaurants, setFilteredRestaurants] = useRestaurantData();
  const [searchText, setSearchText] = useState("")
  const isOnline = useOnline();

  if (!isOnline) {
    return <h1>Offline, please check your internet connection!!</h1>
  }

  if (!restaurants) return null;

  return (restaurants.length === 0) ? <Shimmer /> : (
    <>
      {/* Sorting */}
      <select onChange={(e) => sortData(e.target.value, filteredRestaurants, setFilteredRestaurants)}>
        <option value="low">A-Z</option>
        <option value="high">Z-A</option>
      </select>

      {/* Filtering */}
      <div className='search-container'>
        <input className='search-input' value={searchText} onChange={(e) => setSearchText(e.target.value)} />
        <button className='search-btn' onClick={() => filterData(searchText, restaurants, setFilteredRestaurants)}>Search</button>
      </div>
      
      {/* Displaying Data */}
      <div className="restaurantList">
        {filteredRestaurants.length === 0 ? (<h1>No Restaurant match your Filter!!</h1>) : (filteredRestaurants.map((restaurant) => (
          <Link to={"/restaurant/" + restaurant.data.id} key={restaurant.data.id}>
            <RestaurantCard {...restaurant.data} />
          </Link>
        )))}
      </div>
    </>
  );
};

export default Body