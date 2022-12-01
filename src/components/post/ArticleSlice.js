import { createAsyncThunk, createSlice, configureStore, useDispatch } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { apiCall } from './Data';


// Make sure to update the inital state with all the post information you want to use! Otherwise error on first run
const initialState = {
  subreddit: '/r/popular',
  posts: [{data: {title:'ha', subreddit: '/r/trees', num_comments: 200, id: 1, selftext:'', permalink:'banaHas', url: 'hashsa'}},{data: {title:'ha', subreddit: '/r/trees', num_comments: 201, id: 2, selftext:'',permalink:'banaHas', url: 'hashsa'}},{data: {title:'ha', subreddit: '/r/trees', num_comments: 204, id: 3, selftext:'',permalink:'banaHas', url: 'hashsa'}}],
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.

export const loadPostsPop = ()=>{
  return async (dispatch) =>{
    const response = await apiCall.fetchPosts('/r/popular');
    const payload = response.data.children;
    console.log('thunking');
    dispatch({type:'posts/changePosts', payload: payload});
  }
}

export const loadPostsEye = ()=>{
  return async (dispatch) =>{
    const response = await apiCall.fetchPosts('/r/eyebleach');
    const payload = response.data.children;
    console.log('thunking');
    dispatch({type:'posts/changePosts', payload: payload});
  }
}

export const loadPostsFun = ()=>{
  return async (dispatch) =>{
    const response = await apiCall.fetchPosts('/r/funny');
    const payload = response.data.children;
    console.log('thunking');
    dispatch({type:'posts/changePosts', payload: payload});
  }
}

export const postSlice = createSlice({
  name: 'posts',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    changeSubreddit: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.subreddit = action.payload;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    changePosts: (state, action) => {
      state.posts = action.payload;
    },
  },
});

export const { changeSubreddit, changePosts } = postSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectPosts = (state) => state.posts;
export const selectFirstPost = (state) => state.posts.posts[0];
export const selectSubreddit = (state) => state.posts.subreddit;

export default postSlice.reducer;
