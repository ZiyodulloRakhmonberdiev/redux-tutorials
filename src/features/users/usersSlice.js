import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 0, name: "John" },
  { id: 1, name: "Doe" },
  { id: 2, name: "DaveGray" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
