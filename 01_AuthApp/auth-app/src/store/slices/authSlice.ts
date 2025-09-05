import { User } from "@/types/user";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { stat } from "fs";

interface AuthSate {
  userData: User | null;
  status: boolean;
  message: string | null;
  token: string| null
}

const initialState: AuthSate = {
  userData: null,
  status: false,
  message: null,
  token: null
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ userData: User; message: string, token: string }>) => {
      state.status = true;
      state.message = action.payload.message;
      state.userData = action.payload.userData;
      state.token = action.payload.token || null;
    },
    logout: (state) => {
      state.status = false;
      state.message = null;
      state.userData = null;
      state.token =  null;

    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
