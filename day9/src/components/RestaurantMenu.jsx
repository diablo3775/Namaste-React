import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useRestaurantMenu from '../hooks/useRestaurantMenu'
import useRestaurant from '../hooks/useRestaurantMenu'
import { IMG_CDN_URL } from '../jsondata/data'
import Shimmer from './Shimmer'

const RestaurantMenu = () => {
  const { restaurantId } = useParams()
  // const [restaurant, setRestaurant] = useState(null)
  const restaurant = useRestaurantMenu(restaurantId)

  // useEffect(() => {
  //   getRestaurantInfo();
  // }, []);

  // async function getRestaurantInfo() {
  //   const data = await fetch("https://www.swiggy.com/dapi/menu/v4/full?lat=16.9660636&lng=82.2250967&menuId=" + restaurantId)
  //   const json = await data.json();
  //   setRestaurant(json.data);
  // }

  return !restaurant ? <Shimmer /> : (
    <div>
      <h1>{restaurantId}</h1>
      <h2>{restaurant?.name}</h2>
      <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} />
      <h3>{restaurant?.area}</h3>
      <h3>{restaurant?.city}</h3>
      <h3>{restaurant?.avgRating}stars</h3>
      <h3>{restaurant?.costForTwoMsg}</h3>
      <div>
        <h1>Menu</h1>
        <ul>
          {Object.values(restaurant?.menu?.items).map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default RestaurantMenu