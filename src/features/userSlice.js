import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.user = payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

//selectors
export const selectUser = (state) => state.user.user;

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
