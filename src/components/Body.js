import RestaurantCard from "./RestaurantCard"
import { useState ,useEffect} from "react";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurantList from "../utils/useRestaurantList";



const Body = () => {
  // Local State Variable - Super powerful variable
  const [listOfRestaurant ,setListOfRestaurant] = useState([]);
  
  const[filteredRestaurant, setFilteredRestaurant] = useState([])
  const [searchText, setSearchText] = useState("");

  // Call the custom hook
  const restaurantList = useRestaurantList();
 
  // Update the state with the fetched data
  useEffect(() => {
    setListOfRestaurant(restaurantList);
    setFilteredRestaurant(restaurantList);
  }, [restaurantList]);


  //   useEffect(()=> {
  //       fetchData()
  //    } ,[]);

  //    const fetchData = async () => {
  //     const data = await fetch(
  //     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.960059122809971&lng=77.57337538383284&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  //   );

  // //   // once we got data than we convert it in json

  //   const json = await data.json()
  //   // console.log(json)
  //   // ?. this things are called 'optional chaning' learn more details about it by yourself.  It is good way of handling data
  //   setListOfRestaurant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  //   setFilteredRestaurant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  //   // console.log(json.data.cards[5])
  // }
   
  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) return <h1>Looks like you are offline Please check your internet connection</h1>
   
  return listOfRestaurant.length === 0 ? <Shimmer/>:(
      <div className="body">
        <div className="filter">
          <div className="search">
            <input 
            type="text" 
            className="search-box" 
            value={searchText}
            onChange={
              (e) => {
                setSearchText(e.target.value)
              }
            }
            />
            <button onClick={()=>{
              // Filter the restraunt cards and update the UI
              // searchText
              console.log(searchText)
              const filterRestaurant = listOfRestaurant.filter(
                (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
              )

              setFilteredRestaurant(filterRestaurant)
            }}>Search</button>
          </div>
          <button className="filter-btn" onClick={()=>{
            const filteredList = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurant(filteredList)
          }}>Top Rated Restaurant</button>
        </div>
        <div className="res-container">
          {filteredRestaurant.map((restaurant) => (
            <Link key={restaurant.info.id} 
            to={"/restaurants/"+ restaurant.info.id}>
              <RestaurantCard  resData={restaurant} />
            </Link>  
         ))}
        </div>
        console.log("restaurant id")
        console.log(restaurant.info.id) 
        

      </div>
    );
  };

export default Body