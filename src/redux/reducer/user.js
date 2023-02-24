import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  users: [
    {
      email: "user@gmail.com",
      phone: "1234567890",
      name: "Guest User",
      password: "user",
      pic: "./images/user.png",
    },
    {
      email: "patidaryogesh053@gmail.com",
      phone: "8964094305",
      name: "Yogesh Patidar",
      password: "854301@yogi",
      pic: "./images/yogi.png",
    },
    {
      email: "prince@gmail.com",
      phone: "9570357080",
      name: "Prince",
      password: "854312@prince",
      pic: "./avatar.webp",
    },
  ],
};

export const userSlice = createSlice({
    name:'reddit_user',
    initialState,
    reducers:{
    }
})
export const {} = userSlice.actions;
export default userSlice.reducer;