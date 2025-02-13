import { css, Global } from "@emotion/react";
import { PaletteMode } from "@mui/material";

export const GlobalStyles = (userTheme: PaletteMode) => {
  const darkMode =
    "linear-gradient(60deg, rgb(0, 21, 39) 60%, rgb(0, 54, 99) 100%)";

  return (
    <Global
      styles={css`
        html,
        body {
          background: ${userTheme === "dark" ? darkMode : "#f1f3f4"};
        }
      `}
    />
  );
};
