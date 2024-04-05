
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { jsonData } from './Api';

// Define the initial state for the slice
const initialState = {
  value: [],
  status: 'idle',
  error: null
};

// Define an async thunk for fetching data from the API
export const fetchPost = createAsyncThunk('dddd/fetchPost', async () => {
  try {
    const response =await jsonData()
    return  response 
  } catch (error) {
    throw new Error('Failed to fetch data')
  }
});

// Define the user slice
const userSlice = createSlice({
  name: 'dddd',
  initialState,
  reducers: {
    // Add your regular reducers here if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPost.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPost.fulfilled, (state,action) => {
        state.status = 'succeeded';
        state.value = action.payload; // assuming your API returns the updated value
      })
      .addCase(fetchPost.rejected, (state,action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});
export default userSlice.reducer;