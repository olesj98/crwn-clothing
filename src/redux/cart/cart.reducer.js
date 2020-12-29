import { CartActionTypes } from './cart.types';
import { addItemToCart, removeItemFromCart, decreaseItem } from './cart.utils';

const initState = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case CartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };
    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: decreaseItem(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
