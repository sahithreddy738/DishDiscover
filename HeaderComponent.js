import React from "react";
import { Logo, UserIcon } from "./utils";

const HeaderComponent=() =>{
    return (
        <div id="header" style={{
            height:70,
            display:"flex",
            gap:200,
            justifyContent:"space-between",
            alignItems:"center",
            backgroundColor:"black",
            borderRadius:10,
        }}>
                <img src={Logo} style={{width:"60px",height:"60px"}}></img>
                <input style={{height:40,width:800,borderRadius:10}} placeholder="Search Here"></input>
                <img src={UserIcon} style={{width:"50px",height:"50px"}}></img>
        </div>
    )
}

export default HeaderComponent;