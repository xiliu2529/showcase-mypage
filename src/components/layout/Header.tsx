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

  const scrollToTop = () => {
    const el = document.getElementById("main-scroll");
    if (el) {
      el.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const buttonSx = {
    fontSize: { xs: "1rem", md: "1.5rem" },
    color: ballOn ? "#FF7043" : "#8CF7D4",
    transition: "color 0.3s ease",
  };

  const toolbarSx = {
    justifyContent: "space-between",
    fontSize: { xs: "1.2rem", md: "2rem" },
  };

  const logoImgSx = {
    height: { xs: 28, md: 40 },
    width: "auto",
    mr: { xs: 1, md: 2 },
    cursor: "pointer",
  };

  const logoTextSx = {
    textDecoration: "none",
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightBold,
    fontSize: { xs: "1.8rem", md: "3rem" },
    cursor: "pointer",
  };

  return (
    <AppBar position="fixed" elevation={3} sx={appBarSx}>
      <Toolbar sx={toolbarSx}>
        {/* Logo 区域 */}
        <Box display="flex" alignItems="center">
          <Box
            component="img"
            src={trinity}
            alt="Logo"
            sx={logoImgSx}
            onClick={scrollToTop}
          />
          <Typography variant="h6" sx={logoTextSx} onClick={scrollToTop}>
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
