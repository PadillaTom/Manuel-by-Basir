import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_SHIPPING_ADDRESS,
} from '../Constants/cartConstants';

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      // New Item (Has Qty)
      const item = action.payload;
      // item in Products (no qty)
      const existeItem = state.cartItems.find(
        (x) => x.product === item.product
      );
      // Replace old item for new item
      if (existeItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existeItem.product ? item : x
          ),
        };
      } else {
        return { ...state, cartItems: [...state.cartItems, item] };
      }
    case CART_REMOVE_ITEM:
      // Remove:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),
      };
    case CART_SAVE_SHIPPING_ADDRESS:
      return { ...state, shippingAddress: action.payload };
    default:
      return state;
  }
};
