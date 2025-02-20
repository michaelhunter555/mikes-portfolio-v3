import { useContext } from "react";

import { AuthContext, AuthState } from "@/context/auth-context";
import { css, Global } from "@emotion/react";

export const GlobalStyles = () => {
  const auth = useContext(AuthContext);
  const { theme } = auth?.state as AuthState;

  const darkMode =
    "linear-gradient(60deg, rgb(0, 21, 39) 60%, rgb(0, 54, 99) 100%)";

  return (
    <Global
      styles={css`
        html,
        body {
          background: ${theme === "dark" ? darkMode : "#f1f3f4"};
        }
      `}
    />
  );
};
