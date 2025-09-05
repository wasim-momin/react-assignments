import { User } from "@/types/user";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { stat } from "fs";

interface AuthSate {
  user: User | null;
  status: boolean;
  message: string | null;
  token: string| null
}

const initialState: AuthSate = {
  user: null,
  status: false,
  message: null,
  token: null
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ user: User; message: string, token: string }>) => {
      state.status = true;
      state.message = action.payload.message;
      state.user = action.payload.user;
      state.token = action.payload.token || null;
    },
    logout: (state) => {
      state.status = false;
      state.message = null;
      state.user = null;
      state.token =  null;

    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
