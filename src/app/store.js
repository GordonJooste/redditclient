import { configureStore } from '@reduxjs/toolkit';
import postsSliceReducer from '../components/post/postSlice';

export const store = configureStore({
  reducer: {
    posts: postsSliceReducer,
  },
});
