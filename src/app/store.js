import { configureStore } from '@reduxjs/toolkit';
import AppReducer from '../features/appSlice';

export default configureStore({
  reducer: {
    app: AppReducer,
  },
});
