import React, { useState, useContext } from "react";
import {
  Box,
  Button,
  Menu,
  MenuItem,
  Typography,
  useTheme,
} from "@mui/material";
import CustomTextEditor from "./Editor";
import { EmailContext } from "../context/EmailContext";
import cross from "../assets/cross.svg";

const ReplySection = ({ emailArray = [], threadId, onClose }) => {
  const email = emailArray[0] || {};
  console.log(email);
  const [replyBody, setReplyBody] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const { sendReply, replying } = useContext(EmailContext);

  const theme = useTheme();

  const handleSave = () => {
    console.log("Saved content:", replyBody);
  };

  const handleSend = () => {
    sendReply(threadId, replyBody);
    setReplyBody("");
  };

  const handleVariableClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleVariableSelect = (variable) => {
    setReplyBody((prevContent) => `${prevContent} ${variable}`);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        padding: 2,
        border: `1px solid ${theme.palette.divider}`,
        backgroundColor: theme.palette.background.paper,
        borderRadius: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          borderBottom: `1px solid ${theme.palette.divider}`,
          flexDirection: "row",
        }}
      >
        <Typography
          sx={{
            color: theme.palette.text.primary,
            marginBottom: 2,
            fontSize: "15px",
          }}
        >
          Reply
        </Typography>

        <img onClick={onClose} src={cross} alt="Icon" width={28} height={29} />
      </Box>

      <Typography
        sx={{
          color: theme.palette.text.primary,
          marginBottom: 2,
          fontSize: "15px",
          borderBottom: `1px solid ${theme.palette.divider}`,
          mt: 1,
        }}
      >
        From: {email.fromEmail || "Not Available"}
      </Typography>
      <Typography
        sx={{
          color: theme.palette.text.primary,
          marginBottom: 2,
          fontSize: "15px",
          borderBottom: `1px solid ${theme.palette.divider}`,
        }}
      >
        To: {email.toEmail || "Not Available"}
      </Typography>
      <Typography
        sx={{
          color: theme.palette.text.primary,
          marginBottom: 2,
          fontSize: "15px",
          borderBottom: `1px solid ${theme.palette.divider}`,
        }}
      >
        Subject: {email.subject || "Not Available"}
      </Typography>
      <CustomTextEditor initialContent={replyBody} onSave={setReplyBody} />
      <Box
        sx={{ display: "flex", justifyContent: "flex-start", gap: 1, mt: 2 }}
      >
        <Button
          onClick={handleSend}
          color="secondary"
          variant="contained"
          sx={{
            background: "linear-gradient(to left, #4B63DD, #0524BF)",
            color: "#fff",
          }}
        >
          Send
        </Button>
        <Button onClick={handleVariableClick}>Variables</Button>
        <Button onClick={handleSave} color="secondary" variant="contained">
          Save
        </Button>
      </Box>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={() => handleVariableSelect("{{first_name}}")}>
          First Name
        </MenuItem>
        <MenuItem onClick={() => handleVariableSelect("{{last_name}}")}>
          Last Name
        </MenuItem>
        <MenuItem onClick={() => handleVariableSelect("{{email}}")}>
          Email
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default ReplySection;
