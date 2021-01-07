import dataSlice from './dataSlice';
import exampleReducer from './exampleReducer';
import mainReducer from './mainReducer';

const reducers = {
  main: mainReducer,
  example: exampleReducer,
  [dataSlice.name]: dataSlice.reducer,
  // auth: authReducer,
  // session: sessionReducer
};

export default reducers;
