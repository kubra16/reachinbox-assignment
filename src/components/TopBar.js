import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  useTheme,
} from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const TopBar = ({ isDarkMode, handleToggleTheme }) => {
  const theme = useTheme(); // Access the current theme

  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: isDarkMode
          ? theme.palette.background.paper
          : theme.palette.primary.main,
      }}
    >
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          OneBox
        </Typography>
        <IconButton edge="end" color="inherit" onClick={handleToggleTheme}>
          {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
