import { createAction, createReducer } from "@reduxjs/toolkit";
import { ADD_CART, REMOVE_CART } from '../../../Store/constant'


let initialState = {
    cart: [],
};


export const addCart = createAction(ADD_CART);
export const removeCart = createAction(REMOVE_CART);

 const cartReducer = createReducer(
    initialState,
    {
        [ADD_CART]: (state, action)=>{
            return{
                ...state,
                cart: [...state, {name: action.payload.name, price: action.payload.price}]
            }
        },

        [REMOVE_CART]: (state, action)=>{
            return{
                ...state,
                cart: state.cart.filter((product)=>product.name !== action.payload.name)
            }
        }
    }

)




export default cartReducer;