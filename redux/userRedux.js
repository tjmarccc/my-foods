import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
  },
  reducers: {
    userLogin: (state, action) => {
      state.currentUser = action.payload;
    },

    logout: (state) => {
      state.currentUser = null;
    },
  },
});

export const { userLogin, logout } = userSlice.actions;
export default userSlice.reducer;
