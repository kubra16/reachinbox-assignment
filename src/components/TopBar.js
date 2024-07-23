import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

const TopBar = () => {
  return (
    <AppBar
      position="relative"
      sx={{ bgcolor: "#1F1F1F", color: "white", height: 50 }}
    >
      <Toolbar sx={{ display: "flex", alignItems: "center" }}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          OneBox
        </Typography>
        <Button color="inherit">Login</Button>
        <Button color="inherit">Times Workspace</Button>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
