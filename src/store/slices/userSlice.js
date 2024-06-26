import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  name: "",
  email: "",
  role: "",
  token: localStorage.getItem("token"),
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (state, { payload }) => ({
      ...state,
      isAuth: true,
      name: payload.name,
      email: payload.email,
      token: payload.token,
      role: payload.role,
    }),
    removeUserData: (state) => ({
      ...state,
      isAuth: false,
      name: "",
      email: "",
      token: null,
      rule: "",
    }),
  },
});

// use these actions in your components / thunks
export const { setUserData, removeUserData } = userSlice.actions;

export default userSlice.reducer;
