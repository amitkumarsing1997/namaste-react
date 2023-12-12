import { LOGO_URL } from "../utils/constants"
import { useState ,useEffect} from "react"

import { Link } from "react-router-dom"

// never create useState outside of component (means here) always creates in top of the component not outside of the component

// never create your useState inside if else or for loop or inside any normal function
const Header=()=>{

    const [btnNameReact,setBtnNameReact] = useState("Login")
    
    // when you use useEffect without a 'deependecy array' it will render everytime when our component render

    useEffect(() => {
        console.log("useEffect Called")

    })     

    // when dependency array is empty [] than useEffect will called only initial render and just once 

    useEffect(() => {
        console.log("useEffect Called with empty dependency array")

    },[])   
   // if dependency array is not empty [btnNameReact] than useEffect will called everytime when btnNameReact is updated
    useEffect(() => {
        console.log("useEffect Called with non empty array")

    },[btnNameReact])   



    return(
        <div className="header">
            <div className="Logo-container">
            <img 
            className="logo" 
            // src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?size=2"/>
            src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>

                    {/* <li>
                        <a href="/about">About Us</a>
                    </li> */}


                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact">
                            Contact Us
                        </Link>
                    </li>
                    <li>Cart</li>
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
                        
                    }}>{btnNameReact}</button>


                </ul>
            </div>

        </div>  
     )
}

//export Header from this file
export default Header