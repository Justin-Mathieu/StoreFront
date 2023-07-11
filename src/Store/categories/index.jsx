import { createAction, createReducer } from "@reduxjs/toolkit";
import axios from 'axios'
import { SET_ACTIVE, SET_CATEGORY } from '../constant';

let initialState = { 
  categories: [],
  activeCategory: '',
}

export const setActive = createAction(SET_ACTIVE);
export const setCategory = createAction(SET_CATEGORY);


const categoryReducer = createReducer(
  initialState,
{
  [SET_ACTIVE]: (state, action) => {
    return {
      ...state,
      activeCategory: action.payload,
    }
  },

}
);

export const getCategories = ()=> async(dispatch, getState)=>{
let response = await axios.get('https://api-js401.herokuapp.com/api/v1/categories');
dispatch((setCategory(response.data.results)))
}


  export default categoryReducer;
  
