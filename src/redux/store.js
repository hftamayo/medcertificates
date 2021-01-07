import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import reducers from './reducers';

const middleware = [
  ...getDefaultMiddleware(),
  // ... my middleware
];

const store = configureStore({
  reducer: reducers,
  middleware,
});

export default store;
