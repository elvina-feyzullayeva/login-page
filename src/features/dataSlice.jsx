import { createSlice } from "@reduxjs/toolkit";
import { fetchData } from "./dataApi";

const initialState = {
  loading: false,
  error: null,
  user: null,
}

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
      })
      // .addCase(fetchData.fulfilled, (state, action) => {
      //   state.loading = false;
      //   state.user = action.payload;
      //   state.error = null;
      // })
      .addCase(fetchData.fulfilled, (state, action) => {
        console.log("PAYLOAD:", action.payload); // 👈 сюда

        state.loading = false;
        state.user = action.payload;
      })
  }
})

export const userReducer = userSlice.reducer;