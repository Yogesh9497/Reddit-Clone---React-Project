import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [
    {
      id: 1,
      pic: "./images/yogi.png",
      postedBy: "Yogesh Patidar",
      postTitle: "Is it true that Avantika Malik left Imran Khan because he didn't have a stable income?",
      postText:
        "After he stopped getting work? Read many outlets that reported this back when they separated but recent stories are about him cheating?",
      like_users: ["Prince", "Rishabh"],
      dislike_users: ["yogesh, dharmu, mitesh, gopal"],
      postedDate: new Date("2/16/2023")
    },
  ],
};

export const postSlice = createSlice({
  name: "reddit_post",
  initialState,
  reducers: {
    post_add: (state,action)=>{
      state.posts = [
        ...state.posts,
        {
          id: state.posts.length+1,
          pic: action.payload.pic,
          postedBy: action.payload.postedBy,
          postTitle: action.payload.postTitle,
          postText:action.payload.postText,
          like_users: [],
          dislike_users: [],
          postedDate: new Date()
        },
      ];
    },
    
    post_like: (state,action)=>{
      state.posts = state.posts.map((post) => {
        if (post.id === action.payload.id) {
          if(post.like_users.some(like=>like===action.payload.login_user)){
            post.like_users = post.like_users.filter(like=>like!==action.payload.login_user)
          }else{
            post.like_users = [...post.like_users,action.payload.login_user]
          }
          return post;
        } else {
          return post;
        }
      });
    },

    post_dislike: (state,action)=>{
      state.posts = state.posts.map((post) => {
        if (post.id === action.payload.id) {
          if(post.dislike_users.some(dislike=>dislike===action.payload.login_user)){
            post.dislike_users = post.dislike_users.filter(dislike=>dislike!==action.payload.login_user)
          }else{
            post.dislike_users = [...post.dislike_users,action.payload.login_user]
          }
          return post;
        } else {
          return post;
        }
      });
    },

  },
});

export const {post_add,post_dislike,post_like} = postSlice.actions;
export default postSlice.reducer;
