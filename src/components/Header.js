import { LOGO_URL } from "../utils/constants";

const Header=() =>{
    return (
        <div className="header-container">
            <div className="image-container">
                <img className="logo" src={LOGO_URL}></img>
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

export default Header;