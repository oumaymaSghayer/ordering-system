import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllItems = createAsyncThunk("items/getAll", async () => {
  return axios.get(`${process.env.REACT_APP_SERVER_URL}/items`);
});

export const itemsSlice = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    refreshItems: (state, action) => {
      return [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllItems.fulfilled, (state, action) => {
      state = action.payload.data;
      return state;
    });
    builder.addCase(getAllItems.rejected, (state, action) => {
      console.log(action.payload);
    });
  },
});
export const { refreshItems } = itemsSlice.actions;
export default itemsSlice.reducer;
