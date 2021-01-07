import Axios from 'axios';
import dataSlice from './reducers/dataSlice';

const { setProducts } = dataSlice.actions;

export function getProducts() {
  return async (dispatch, getState) => {
    const { products } = getState().data;

    if (products.length > 0) {
      return;
    }

    const { data } = await Axios.get(
      'https://gorest.co.in/public-api/products'
    );
    console.log('data from api', data);

    dispatch(setProducts(data.data));
  };
}
