import { configureStore } from "@reduxjs/toolkit";

import orderReducer from "./orderSlice";
import itemsReducer from "./itemsSlice";
import userReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    order: orderReducer,
    items: itemsReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
