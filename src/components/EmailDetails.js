import React, { useContext, useState } from "react";
import { Box, Typography, Divider, IconButton, Button } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import DeleteModal from "./DeleteModal";
import { EmailContext } from "../context/EmailContext";

const EmailDetails = ({ emails }) => {
  const { deleteEmail } = useContext(EmailContext);
  const [expandedEmail, setExpandedEmail] = useState(null);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedEmailId, setSelectedEmailId] = useState(null);

  const toggleExpand = (emailId) => {
    setExpandedEmail(expandedEmail === emailId ? null : emailId);
  };

  const handleDeleteClick = () => {
    setDeleteModalOpen(true);
  };

  const handleDelete = () => {
    if (selectedEmailId) {
      deleteEmail(selectedEmailId);
      setDeleteModalOpen(false);
      setSelectedEmailId(null);
      setExpandedEmail(null);
    }
  };

  const handleClose = () => {
    setDeleteModalOpen(false);
  };

  const handleEmailClick = (emailId) => {
    setSelectedEmailId(emailId);
    toggleExpand(emailId);
  };

  if (!emails || emails.length === 0) {
    return (
      <Box sx={{ flexGrow: 1, padding: 2 }}>
        Select an email to view details
      </Box>
    );
  }

  return (
    <Box sx={{ flexGrow: 1, padding: 2, overflow: "auto" }}>
      <Button
        onClick={handleDeleteClick}
        color="primary"
        variant="outlined"
        sx={{ mb: 2 }}
        disabled={!selectedEmailId}
      >
        Delete
      </Button>
      {emails.map((email) => (
        <Box
          key={email.id}
          sx={{
            bgcolor: "#141517",
            p: 2,
            mb: 2,
            border: "1px solid #333",
            borderRadius: 2,
          }}
          onClick={() => handleEmailClick(email.id)}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              {email.subject}
            </Typography>
            <IconButton onClick={() => toggleExpand(email.id)} color="primary">
              {expandedEmail === email.id ? (
                <ExpandLessIcon />
              ) : (
                <ExpandMoreIcon />
              )}
            </IconButton>
          </Box>
          {expandedEmail === email.id && (
            <Box sx={{ mt: 2 }}>
              <Typography variant="subtitle1">
                From: {email.fromName} ({email.fromEmail})
              </Typography>
              <Typography variant="subtitle2">To: {email.toEmail}</Typography>
              <Typography variant="subtitle2">
                CC: {email.cc.join(", ")}
              </Typography>
              <Typography variant="subtitle2">
                BCC: {email.bcc.join(", ")}
              </Typography>
              <Typography variant="subtitle2">
                Date: {new Date(email.sentAt).toLocaleString()}
              </Typography>
              <Typography
                variant="body1"
                dangerouslySetInnerHTML={{ __html: email.body }}
              />
            </Box>
          )}
          {email !== emails[emails.length - 1] && (
            <Divider sx={{ margin: "20px 0" }} />
          )}
        </Box>
      ))}
      <DeleteModal
        open={deleteModalOpen}
        handleClose={handleClose}
        handleDelete={handleDelete}
      />
    </Box>
  );
};

export default EmailDetails;
