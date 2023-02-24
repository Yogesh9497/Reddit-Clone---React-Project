import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import userReducer from './reducer/user'
import authReducer from './reducer/auth'
import postReducer from './reducer/post'
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const reducer = combineReducers({
  reddit_user: userReducer,
  reddit_auth: authReducer,
  reddit_post: postReducer,
});
const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store