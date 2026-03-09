import React, { useState, useMemo } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { darkTheme, lightTheme } from "../theme/theme";
import { AppContext } from "./AppContext";

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [ballOn, setBallOn] = useState(true);
  // 主题状态
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode((prev) => !prev);
  // 根据 darkMode 创建主题
  const theme = useMemo(() => (darkMode ? darkTheme : lightTheme), [darkMode]);
  //菜单显示
  const [visible, setVisible] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppContext.Provider
        value={{
          ballOn,
          setBallOn,
          darkMode,
          toggleDarkMode,
          visible,
          setVisible,
        }}
      >
        {children}
      </AppContext.Provider>
    </ThemeProvider>
  );
};
