"use client";
import React, { useCallback, useEffect, useReducer, useState } from "react";

import { AuthContext, AuthState } from "./auth-context";
import { AuthActionTypes } from "./authActions";
import { authReducer, initialState } from "./authReducer";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  const [tokenExpiresDate, setTokenExpiresDate] = useState<Date | null>();

  const login = useCallback((user: AuthState) => {
    dispatch({ type: AuthActionTypes.LOGIN, ...user });

    const tokenExpires = new Date(new Date().getTime() + 1000 * 60 * 60 * 10);
    setTokenExpiresDate(tokenExpires);
    const userData = {
      userId: user.userId,
      token: user.token,
      tokenExpires: tokenExpires.toISOString(),
    };

    localStorage.setItem("userData", JSON.stringify(userData));
  }, []);

  const logout = useCallback(() => {
    dispatch({ type: AuthActionTypes.LOGOUT });
    setTokenExpiresDate(null);
    localStorage.removeItemItem("userData");
  }, []);

  useEffect(() => {
    if (state.token && tokenExpiresDate) {
    }
  }, [state.token, tokenExpiresDate]);

  return (
    <AuthContext.Provider
      value={{
        state: {
          login,
          logout,
          token: state.token,
          userId: state.userId,
          isLoggedIn: !!state.isLoggedIn,
          accountType: state.accountType,
          theme: state.theme,
        },
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
