import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: JSON.parse(localStorage.getItem("authUser")) || {
      name: "",
      password: "",
      image: "",
      authUser: false,
    },
  },
  reducers: {
    login(state, action) {
      const userId = action.payload;

      const userValidation = userId.name;
      const passwordValidation = userId.password;
      state.user = userId;
      if (userValidation && passwordValidation) {
        state.user.authUser = true;
        const saveState = JSON.stringify(userId);
        localStorage.setItem("authUser", saveState);
      }
    },
    logout(state) {
      state.user = {
        name: "",
        password: "",
        image: "",
        authUser: false,
      };
      localStorage.clear();
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
