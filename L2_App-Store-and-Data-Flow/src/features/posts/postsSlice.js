import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
  {
    id: '1',
    title: 'Learning Redux Toolkit',
    content: 'Hi, I am learning redux',
    date: new Date().toISOString(),
  },
  {
    id: '2',
    title: 'Slices...',
    content: 'The more I say slice, the more I want Pizza',
    date: new Date().toISOString(),
  }
];

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action){
        state.push(action.payload);
      },
      prepare(title, content, userId){
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            date: new Date().toISOString(),
            userId
          }
        }
      }
    }
  }
});

export const selectAllPosts = (state) => state.posts;

export const { postAdded } = postsSlice.actions;

export default postsSlice.reducer;