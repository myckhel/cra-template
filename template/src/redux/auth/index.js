import { createSlice } from "@reduxjs/toolkit";

const INIT_STATE = {
  token: localStorage.getItem("token"),
  authUser: JSON.parse(localStorage.getItem("user")),
};

const { actions, reducer } = createSlice({
  name: "auth",
  initialState: INIT_STATE,
  reducers: {
    setToken: (state, { payload: token }) => {
      state.token = token;
      localStorage.setItem("token", token);
    },

    logoutUser: (state) => {
      state.token = null;
      state.authUser = null;
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    },

    signOutSuccess: () => {},

    storeUser: (state, { payload }) => {
      state.authUser = payload;
    },
  },
});

export const { setToken, logoutUser, signOutSuccess, storeUser } = actions;

export default reducer;
