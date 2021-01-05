import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import {
  productListReducer,
  productDetailsReducer,
} from './reducers/productReducers.js';

// this is where you add all of the reducers created
const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
});

// set inital state
const initialState = {};

// an array of middle ware
const middleware = [thunk];

// create the redux store
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
