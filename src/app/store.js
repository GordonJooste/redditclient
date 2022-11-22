import { configureStore } from '@reduxjs/toolkit';
import postsSliceReducer from '../components/post/ArticleSlice';

export const store = configureStore({
  reducer: {
    posts: postsSliceReducer,
  },
});
