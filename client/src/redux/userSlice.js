import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const createUser = createAsyncThunk("user/create", async (name) => {
  console.log(name);
  return axios.post(`${process.env.REACT_APP_SERVER_URL}/users/create`, {
    name,
  });
});

export const usersSlice = createSlice({
  name: "user",
  initialState: "",
  reducers: {
    removeUser: (state, action) => {
      return "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createUser.fulfilled, (state, action) => {
      console.log(action.payload.data._id);
      state = action.payload.data._id;
      localStorage.setItem("user", action.payload.data._id);
      return state;
    });
    builder.addCase(createUser.rejected, (state, action) => {
      console.log(action.payload);
    });
  },
});
export const { removeUser } = usersSlice.actions;
export default usersSlice.reducer;
