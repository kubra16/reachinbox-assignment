import React, { useContext, useState } from "react";
import { Box, Typography, Divider, Button, useTheme } from "@mui/material";
import DeleteModal from "./DeleteModal";
import ReplySection from "./ReplySection";
import { EmailContext } from "../context/EmailContext";
import reply from "../assets/reply.svg";

const EmailDetails = ({ emails }) => {
  const {
    deleteEmail,
    replying,
    setReplying,
    selectedEmails,
    error,
    handleDeleteClick,
    handleConfirmDelete,
    deleteModalOpen,
    setDeleteModalOpen,
    emailToDelete,
    setEmailToDelete,
  } = useContext(EmailContext);

  const theme = useTheme();

  const handleReplyOpen = () => {
    setReplying(true);
  };

  const handleReplyClose = () => {
    setReplying(false);
  };

  const handleModalClose = () => {
    setDeleteModalOpen(false);
    setEmailToDelete(null);
  };

  if (!emails || emails.length === 0) {
    return (
      <Box sx={{ flexGrow: 1, padding: 2 }}>
        Select an email to view details
      </Box>
    );
  }

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <Box
        sx={{
          flexGrow: 1,
          padding: 2,
          overflowY: "auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="subtitle1">
            <div style={{ display: "flex", flexDirection: "column", p: 2 }}>
              From: {emails[0].fromName}
              <span style={{ color: theme.palette.text.secondary, p: 2 }}>
                ({emails[0].fromEmail})
              </span>
            </div>
          </Typography>

          <Button
            onClick={() => handleDeleteClick(emails[0].threadId)}
            color="primary"
            variant="outlined"
            sx={{ mb: 2 }}
          >
            Delete
          </Button>
        </Box>

        {emails.map((email) => (
          <Box
            key={email.id}
            sx={{
              bgcolor: theme.palette.background.paper,
              p: 2,
              mb: 2,
              border: `1px solid ${theme.palette.divider}`,
              borderRadius: 2,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography variant="h6" sx={{ flexGrow: 1 }}>
                {email.subject}
              </Typography>
            </Box>
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
            {email !== emails[emails.length - 1] && (
              <Divider sx={{ margin: "20px 0" }} />
            )}
          </Box>
        ))}
        {replying && emails.length > 0 && (
          <Box
            sx={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "end",
              zIndex: 1200,
            }}
          >
            <Box
              sx={{
                padding: 3,
                borderRadius: 2,
                maxWidth: "600px",
                width: "100%",
                maxHeight: "200vh",
                overflowY: "auto",
              }}
            >
              <ReplySection
                emailArray={selectedEmails}
                threadId={emails[0].threadId}
                onClose={handleReplyClose}
              />
            </Box>
          </Box>
        )}
      </Box>

      {!replying && (
        <Box
          sx={{
            padding: 2,
            borderTop: `1px solid ${theme.palette.divider}`,
            backgroundColor: theme.palette.background.default,
            position: "sticky",
            bottom: 0,
            zIndex: 1,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Button
            onClick={handleReplyOpen}
            variant="contained"
            sx={{
              background: "linear-gradient(to left, #4B63DD, #0524BF)",
              color: "#fff",
              fontSize: "15px",
              fontWeight: 500,
            }}
          >
            <img src={reply} alt="Icon" width={28} height={29} />
            Reply
          </Button>
        </Box>
      )}

      <DeleteModal
        open={deleteModalOpen}
        handleClose={handleModalClose}
        handleDelete={handleConfirmDelete}
      />
      {error && <Box sx={{ color: "red" }}>{error}</Box>}
    </Box>
  );
};

export default EmailDetails;
