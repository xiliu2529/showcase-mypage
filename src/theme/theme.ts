// src/theme/theme.ts
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { darkPalette, lightPalette } from "./palette";

// 暗色主题
export const darkTheme = responsiveFontSizes(
  createTheme({
    palette: darkPalette,
    shape: {
      borderRadius: 8,
    },
    typography: {
      fontSize: 14,
    },
  })
);

// 亮色主题
export const lightTheme = responsiveFontSizes(
  createTheme({
    palette: lightPalette,
    shape: {
      borderRadius: 8,
    },
    typography: {
      fontSize: 14,
    },
  })
);
