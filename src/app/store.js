import { configureStore } from '@reduxjs/toolkit';
import services from '../features/counter/counterSlice';
export const store = configureStore({
  reducer: {
    services:services,
  }
});
