import { ADD_PRODUCT, BUY_PRODUCT } from './actions';

const initialState = {
  products: [],
  cart: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload]
      };
    case BUY_PRODUCT:
      const product = state.products.find((p) => p.id === action.payload);
      return {
        ...state,
        cart: [...state.cart, product]
      };
    default:
      return state;
  }
};

export default rootReducer;
