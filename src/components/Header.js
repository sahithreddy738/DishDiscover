import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const cartData=useSelector((store)=>store.cart.items);
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus=useOnlineStatus();
  const  {loggedInUser}=useContext(UserContext);
  return (
    <div className="flex justify-between bg-gray-400 m-2 p-4 rounded-lg">
      <div className="image-container">
        <img className="w-32" src={LOGO_URL}></img>
      </div>
      <div>
        <ul className="flex items-center m-8  p-4 text-black">
          <li className="mx-4 font-black text-lg">Online-Status:{onlineStatus?"🟢":"🔴"}</li>
          <li className="mx-4 font-black text-lg"><Link to="/">Home</Link></li>
          <li className="mx-4 font-black text-lg"><Link to="/about">About Us</Link></li>
          <li className="mx-4 font-black text-lg"><Link to="/contact">Contact Us</Link></li>  
          <li className="mx-4 font-black text-lg"><Link to="/grocery">Grocery</Link></li>
          <li className="mx-4 font-black text-lg"><Link to="/cart">Cart-{cartData.length}</Link></li>
          <button
            className="bg-stone-200  mx-2 px-4 py-2 rounded-lg"
            onClick={() => {
              btnName == "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
          <li className="mx-4 font-black text-lg"><Link>{loggedInUser}</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
