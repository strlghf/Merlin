import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface OrdersState {
  id: number;
  total: number;
  created_at: string
};

// All generated actions should be defined using the PayloadAction<T>

const initialState: OrdersState[] = [];

export const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {}
})

export const {} = ordersSlice.actions;
export default ordersSlice.reducer;