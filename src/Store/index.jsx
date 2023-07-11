// PACKAGES
import { configureStore } from '@reduxjs/toolkit';

// Reducers
import productReducer from './products';
import categoryReducer from './categories';
import cartReducer from './cart';


const store = () => configureStore({
    reducer:{
    products: productReducer,
    cart: cartReducer,
    categories: categoryReducer,
    }
});


export default store();