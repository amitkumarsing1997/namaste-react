import {useState,useEffect} from "react";
import { RESTAUR_LIST_API } from "./constants";

const useRestaurantList =()=>{
    const [listOfRestaurant ,setListOfRestaurant] = useState([]);

useEffect(()=> {
    fetchData()
 },[]);


 const fetchData = async () =>{
    const data = await fetch(RESTAUR_LIST_API)
    const json = await data.json()
    setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    // console.log("in useRestaurant List Util component ")
    // console.log(json?.data?.cards[4])

 }
 return listOfRestaurant

}

export default useRestaurantList

//  const fetchData = async () => {
//     const data = await fetch(
//     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.960059122809971&lng=77.57337538383284&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
//   );



// const json = await data.json()
// // console.log(json)
// // ?. this things are called 'optional chaning' learn more details about it by yourself.  It is good way of handling data
// setListOfRestaurant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
// setFilteredRestaurant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
// // console.log(json.data.cards[5])
