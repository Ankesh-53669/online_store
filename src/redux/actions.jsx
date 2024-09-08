// src/redux/actions.js

// Action Types
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const BUY_PRODUCT = 'BUY_PRODUCT';

// Action Creators
export const addProduct = (product) => ({
  type: ADD_PRODUCT,
  payload: product
});

export const buyProduct = (productId) => ({
  type: BUY_PRODUCT,
  payload: productId
});
