import { createStore } from 'redux';
import data from './Utils/data';

const initialState = {};

const reducer = (state, action) => {
  return { products: data.products };
};
const store = createStore(reducer, initialState);

export default store;
