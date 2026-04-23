import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "../features/authSlice";
import { userReducer } from "../features/dataSlice";

export const store= configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
  }
})