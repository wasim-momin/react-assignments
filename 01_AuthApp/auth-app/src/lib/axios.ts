import { refreshAccessToken } from "@/services/auth";
import axios from "axios";

export const api = axios.create({
  baseURL: "/api",
  headers: {
    "content-Type": "application/json",
  },
  withCredentials: true,
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const response = await refreshAccessToken();
        const newAccessToken = response.data?.data?.refreshAccessToken;
        if (newAccessToken) {
          localStorage.setItem("accessToken", newAccessToken);
          originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
          return api(originalRequest);
        }
      } catch (error: any) {
        console.error("Session expired, please login again", error);
      }
    }
    return Promise.reject(error);
  }
);
