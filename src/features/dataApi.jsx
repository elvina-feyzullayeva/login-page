import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../config/api";

export const fetchData = createAsyncThunk(
  "user/fetchData",
  async (_, thunkAPI) => {
    try {
      const res = await api.get("/users/me");

      console.log("FULL RESPONSE:", res);       
      console.log("DATA:", res.data);         

      return res.data;
    } catch (err) {
      console.log("ERROR:", err); 
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || "Something went wrong"
      );
    }
  }
);