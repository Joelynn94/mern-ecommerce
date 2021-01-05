import axios from 'axios';
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
} from '../constants/productConstants';

export const listProducts = () => async (dispatch) => {
  try {
    // dispatch the request
    dispatch({ type: PRODUCT_LIST_REQUEST });

    // make the request
    const { data } = await axios.get('/api/products');

    // if the request was succesful
    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    // if the request failed
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
      // error.response.data.message is coming from the custom middleware
    });
  }
};

export const listProductDetails = (id) => async (dispatch) => {
  try {
    // dispatch the request
    dispatch({ type: PRODUCT_DETAILS_REQUEST });

    // make the request
    const { data } = await axios.get(`/api/products/${id}`);

    // if the request was succesful
    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    // if the request failed
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
      // error.response.data.message is coming from the custom middleware
    });
  }
};
