import RestaurantCard from "./RestaurantCard"
import { useState ,useEffect} from "react";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";



const Body = () => {
  // Local State Variable - Super powerful variable
  const [listOfRestaurant ,setListOfRestaurant] = useState([]);
  
  const[filteredRestaurant, setFilteredRestaurant] = useState([])
  // intially our search text have empty string ""
  const [searchText, setSearchText] = useState("");

// whenever state variables update,react triggers a reconciliation cycle(rerenders the component)
  /*
     these are same it is the 'array destrucuring' and it is the basic concept of javascript 

                       OR                  
    
    const arr = useState(resList)
    const [listOfRestaurant ,setListOfRestaurant] = arr
        
                     OR


        const arr = useState(resList)
        const listOfRestaurant = arr[0]
        const setListOfRestaurant = arr[1]

  */
    useEffect(()=> {
        fetchData()
     } ,[]);

     const fetchData = async () => {
      const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.960059122809971&lng=77.57337538383284&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    // once we got data than we convert it in json

    const json = await data.json()
    // console.log(json)
    // ?. this things are called 'optional chaning' learn more details about it by yourself.  It is good way of handling data
    setListOfRestaurant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilteredRestaurant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    // console.log(json.data.cards[5])
  }
   
  // but it is old way now industry follow "shimmer UI". It is just like load a fake page until we get the actual data of api

  // if(listOfRestaurant.length === 0 ) {
  //   return <h1> Loading ....</h1>
  // }

   // Conditional rendering
  // if(listOfRestaurant.length === 0 ) {
  //   return <Shimmer/>
  // }

  // Or
  // Using ternary operator for above things
   
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
            // here key is important other wise it shows warning so that react uniquely identified each member
            // so that performance will nbe improved
            // <RestaurantCard key={index} resData={restaurant} />
            //if we use Link than 'key' should be in parent Jsx menas it in Link tagg

            // behind the scene link uses anchor tag
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