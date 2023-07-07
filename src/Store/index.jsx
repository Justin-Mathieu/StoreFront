import {legacy_createStore as createStore, combineReducers} from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import productReducer from './category';

let reducer = combineReducers({
    products: productReducer,
});


const store = () => {
    return createStore(reducer, composeWithDevTools());
};

export default store();