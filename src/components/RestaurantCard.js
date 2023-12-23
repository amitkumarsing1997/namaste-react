import {CDN_URL} from "../utils/constants"


const RestaurantCard=(props)=>{
    const { resData }=props

    const {
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
        sla,

    }=resData?.info
    return (
        <div className="m-4 p-4 w-[250px] h-[370px] rounded-lg bg-gray-50 hover:bg-purple-500">
            {/* <img 
             className="res-logo"
            alt="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/x4uyxvihmg8qa3pddkgf"/> */}

            <img 
              className="rounded-lg"
              src={ 
                // this is basically cloudinary image cdn links
                CDN_URL+cloudinaryImageId
              }
              />
            <h3 className="font-bold py-3 text-lg">{name}</h3>
            <h4>{cuisines.join(" , ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.slaString}</h4>
        </div>
    )
}

export default RestaurantCard