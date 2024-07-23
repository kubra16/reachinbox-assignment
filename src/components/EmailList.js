// EmailList.jsx
import React, { useContext, useState } from "react";
import { List, ListItem, ListItemText, Box } from "@mui/material";
import { EmailContext } from "../context/EmailContext";
import EmailDetails from "./EmailDetails";

const EmailList = () => {
  const { emails, fetchEmailDetail, selectedEmails, error } =
    useContext(EmailContext);

  const handleEmailClick = async (threadId) => {
    await fetchEmailDetail(threadId);
  };

  return (
    <Box sx={{ display: "flex", height: "100vh", p: 0 }}>
      <List sx={{ width: 300 }}>
        {emails.map((email) => (
          <ListItem
            button
            onClick={() => handleEmailClick(email.threadId)}
            key={email.id}
          >
            <ListItemText primary={email.fromName} secondary={email.subject} />
          </ListItem>
        ))}
      </List>
      <EmailDetails emails={selectedEmails} />
      {error && <Box sx={{ color: "red" }}>{error}</Box>}
    </Box>
  );
};

export default EmailList;
