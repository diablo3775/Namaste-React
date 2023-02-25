export function filterData(searchText, restaurants,setFilteredRestaurants) {
  const filterData = restaurants.filter((restaurant) =>  
      restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase()) 
    );
    setFilteredRestaurants(filterData)
}

// export function sortData(e, filteredRestaurants, setFilteredRestaurants) {
//   const sortedData = [...filteredRestaurants].sort((a, b) => {
//     const sortOrder = e === "low" ? 1 : -1;
//     return sortOrder * a.data.name.localeCompare(b.data.name);
//   });
//   setFilteredRestaurants(sortedData);
// }
export function sortData(e, filteredRestaurants, setFilteredRestaurants) {
  let sortedData;
  e === "low" ?  sortedData = [...filteredRestaurants].sort((a, b) => a.data.name.localeCompare(b.data.name)) :
  sortedData = [...filteredRestaurants].sort((a, b) => b.data.name.localeCompare(a.data.name));

  // if (e === "low") {
  //   sortedData = [...filteredRestaurants].sort((a, b) => a.data.name.localeCompare(b.data.name));
  // } else if (e === "high") {
  //  sortedData = [...filteredRestaurants].sort((a, b) => b.data.name.localeCompare(a.data.name));
  // } else {
  //  sortedData = filteredRestaurants;
  // }
  setFilteredRestaurants(sortedData);
};

// export function sortData(e,filteredRestaurants,setFilteredRestaurants) {
//   let sortedData;
//   if (e === "low") {
//     sortedData = [...filteredRestaurants].sort((a, b) => 
//        a.data.name > b.data.name ? 1 : -1
//     );
//     setFilteredRestaurants(sortedData);
//   }

//   if (e === "high") {
//     sortedData = [...filteredRestaurants].sort((a, b) => 
//        b.data.name > a.data.name ? 1 : -1
//     );
//     setFilteredRestaurants(sortedData);
//   }
// }

// export function filterData(searchText, restaurants,setFilteredRestaurants) {
//   const filterData = restaurants.filter((restaurant) =>  
//       restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase()) 
//     );
//     setFilteredRestaurants(filterData)
//     return filterData;
// }

// export function sortData(e,filteredRestaurants,setFilteredRestaurants) {
//   let sortedData;
//   if (e === "low") {
//     sortedData = [...filteredRestaurants].sort((a, b) => {
//        return a.data.name > b.data.name ? 1 : -1
//       }
//     );
//     setFilteredRestaurants(sortedData);
//   }

//   if (e === "high") {
//     sortedData = [...filteredRestaurants].sort((a, b) => {
//       return b.data.name > a.data.name ? 1 : -1
//       }
//     );
//     setFilteredRestaurants(sortedData);
//   }
// }