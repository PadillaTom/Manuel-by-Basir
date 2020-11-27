import Axios from 'axios';

// Constants:
import { PRODUCT_LIST_REQUEST } from '../Constants/productConstats';
import { PRODUCT_LIST_SUCCESS } from '../Constants/productConstats';
import { PRODUCT_LIST_FAIL } from '../Constants/productConstats';

export const listProducts = () => async (dispatch) => {
  dispatch({
    type: PRODUCT_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get('/api/products');
    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload: error.message,
    });
  }
};

// Que pasa?
// 1) Se ejecuta el REQUEST (try and catch) con AXIOS al API
// 2) Una vez logrado se ejecuta el SUCCESS con payload dicha DATA.
// 3) En caso de Error, se ejecuta el FAIL con payload dicho MESSAGE.
// Todo sería importado desde variables creadas en CONSTANTS, para evitar errores de typeo.
