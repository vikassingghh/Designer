import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        addCart:(state,action)=>{
            let data = action.payload;
            let dataId = data.id;
            let obj = state.items.find(
                (cartObj) => cartObj.objData.id === dataId
            );
            if(obj){
                obj.quantity = obj.quantity +1;
            }else{
                let cartObj = {objData : data, quantity : 1};
                state.items.push(cartObj);
            }
            
        },
        removeCart:(state,action)=>{
            let id = action.payload;
            let objIdx = state.items.findIndex((cartObj)=>cartObj.objData.id==id);
            state.items.splice(objIdx,1);
        },
        clearCart:(state) =>{
            state.items.length =0;
        }
    }
})

export const {addCart, removeCart, clearCart} = cartSlice.actions;
export default cartSlice.reducer;