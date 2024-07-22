import { createSlice } from "@reduxjs/toolkit";


const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload);
        },
        clearCart:(state)=>{
            state.items.length=0;
        },
        removeItem:(state,action) => {
            console.log(action);
            const filteredItems=state.items.filter((item)=>item.card?.info?.id===action.payload?.card?.info?.id);
            const index=state.items.indexOf(filteredItems[0]);
            state.items.splice(index,1);
        }
    }
});

export const {addItem,clearCart,removeItem}=cartSlice.actions;

export default cartSlice.reducer;