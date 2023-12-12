# Namaste React


#To run particular code go to the
suppose want to run App_ep3.js rename it to App.js 
than put npm start in terminal
# Parcel
- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification of file
- Bundling
- Compressing our file
- Consistent Hashing
- Code Splitting
- Differential Bundling -- our app can run older browser as well (means support older browser)
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unused code 
- Different dev and prod bundle

#Namaste Food

// Header
//   -Logo
//   -Nav Items 
// Body 
//  -Search
//  -RestaurantContainer 
//     -RestaurantCard 
//        -img
//        -Name of Res , Star Rating ,cuisine ,delivery time
// Footer 
//  -Copyright 
//  -Links
//  -Address 
//  -Contact 


Two types of Export/Import

-- Default Export/Import

export default Component;
import Component from "path"


-- Named Export/Import

export const Component;
import {Component} from 'path';


#React Hook

(Normal Js utility Functions)

-useState()- to generate superpowerful state variables in react.
 
-useEffect()- it takes two argument a callback function and array 
   when this call back function is called answer is, it called after when your component is render. 



There are two types of routing in web Applications
  1. Client side routing.
       we are not making network call while moving to the page because all the components already loaded on the our page.
       when we go to the about us page it just load that components.REACT work on this routing.
        
  2. Server side routing.
     you have index.html , about.html , contact.html 
      if we click on about.html it reload the page and send the network call to about.html and fetches the html and render on the web page


// behind the scene link uses anchor tag


      swiigy live api's-

      https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.960059122809971&lng=77.57337538383284&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING

    
      restaurant furher api's- Episode 7

      https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.960059122809971&lng=77.57337538383284&restaurantId=18975&catalog_qa=undefined&submitAction=ENTER


    data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards



    main page-
    https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.960059122809971&lng=77.57337538383284&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING


    restaurant and menu-

    https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.960059122809971&lng=77.57337538383284&restaurantId=792403&catalog_qa=undefined&submitAction=ENTER