import { LOGO_URL } from "../utils/constants"
const Header=()=>{
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
                </ul>
            </div>

        </div>  
     )
}

//export Header from this fil
export default Header