import { createSlice } from "@reduxjs/toolkit";

// Create slice and actions
const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers:{
        addProduct: (state, action) => [...state, action.payload],
        removeProduct: (state, action)=> state.filter((product)=> product.name !== action.payload.name)
    }   
})

// Export reducer and actions
export const {addProduct, removeProduct} = cartSlice.actions;
export default cartSlice.reducer;