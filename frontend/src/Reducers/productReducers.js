const {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
} = require('../Constants/productConstats');

export const productListReducer = (
  state = { loading: true, products: [] },
  action
) => {
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

// QUE PASA?
// 1) REQUIRE las constants desde su archivo
// 2) Exportamos una ProductListReducer con STATE initial (Empty ARRAY []) y Action
// 3) Creamose CASE para cada caso.
// 4) REQUEST = Loading, SUCCESS = Products Pedidos al backend, FAIL = Error message
