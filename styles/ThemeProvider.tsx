"use client";
import { useContext } from "react";

import { AuthContext, AuthState } from "@/context/auth-context";
import { createTheme, ThemeProvider } from "@mui/material";

import { selectPalette } from "./Globalstyles";

interface AppThemeProps {
  children: React.ReactNode;
}
const AppTheme = ({ children }: AppThemeProps) => {
  const auth = useContext(AuthContext);
  const { theme } = auth?.state as AuthState;
  const themePreference = selectPalette(auth?.state?.theme ? theme : "dark");
  const renderTheme = createTheme(themePreference);

  return <ThemeProvider theme={renderTheme}>{children}</ThemeProvider>;
};

export default AppTheme;
