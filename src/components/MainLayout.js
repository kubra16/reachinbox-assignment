import React, { useState } from "react";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import Sidebar from "./Sidebar";
import DefaultComponent from "./DefaultComponent";
import TopBar from "./TopBar";

const MainLayout = ({ isDarkMode, handleToggleTheme }) => {
  const [activeSidebarItem, setActiveSidebarItem] = useState(null);
  const theme = useTheme();

  return (
    <Box sx={{ display: "flex", height: "100vh", overflow: "auto" }}>
      <Sidebar setActiveSidebarItem={setActiveSidebarItem} />
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          marginLeft: "60px",
          overflow: "hidden",
          backgroundColor: theme.palette.background.default,
          color: theme.palette.text.primary,
        }}
      >
        <TopBar isDarkMode={isDarkMode} handleToggleTheme={handleToggleTheme} />
        <Box sx={{ flexGrow: 1, p: 1 }}>
          {activeSidebarItem ? <Outlet /> : <DefaultComponent />}
        </Box>
      </Box>
    </Box>
  );
};

export default MainLayout;
