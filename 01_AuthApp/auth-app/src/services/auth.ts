import { api } from "@/lib/axios";

export interface UserRegisterData {
  username: string;
  email: string;
  password: string;
}
export interface UserLoginData {
  email: string;
  password: string;
}

export async function registerUser(data: UserRegisterData) {
  try {
    const response = await api.post("/users/register", data);
    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw new Error(error.response.data.message || "Registration failed");
    } else {
      throw new Error("Network error");
    }
  }
}

export async function loginUser(data: UserLoginData) {
  try {
    const response = await api.post("/users/login", data);
    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw new Error(error.response.data.message);
    }
  }
}

export async function logoutUser() {
  try {
    const response = await api.post("/users/logout");
    return response.data;
  } catch (error: any) {
    throw new Error(error.response.data.message || "Network error");
  }
}

export async function verifyUser(token: string) {
  try {
    const response = await api.get(`/users/verify-email/${token}`);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Netwrok issue");
  }
}

export async function refreshAccessToken() {
  try {
    const response = await api.post("refresh-token",{
      refereshToken: localStorage.getItem("refereshToken")
    });
    return response.data
  } catch (error: any) {
    console.error("Refresh token failed", error);
    throw new Error(error.response?.data?.message || "Failed to refresh token")
  }
}
