import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const createOrder = createAsyncThunk(
  "order/create",
  async (orderList) => {
    //So you dont have to create a new user everytime you refresh
    let userId = localStorage.getItem("user");
    let data = {
      userId: userId,
      ordersList: orderList,
    };
    console.log(data);
    return axios.post(
      `${process.env.REACT_APP_SERVER_URL}/orders/create`,
      data
    );
  }
);
export const orderSlice = createSlice({
  name: "order",
  initialState: [],
  reducers: {
    addToOrder: (state, action) => {
      let itemExist = state.filter((item) => item._id === action.payload._id);
      if (itemExist.length > 0) {
        state.map((item) => {
          if (item._id === action.payload._id)
            item.quantity = action.payload.quantity;
        });
      } else {
        state.push(action.payload);
      }
    },
    refreshCart: () => {
      return [];
    },
    removeItem: (state, action) => {
      return state.filter((item) => item._id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createOrder.fulfilled, (state, action) => {
      console.log(action.payload);
    });
    builder.addCase(createOrder.rejected, (state, action) => {
      console.log(action.payload);
    });
  },
});

export const { addToOrder, refreshCart, removeItem } = orderSlice.actions;

export default orderSlice.reducer;
