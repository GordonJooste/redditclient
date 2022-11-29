import { configureStore } from '@reduxjs/toolkit';
import postsSliceReducer from '../components/post/ArticleSlice';
import commentsSliceReducer from '../containers/comments/commentsSlice';

export const store = configureStore({
  reducer: {
    posts: postsSliceReducer,
    comments: commentsSliceReducer,
  },
});
