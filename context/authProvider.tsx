"use client";
import React, { useReducer } from "react";

import { AuthContext } from "./auth-context";
import { authReducer, initialState } from "./authReducer";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
