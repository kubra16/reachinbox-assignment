import React from "react";
import { List, ListItem, ListItemIcon } from "@mui/material";
import { Link } from "react-router-dom";
import HomeIcon from "../assets/home.svg";
import searchuser from "../assets/searchuser.svg";
import mail from "../assets/mail.svg";
import send from "../assets/send.svg";
import notification from "../assets/notification.svg";
import bar from "../assets/bar.svg";
import draw from "../assets/draw.svg";
import logo from "../assets/logo.svg";
import { useTheme } from "@emotion/react";

const Sidebar = ({ setActiveSidebarItem }) => {
  const theme = useTheme();
  return (
    <List
      sx={{
        width: 60,
        // bgcolor: "#101113",
        backgroundColor: theme.palette.background.primary,
        height: "100vh",
        color: "white",
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        top: 0,
        left: 0,
      }}
    >
      <ListItem sx={{ pb: 6 }}>
        <ListItemIcon>
          <img src={logo} alt="Icon" width={28} height={29} />
        </ListItemIcon>
      </ListItem>
      <ListItem
        button
        component={Link}
        to="/onebox/home"
        onClick={() => setActiveSidebarItem("home")}
      >
        <ListItemIcon>
          <img src={HomeIcon} alt="Icon" width={28} height={29} />
        </ListItemIcon>
      </ListItem>
      <ListItem
        button
        component={Link}
        to="/onebox/profile"
        onClick={() => setActiveSidebarItem("profile")}
      >
        <ListItemIcon>
          <img src={searchuser} alt="Icon" width={28} height={29} />
        </ListItemIcon>
      </ListItem>
      <ListItem
        button
        component={Link}
        to="/onebox/emails"
        onClick={() => setActiveSidebarItem("emails")}
      >
        <ListItemIcon>
          <img src={mail} alt="Icon" width={28} height={29} />
        </ListItemIcon>
      </ListItem>
      <ListItem
        button
        component={Link}
        to="/onebox/send"
        onClick={() => setActiveSidebarItem("send")}
      >
        <ListItemIcon>
          <img src={send} alt="Icon" width={28} height={29} />
        </ListItemIcon>
      </ListItem>
      <ListItem
        button
        component={Link}
        to="/onebox/list"
        onClick={() => setActiveSidebarItem("list")}
      >
        <ListItemIcon>
          <img src={notification} alt="Icon" width={28} height={29} />
        </ListItemIcon>
      </ListItem>
      <ListItem
        button
        component={Link}
        to="/onebox/notifications"
        onClick={() => setActiveSidebarItem("notifications")}
      >
        <ListItemIcon>
          <img src={draw} alt="Icon" width={28} height={29} />
        </ListItemIcon>
      </ListItem>
      <ListItem
        button
        component={Link}
        to="/onebox/reports"
        onClick={() => setActiveSidebarItem("reports")}
      >
        <ListItemIcon>
          <img src={bar} alt="Icon" width={28} height={29} />
        </ListItemIcon>
      </ListItem>
    </List>
  );
};

export default Sidebar;
