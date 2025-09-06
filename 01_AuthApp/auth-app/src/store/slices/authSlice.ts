import { User } from "@/types/user";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { stat } from "fs";

interface AuthState {
  user: User | null;
  status: boolean;
  message: string | null;
  accessToken: string| null
  refreshToken: string| null
}

const initialState: AuthState = {
  user: null,
  status: false,
  message: null,
  accessToken: null,
  refreshToken:null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ user: User; message: string, accessToken: string, refreshToken:string }>) => {
      state.status = true;
      state.message = action.payload.message;
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken || null;
      state.refreshToken = action.payload.refreshToken || null;
    },
    logout: (state) => {
      state.status = false;
      state.message = null;
      state.user = null;
      state.accessToken =  null;
      state.refreshToken = null;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
