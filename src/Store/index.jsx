// PACKAGES
import {legacy_createStore as createStore, combineReducers, applyMiddleware} from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';

// MY STUFF
import productReducer from './products';
import cartReducer from './cart';
import categoryReducer from './categories/index.jsx';

const reducers = combineReducers({
    store: productReducer,
    cart: cartReducer,
    categories: categoryReducer,
});


const store = () => createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));


export default store();