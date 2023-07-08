// PACKAGES
import {legacy_createStore as createStore, combineReducers, applyMiddleware} from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';

// MY STUFF
import productReducer from './products/productReducer';
import cartReducer from './cart/cartReducer';

const reducers = combineReducers({
    store: productReducer,
    cart: cartReducer,
});


const store = () => createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));


export default store();