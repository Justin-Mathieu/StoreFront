import {legacy_createStore as createStore, combineReducers} from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import productReducer from './reducer';

const reducers = combineReducers({
    store: productReducer,
});


const store = () => createStore(reducers, composeWithDevTools());


export default store();