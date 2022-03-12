import { configureStore } from '@reduxjs/toolkit';
import service from '../features/counter/counterSlice';
export const store = configureStore({
  reducer: {
    services: service,
  }
});
