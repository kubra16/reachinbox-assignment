import React, { useState } from "react";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import DefaultComponent from "./DefaultComponent";
import TopBar from "./TopBar";

const MainLayout = () => {
  const [activeSidebarItem, setActiveSidebarItem] = useState(null);

  return (
    <Box sx={{ display: "flex", height: "100vh", overflow: "auto" }}>
      <Sidebar setActiveSidebarItem={setActiveSidebarItem} />
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          marginLeft: "60px",
        }}
      >
        <TopBar />
        <Box sx={{ flexGrow: 1, bgcolor: "black", color: "white", p: 3 }}>
          {activeSidebarItem ? <Outlet /> : <DefaultComponent />}
        </Box>
      </Box>
    </Box>
  );
};

export default MainLayout;
