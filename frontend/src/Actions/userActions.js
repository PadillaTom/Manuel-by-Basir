import {
  USER_SIGNIN_FAIL,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_REQUEST,
  USER_SIGNOUT,
} from '../Constants/userConstants';
import Axios from 'axios';

export const signin = (email, password) => async (dispatch) => {
  dispatch({
    type: USER_SIGNIN_REQUEST,
    payload: { email, password },
  });
  try {
    //   Set up the data from the POST in backend
    const { data } = await Axios.post('/api/users/signin', {
      email,
      password,
    });
    // Action:
    dispatch({
      type: USER_SIGNIN_SUCCESS,
      payload: data,
    });
    // Guardar data en Local Storage, para mantener usuario Logged In:
    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_SIGNIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const signout = () => (dispatch) => {
  localStorage.removeItem('userInfo');
  localStorage.removeItem('cartItems');
  dispatch({ type: USER_SIGNOUT });
};
