import { CART_ADD_ITEM } from '../Constants/cartConstants';

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

    default:
      return state;
  }
};
