import { configureStore } from '@reduxjs/toolkit';
import greetingsReducer from './reducer/greetingsReducer';

const store = configureStore({
  reducer: {
    greeting: greetingsReducer,
  },
});

export default store;
