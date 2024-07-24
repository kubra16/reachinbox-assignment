import React, { useContext } from "react";
import { format } from "date-fns";
import {
  Box,
  Typography,
  TextField,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { EmailContext } from "../context/EmailContext";
import EmailDetails from "./EmailDetails";
import circle from "../assets/circle.svg";
import arrow from "../assets/arrow.svg";
import mail2 from "../assets/mail2.svg";
import SideDetails from "./SideDetails";

const EmailList = () => {
  const { emails, fetchEmailDetail, selectedEmails, error } =
    useContext(EmailContext);
  const theme = useTheme(); // Access the current theme

  const handleEmailClick = async (threadId) => {
    await fetchEmailDetail(threadId);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return format(date, "MMM d, yyyy");
  };

  return (
    <Box sx={{ display: "flex", height: "100vh", m: 0 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          width: 300,
          mr: 1,
          borderInlineEnd: `1px solid ${theme.palette.divider}`, // Use theme divider color
          backgroundColor: theme.palette.background.paper, // Use theme background color
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            backgroundColor: theme.palette.background.paper,
          }}
        >
          <Box sx={{ padding: 2 }}>
            <Typography sx={{ color: "#4285F4", fontSize: "25px" }}>
              All Inbox(s)
            </Typography>
            <Typography
              sx={{
                color: theme.palette.text.primary,
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              25/25
            </Typography>
            <Typography
              sx={{
                color: theme.palette.text.secondary,
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              Inboxes selected
            </Typography>
            <TextField
              variant="outlined"
              placeholder="Search..."
              size="small"
              sx={{
                width: "90%",
                maxWidth: "400px",
                my: "0.5rem",
                backgroundColor: theme.palette.background.default,
                "& .MuiInputBase-input": {
                  color: theme.palette.text.primary,
                },
                "& .MuiInputLabel-root": {
                  color: theme.palette.text.secondary,
                },
              }}
            />
          </Box>

          <Box sx={{ flexGrow: 1, overflowY: "auto" }}>
            <List sx={{ width: "100%", m: 0 }}>
              {emails.map((email) => (
                <ListItem
                  button
                  onClick={() => handleEmailClick(email.threadId)}
                  key={email.id}
                  sx={{
                    borderBottom: `1px solid ${theme.palette.divider}`,
                    pl: 1,
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <Box component="span">{email.fromName}</Box>
                    <Box
                      component="span"
                      sx={{
                        fontSize: "0.875rem",
                        color: theme.palette.text.secondary,
                      }}
                    >
                      {formatDate(email.sentAt)}
                    </Box>
                  </Box>
                  <ListItemText
                    primary={email.subject}
                    primaryTypographyProps={{
                      fontSize: ".8rem",
                      fontWeight: "500",
                      color: theme.palette.text.primary,
                    }}
                    secondaryTypographyProps={{
                      fontSize: "0.875rem",
                      fontWeight: "normal",
                    }}
                    sx={{ mt: 1 }}
                  />
                  <Box sx={{ display: "flex", gap: 2, mt: 1 }}>
                    <Box
                      sx={{
                        borderRadius: 6,
                        border: `1px solid ${theme.palette.divider}`,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "0.3rem",
                        fontSize: ".7rem",
                        gap: ".2rem",
                      }}
                    >
                      <img src={circle} alt="Icon" width={12} height={12} />
                      <span>Interested</span>
                    </Box>
                    <Box
                      sx={{
                        borderRadius: 6,
                        border: `1px solid ${theme.palette.divider}`,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "0.3rem",
                        fontSize: ".7rem",
                        gap: ".2rem",
                      }}
                    >
                      <img src={arrow} alt="Icon" width={12} height={12} />
                      <span>Campaign name</span>
                    </Box>
                  </Box>
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          flexGrow: 1,
          m: 0,
          p: 0,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <EmailDetails emails={selectedEmails} />
      </Box>

      <SideDetails />
      {/* 
      {error && (
        <Box sx={{ color: theme.palette.error.main, m: 2 }}>{error}</Box>
      )} */}
    </Box>
  );
};

export default EmailList;
