# Redux Setup

1. Create a file **store.js** in the frontend/src

```javascript
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// this is where you add all of the reducers created
const reducer = combineReducers({});

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
```

2. In the **index.js** file - import the store and wrap the React app with the store

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
**import { Provider } from 'react-redux';**
**import store from './store';**
import './bootstrap.min.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  **<Provider store={store}>**
    <App />
  **</Provider>,**
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
```

### Create CONSTANTS

1. Create a new folder in frontend/src **constants** and add a new file **productConstants.js**

```javascript
export const PRODUCT_LIST_REQUEST = 'PRODUCT_LIST_REQUEST';
export const PRODUCT_LIST_SUCCESS = 'PRODUCT_LIST_SUCCESS';
export const PRODUCT_LIST_FAIL = 'PRODUCT_LIST_FAIL';
```

### Create a reducer

2. Create a new folder in frontend/src **reducers** and add a new file **productReducers.js**

```javascript
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
} from '../constants/productConstants.js';

export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true };
    case PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload };
    case PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
```

### Create a actions

3. Create a new folder in frontend/src **actions** and add a new file **productActions.js**
