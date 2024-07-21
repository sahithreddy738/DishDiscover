import { useState } from "react";
import CardMenu from "./CardMenu";
const RestaurantCategory=({data}) => {
    const [showItems,setShowItems]=useState(false);
    const {title,itemCards}=data;
    const handleClick=() =>{
        setShowItems(!showItems);
    }
    return (
        <div className="w-[800px] mx-auto my-4 p-4 border-b-2" >
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                <span className="font-bold text-lg">{title}-{`(`+itemCards.length+`)`}</span>
                <span>⬇️</span>
            </div>
            {showItems && itemCards && itemCards.map((menuItem)=><CardMenu key={menuItem.card?.info?.id} menuData={menuItem}/>)}
        </div>
    )
}

export default RestaurantCategory;