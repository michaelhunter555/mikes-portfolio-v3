"use client";
import { createContext, Dispatch } from "react";

import { PaletteMode } from "@mui/material";

import { AuthActionTypes } from "./authActions";

export interface AuthState {
  userId: string | null;
  isLoggedIn: boolean;
  accountType: "admin" | "subscriber" | null;
  theme: PaletteMode; //subscriber / admin
  login?: (user: AuthState) => void;
  logout?: () => void;
  token?: string;
}

export type AuthAction =
  | {
      type: AuthActionTypes.LOGIN;
      isLoggedIn: boolean;
      userId: string | null;
      accountType: "admin" | "subscriber" | null;
      theme: PaletteMode;
    }
  | { type: AuthActionTypes.LOGOUT }
  | { type: AuthActionTypes.TOGGLE_THEME; theme: PaletteMode };

export const AuthContext = createContext<
  | {
      state: AuthState;
      dispatch: Dispatch<AuthAction>;
    }
  | undefined
>(undefined);
