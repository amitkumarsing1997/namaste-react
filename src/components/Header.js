import { LOGO_URL } from "../utils/constants"
import { useState } from "react"
const Header=()=>{

    let btnName = "Login"
    // but below we use const and we can not reassign value to const variable than why it does not show any error
    // answer is when we click on login btn than onclick event change to "logout" and chuki ye useState hook 
    // ka variable hai 'btnNameReact' and to header component renender hoga due to useState hook ke karan and rerender ki wajah
    // se btnNameReact variable jo ki const hai ek naye variable ki tarah treat hoga na ki purane wale ki tarah se
    // ek tarah se hum bol sakte hai ki ye 'dusra' const variable hai

    
    const [btnNameReact,setBtnNameReact] = useState("Login")
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
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
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