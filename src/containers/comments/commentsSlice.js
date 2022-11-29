import { createAsyncThunk, createSlice, configureStore, useDispatch } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { apiCall } from '../../components/post/Data';


// Make sure to update the inital state with all the post information you want to use! Otherwise error on first run
const initialState = {
  permalink: '/r/AskReddit/comments/z78r84/if_you_invented_a_car_that_ran_on_stupidity_where/',
  comments: [{data: {body:'ha', subreddit: '/r/trees', num_comments: 200, id: 1, selftext:''}},{data: {body:'ha', subreddit: '/r/trees', num_comments: 201, id: 2, selftext:''}},{data: {body:'ha', subreddit: '/r/trees', num_comments: 204, id: 3, selftext:''}}],
  post: {title:'ha', subreddit: '/r/trees', num_comments: 200, id: 1, selftext:'', permalink:'banaHas'},
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.



export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    changePermaLink: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.permalink = action.payload;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    changeComments: (state, action) => {
      state.comments = action.payload;
    },
    changePost: (state, action) => {
        state.post = action.payload;
    },
  },
});

export const { changePermaLink, changeComments, changePost } = commentsSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectComments = (state) => state.comments;
export const selectPermalink = (state) => state.comments.permalink;
export const selectPost = (state) => state.comments.post;

export default commentsSlice.reducer;
