import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: "",
  isMenuOpen: false,
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
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
  },
});

//selectors
export const selectUser = (state) => state.user.user;

export const { login, logout, toggleMenu } = userSlice.actions;

export default userSlice.reducer;
