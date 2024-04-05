import { configureStore } from '@reduxjs/toolkit';
import  userReducer  from './Redux/Slice';
import  counterSlice  from './Redux/Slice1';
export const store = configureStore({
  reducer: {
    userData: userReducer,
    counter:counterSlice
  }
});

export default store;