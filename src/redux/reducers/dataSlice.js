import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export default dataSlice;
