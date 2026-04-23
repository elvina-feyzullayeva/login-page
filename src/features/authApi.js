import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../config/api";
import axios from "axios";

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (userData, thunkAPI) => {
    try {
      const response = await api.post("/auth/login", userData)
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data?.message || "Something went wrong");
    }
  }
);

export const signupUser = createAsyncThunk(
  "auth/signupUser",
  async (userData, thunkAPI) => {
    try {
      const usersRes = await api.get("/users");
      const users = usersRes.data.users;

      const existingUser = users.find(
        (u) => u.username === userData.username
      );

      if (existingUser) {
        return thunkAPI.rejectWithValue("Username already exists");
      }

      const response = await api.post("/users/add", userData);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || "Something went wrong"
      );
    }
  }
);
