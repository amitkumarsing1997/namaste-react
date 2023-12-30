import RestaurantCard from "./RestaurantCard"
import { useState ,useEffect,useContext} from "react";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurantList from "../utils/useRestaurantList";
import UserContext from "../utils/UserContext";


const Body = () => {
  // Local State Variable - Super powerful variable
  const [listOfRestaurant ,setListOfRestaurant] = useState([]);
  const[filteredRestaurant, setFilteredRestaurant] = useState([])
  const [searchText, setSearchText] = useState("");

  // Call the custom hook
  const restaurantList = useRestaurantList();
  // console.log("in restaurantList")
  // console.log(restaurantList)

  //list of restaurant to see the data
  // console.log(listOfRestaurant)
 
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
   
   const {loggedInUser,setUserName}=useContext(UserContext)

  return listOfRestaurant.length=== 0 ? <Shimmer/>:(
      <div className="body">
        <div className="filter flex">
          <div className="search m-4 p-4">
            <input 
            type="text" 
            className="border border-solid border-black" 
            value={searchText}
            onChange={
              (e) => { 
                setSearchText(e.target.value)
              }
            }
            />
            <button 
             className="px-4 py-2 bg-green-100 mx-4 rounded-lg"
            onClick={()=>{
              // Filter the restraunt cards and update the UI
              // searchText
              console.log(searchText)
              const filterRestaurant = listOfRestaurant.filter(
                (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
              )

              console.log("in serch text")
              console.log(filterRestaurant)

              setFilteredRestaurant(filterRestaurant)
            }}>Search</button>
          </div>

          <div className="search m-4 p-4" flex items-center>
          <button 
             className="px-4 py-2 bg-yellow-100" 
             onClick={()=>{
             const filteredList = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4.4
               );
            setFilteredRestaurant(filteredList)
          }}>
            Top Rated Restaurant
            </button>
          </div>

          <div className="search m-4 p-4" flex items-center>
            <label>
              UserName: 
            </label>
            <input className="border border-black p-2" 
             value={loggedInUser}
            onChange={(e)=>
             setUserName(e.target.value)
            }/>

          </div>
          
        </div>
        <div className="flex flex-wrap">

          {filteredRestaurant.map((restaurant) => (
            <Link key={restaurant.info.id} 
            to={"/restaurants/"+ restaurant.info.id}>
              <RestaurantCard  resData={restaurant} />
            </Link>  
         ))}
        </div>
        
        

      </div>
    );
  };

export default Body