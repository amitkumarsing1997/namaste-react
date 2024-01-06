import { LOGO_URL } from "../utils/constants"
import { useState ,useEffect,useContext} from "react"

import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"
import UserContext from "../utils/UserContext"
import { useSelector } from "react-redux"

// never create useState outside of component (means here) always creates in top of the component not outside of the component

// never create your useState inside if else or for loop or inside any normal function
const Header=()=>{

    const [btnNameReact,setBtnNameReact] = useState("Login")
    
   const onlineStatus = useOnlineStatus()

   const {loggedInUser} = useContext(UserContext)

   //Subscribing to the store using a selector

      const cartItems = useSelector((store)=> store.cart.items);

   
    return(
        <div className="flex justify-between bg-green-100 shadow-lg sm:bg-yellow-50 lg:bg-pink-50 ">
            <div className="Logo-container">
            <img 
            className="w-56" 
            // src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?size=2"/>
            src={LOGO_URL}/>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4"> 
                        Online Status: {onlineStatus ? "✅":"🔴"}
                    </li>
                    <li className="px-4">
                        <Link to="/">Home</Link>
                    </li>

                    {/* <li>
                        <a href="/about">About Us</a>
                    </li> */}


                    <li className="px-4">
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/contact">
                            Contact Us
                        </Link>
                    </li>

                    <li className="px-4">
                        <Link to="/grocery">
                            Grocery
                        </Link>
                    </li>

                    <li className="px-4 font-bold text-xl">
                         <Link to="/cart">
                         Cart - ({cartItems.length} items)
                         </Link>
                        
                    </li>
                 {/* even though our onclick is called but our ui not reender or our header component not rerender
                 so it not print on ui as 'Logout' 
                 because here we use simple javascript variable instead of 
                 usestate hook varaible. beause only variable who bind with 
                 useState hook have power to re render the page/ui */ }
                    
                    
                    {/* <button className="login" onClick={()=>{
                        btnName="Logout"
                        console.log(btnName)
                    }}>{btnName}</button> */}
              
                {/* here note the important point when btn clicked it not rerender the btn component bulki
                ye pure Header Component ko rerender krta hai */}
                    {/* <button className="login" onClick={()=>{
                        setBtnNameReact("Logout")
                        console.log(btnNameReact)
                    }}>{btnNameReact}</button> */}

                   <button className="login" onClick={()=>{
                        btnNameReact==="Login"? setBtnNameReact("Logout"): setBtnNameReact("Login")
                        
                    }}>{btnNameReact}
                    </button>

                    <li className="px-4 font-bold">{loggedInUser}</li>


                </ul>
            </div>

        </div>  
     )
}

//export Header from this file
export default Header