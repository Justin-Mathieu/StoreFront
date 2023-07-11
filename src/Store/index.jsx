// PACKAGES
import { configureStore } from '@reduxjs/toolkit';

// Reducers
import productReducer from './products';
import categoryReducer from './categories/index.jsx';
import cartReducer from '../Components/Cart/cart';


const store = () => configureStore({
    reducer:{
    products: productReducer,
    cart: cartReducer,
    categories: categoryReducer,
    }
});


export default store();