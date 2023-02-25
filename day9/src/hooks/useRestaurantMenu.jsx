import { useEffect, useState } from "react";
import { FETCH_MENU_URL } from "../jsondata/data";

const useRestaurantMenu = (restaurantId) => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(FETCH_MENU_URL + restaurantId);
    const json = await data.json();
    setRestaurant(json.data);
  }
  
  return restaurant;
};

export default useRestaurantMenu;
