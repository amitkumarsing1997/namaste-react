import RestaurantCard from "./RestaurantCard"
import { useState } from "react";
import resList from "../utils/mockData";



const Body = () => {
  // Local State Variable - Super powerful variable
  const [listOfRestaurant ,setListOfRestaurant] = useState(resList);

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


    return (
      <div className="body">
        <div className="filter">
          <button className="filter-btn" onClick={()=>{
            const filteredList = listOfRestaurant.filter(
              (res) => res.data.avgRating > 4
            );
            setListOfRestaurant(filteredList)
          }}>Top Rated Restaurant</button>
        </div>
        <div className="res-container">
          {listOfRestaurant.map((restaurant) => (
            // here key is important other wise it shows warning so that react uniquely identified each member
            // so that performance will nbe improved
            // <RestaurantCard key={index} resData={restaurant} />
            <RestaurantCard key={restaurant.data.id} resData={restaurant} />
         ))}
        </div>
      </div>
    );
  };

export default Body