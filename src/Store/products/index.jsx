import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// Create reducer and action in one
const productSlice = createSlice({
  name: 'products',
  initialState: [],
  reducers:{
    setProducts: (state, action)=> action.payload,
  }

});

// Get products with active category as option
export const getProducts = (activeCategory) => async (dispatch)=>{
  console.log(activeCategory);
  let response = await axios.get(`https://api-js401.herokuapp.com/api/v1/products?category=${activeCategory}`);
  dispatch(setProducts(response.data.results));
}

// Decrement inventory on Add to cart
export const removeInventory = (product) => async (dispatch)=>{
  console.log('===============>>>>>>>>>HERE<<<<<<<<<<<<<<=================')
  product = {...product, inStock: product.inStock -1}
   await axios.put(`https://api-js401.herokuapp.com/api/v1/products/${product._id}`,  product)
  dispatch(getProducts(product.category));
}

// Increment inventory on removing from cart
export const addInventory = (product) => async (dispatch) =>{
  product = {...product, inStock: product.inStock +1}
  await axios.put(`https://api-js401.herokuapp.com/api/v1/products/${product._id}`, product)
dispatch(getProducts(product.category))
}

// Export actions and erducer
export const {setProducts} = productSlice.actions
export default productSlice.reducer;

