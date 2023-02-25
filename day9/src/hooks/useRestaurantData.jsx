import { useEffect, useState } from 'react'
import { FETCH_RESTAURANTS_DATA } from '../jsondata/data';

const useRestaurantData = () => {
    const [restaurants, setRestaurants] = useState([])
    const [filteredRestaurants, setFilteredRestaurants] = useState([])
  
    useEffect(() => {
      getRestaurants();
    }, []);
  
    async function getRestaurants() {
      const data = await fetch(FETCH_RESTAURANTS_DATA)
      const json = await data.json()
      setRestaurants(json?.data?.cards[2]?.data?.data?.cards)
      setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards)
    }

  return [restaurants,filteredRestaurants, setFilteredRestaurants];
}

export default useRestaurantData