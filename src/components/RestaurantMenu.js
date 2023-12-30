
import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom" 
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import {useState,React} from "react";


const RestaurantMenu = () => {
    

    const {resId} = useParams();

    const dummy = "Dummy data"

   const resInfo = useRestaurantMenu(resId)
   const [showIndex,setShowIndex] = useState(null)

    
    // const [resInfo,setResInfo] = useState(null);
    
    // useEffect(() =>{

    //     fetchMenu();

    // },[])


    // const fetchMenu = async () =>{
    //     const data = await fetch(
    //         MENU_API +resId
           
    //     );
    //     const json = await data.json();
    //     setResInfo(json.data)
    // };
  


    // console.log(resInfo)
   
    if ((resInfo === null)) return <Shimmer />;
   
    const {name,cuisines,costForTwo} = resInfo?.cards[0]?.card?.card?.info
    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
    
    // console.log("In restaurant menu......")
    // console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card?.card?.["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    // console.log(categories)
  
    return (
        <div className="text-center"> 
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">{cuisines.join(",")} - Rs-{costForTwo/100} cost for two</p>
            {/* category accordion */}
            {categories.map((category,index) => (
            <RestaurantCategory 
               key={category?.card?.card?.title} 
               data={category?.card?.card}
               showItems={index === showIndex ? true : false}
               setShowIndex = {() => setShowIndex(index)}
               dummy = {dummy}
               />
            ))}
        </div>
    );
};

export default RestaurantMenu;