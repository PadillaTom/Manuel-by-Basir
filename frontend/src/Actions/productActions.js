import Axios from 'axios';

// Constants:
import {
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_LIST_REQUEST,
} from '../Constants/productConstants';
import {
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
} from '../Constants/productConstants';

// ******** Getting Products List as a WHOLE:
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

// ******* Getting Product Details by ID Individually:
export const detailsProduct = (productId) => async (dispatch) => {
  dispatch({ type: PRODUCT_DETAILS_REQUEST, payload: productId });
  try {
    const { data } = await Axios.get(`/api/products/${productId}`);

    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
// QUE PASA?
// Solicitamos los DETAILS --> Sería el ID para generar la pagina individual de cada producto
// En caso de SUCESS, se pasa la DATA
// En caso de error: Se busca mensaje (RESPONSE) creado por backend
// Si no hay dicho mensaje: ERROR.MESSAGE --> Clasico mensaje de error.
