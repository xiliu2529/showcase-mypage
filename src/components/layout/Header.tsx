import { Link as RouterLink } from "react-router-dom";
import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";
import trinity from "../../assets/trinity.png";
import { useAppContext } from "../../context/useAppContext";
import { useTheme } from "@mui/material/styles";

const Header = () => {
  const { ballOn, setBallOn, darkMode, toggleDarkMode } = useAppContext();
  const theme = useTheme();
  const appBarSx = {
    backdropFilter: "blur(10px)",
    backgroundColor:
      theme.palette.mode === "light"
        ? "rgba(255,255,255,0.6)"
        : "rgba(0,0,0,0.6)",
    color: theme.palette.text.primary,
    height: "70px",
  };

  const buttonSx = {
    fontSize: "1.5rem",
    color: ballOn ? "#FF7043" : "#8CF7D4",
    transition: "color 0.3s ease",
  };

  const toolbarSx = {
    justifyContent: "space-between",
    fontSize: "2rem",
  };

  const logoImgSx = {
    height: 40,
    width: "auto",
    mr: 2,
  };

  const logoTextSx = {
    textDecoration: "none",
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightBold,
    fontSize: "3rem",
  };

  return (
    <AppBar position="fixed" elevation={3} sx={appBarSx}>
      <Toolbar sx={toolbarSx}>
        {/* Logo 区域 */}
        <Box display="flex" alignItems="center">
          <Box component="img" src={trinity} alt="Logo" sx={logoImgSx} />
          <Typography variant="h6" sx={logoTextSx}>
            Xiliu
          </Typography>
        </Box>
        <Box>
          <Button onClick={() => setBallOn(!ballOn)} sx={buttonSx}>
            拖尾
          </Button>
          <Button onClick={toggleDarkMode} sx={{ fontSize: "1.5rem" }}>
            {darkMode ? "明" : "暗"}
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
