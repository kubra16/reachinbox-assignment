import React, { useState, useContext } from "react";
import { Box, Button, Menu, MenuItem, Typography } from "@mui/material";
import CustomTextEditor from "./Editor";
import { EmailContext } from "../context/EmailContext";
import axios from "axios";

const ReplySection = ({ emailArray = [], threadId, onClose }) => {
  const email = emailArray[0] || {};
  console.log(email);
  const [replyBody, setReplyBody] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const { sendReply, replying } = useContext(EmailContext);

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
        border: "1px solid #2E3236",
        backgroundColor: "#1E1E1E",
      }}
    >
      <Typography sx={{ color: "#fff", marginBottom: 2, fontSize: "15px" }}>
        From: {email.fromEmail || "Not Available"}
      </Typography>
      <Typography sx={{ color: "#fff", marginBottom: 2, fontSize: "15px" }}>
        To: {email.toEmail || "Not Available"}
      </Typography>
      <Typography sx={{ color: "#fff", marginBottom: 2, fontSize: "15px" }}>
        Subject: {email.subject || "Not Available"}
      </Typography>
      <CustomTextEditor initialContent={replyBody} onSave={setReplyBody} />
      <Box
        sx={{ display: "flex", justifyContent: "flex-start", gap: 1, mt: 2 }}
      >
        <Button onClick={handleSend} color="secondary" variant="contained">
          Send
        </Button>
        <Button
          onClick={handleVariableClick}
          color="primary"
          variant="outlined"
        >
          Variables
        </Button>
        <Button onClick={handleSave} color="secondary" variant="contained">
          Save
        </Button>
        <Button onClick={onClose} color="secondary" variant="contained">
          Cancel
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
