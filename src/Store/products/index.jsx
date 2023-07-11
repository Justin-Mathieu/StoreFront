import { createAction, createReducer } from '@reduxjs/toolkit';
import { SET_PRODUCTS, GET_PRODUCTS, SET_ACTIVE } from '../constant'
import axios from 'axios';

let initialState = {
  products: [],
};
  
export const setProducts = createAction(SET_PRODUCTS);


const productReducer = createReducer(
  initialState,
  {
    [SET_PRODUCTS]: (state, action)=>{
      return {
        ...state,
        products: action.payload
        }
      },
      [SET_ACTIVE]: (state, action)=>{
        return{
          ...state,
          products: state.products.filter(item => item.category === action.payload.name)
        }
      }
      
    }
  
)
export const getData = ()=> async(dispatch, getState)=>{
  let response = await axios.get('https://api-js401.herokuapp.com/api/v1/products');
  dispatch(setProducts(response.data.results));
}

export default productReducer;

