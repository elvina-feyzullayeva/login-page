import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginRequest } from "./userApi";


const initialState={
  user: JSON.parse(localStorage.getItem("user" || null)),
  accessToken: JSON.parse(localStorage.getItem("accessToken" || null)),
  loading: false,
  error: null,
}

const authSlice= createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state)=>{
      state.user= null;
      state.accessToken= null;
      localStorage.clear();
    }
  },
  extraReducers: (builder)=>{
    builder
      .addCase(loginUser.pending, (state, action)=>{
        state.loading= true;
      })
      .addCase(loginUser.fulfilled, (state, action)=>{
        state.loading= false;
        state.users= action.payload;
        state.accessToken= action.payload;
      })
      .addCase(loginUser.rejected, (state, action)=>{
        state.loading= false;
        state.error= action.payload;
      })
  }
})


export const loginUser = createAsyncThunk(
  "user/login",
  async ({ email, password }, thunkAPI) => {
    try {
      const user = await loginRequest(email, password);
      const accessToken = "access_" + user.id + "_" + Date.now();

      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("user", JSON.stringify(user));

      return { user, accessToken };
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);


export const authReducer= authSlice.reducer;
export const {logout} = authSlice.actions;