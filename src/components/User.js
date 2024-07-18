import { useState } from "react";

const User=({name,location})=>{
    return (
        <div className="user-card">
             <h2>{name}</h2>
             <h3>{location}</h3>
        </div>
    )
}

export default User; 