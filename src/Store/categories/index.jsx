import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios'


// Create slice and actions in one 
const categorySlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [],
    activeCategory: ''
  },
  
  reducers:{
    setActiveCategory: (state, action) =>{
      return {
        ...state,
         activeCategory: action.payload,
      }
    },
    setAllCategories: (state, action) => {
      state.categories = action.payload
    },
  }
});


// Get all of the categories for initial state
export const getCategories = ()=> async(dispatch)=>{
let response = await axios.get('https://api-js401.herokuapp.com/api/v1/categories');
dispatch((setAllCategories(response.data.results)))
}

// Export reducer and actions 
export const {setAllCategories, setActiveCategory} = categorySlice.actions
  export default categorySlice.reducer;
  
