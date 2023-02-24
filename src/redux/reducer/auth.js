import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  name: null,
  email:null,
  pic:null
};

export const authSlice = createSlice({
  name: "reddit_auth",
  initialState,
  reducers: {
    login: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.isLoggedIn = true;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.pic = action.payload.pic
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.name = null;
      state.email = null;
      state.pic = null;
    }
  },
});

// Action creators are generated for each case reducer function
export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
