import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
// if we want dynamically put data suppose in url we put dynamically restId than we use useParams hook for this.It show path parameter data
import {useParams} from "react-router-dom" 
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {

    const [resInfo,setResInfo] = useState(null);
     
    const {resId} = useParams();
    
    //uncomment the below data for proper understanding
    // const params = useParams();
    // console.log("now I use useParas")
    // //it print resId here
    // console.log(resId)

    useEffect(() =>{

        fetchMenu();

    },[])

    const fetchMenu = async () =>{
        const data = await fetch(
            MENU_API +resId
            // original api
            // "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.960059122809971&lng=77.57337538383284&restaurantId=709119"
    
            //"https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.960059122809971&lng=77.57337538383284&restaurantId=655&catalog_qa=undefined&submitAction=ENTER"
        );

        const json = await data.json();
        setResInfo(json.data)

    


    };
  
    console.log(resInfo)
    //  here below destructuring nnot work due to initial value of resInfo is null
    // const {name,cuisines} = resInfo?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants[0]?.info
    // othertwise code this 
    // if (resInfo === null) return <Shimmer />;
    // const {name,cuisines} = resInfo?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants[0]?.info

   
    // so we do below way to get the data
    // const name = resInfo?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants[0]?.info?.name;
    // const cuisines = resInfo?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants[0]?.info?.cuisines;
    // const costForTwo = resInfo?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants[0]?.info?.costForTwo

    if ((resInfo === null)) return <Shimmer />;
    // const {name,cuisines,costForTwo} = resInfo?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants[0]?.info
    const {name,cuisines,costForTwo} = resInfo?.cards[0]?.card?.card?.info
    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
   // const {carousel} = resInfo2?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card

    // console.log(itemCards)
    
    // data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards
    
 
   

    // {/* json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants */}
    //         {/* <h1>{resInfo?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants[0]?.info.name}</h1> */}
    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(",")} - Rs-{costForTwo/100} cost for two</p>
            <h2>Menu</h2>
            <ul>
                {itemCards.map((item) => <li key={item.card.info.id}>{item.card.info.name} - Rs{item.card.info.price/100}</li>)}
                {/* <li>{itemCards[0].card.info.name}</li>
                <li>{itemCards[1].card.info.name}</li> */}
            </ul>
            
        </div>
    );
};

export default RestaurantMenu;