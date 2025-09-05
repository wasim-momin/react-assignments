"use client";
import { login } from "@/store/slices/authSlice";
import { store } from "@/store/store";
import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";

interface ProviderProps {
  children: React.ReactNode;
}

export default function Providers({ children }: ProviderProps) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const saveAuthData = localStorage.getItem("auth");
      if (saveAuthData) {
        const authUser = JSON.parse(saveAuthData);
        store.dispatch(
          login({
            user: authUser.user,
            message: authUser.message,
            token: authUser.token || null,
          })
        );
        console.log("Hydrating store with:", authUser);
      }
      console.log("Hydrating store with:outer", saveAuthData);
    }
  }, []);

  return <Provider store={store}>{children}</Provider>;
}
