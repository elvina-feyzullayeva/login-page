import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginUser, signupUser } from "./authApi";
import { setTokens } from "../utils/tokenStorage";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  accessToken: localStorage.getItem("accessToken") || null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        const { accessToken, refreshToken, ...user } = action.payload;
        state.user = user;
        state.accessToken = accessToken;
        state.loading = false;
        state.error = null;

        setTokens(accessToken, refreshToken);
        localStorage.setItem("user", JSON.stringify(user));
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.error = null;
        state.loading= false;
      });
  },
});

export const authReducer = authSlice.reducer;
