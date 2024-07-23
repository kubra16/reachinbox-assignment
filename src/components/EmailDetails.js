import React, { useContext, useState } from "react";
import { Box, Typography, Divider, Button } from "@mui/material";
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
    setSelectedEmails,
    error,
  } = useContext(EmailContext);

  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [emailToDelete, setEmailToDelete] = useState(null);

  const handleDeleteClick = (emailId) => {
    setEmailToDelete(emailId);
    setDeleteModalOpen(true);
  };

  const handleConfirmDelete = () => {
    if (emailToDelete) {
      deleteEmail(emailToDelete);
      setDeleteModalOpen(false);
      setEmailToDelete(null);
    }
  };

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
      sx={{ flexGrow: 1, padding: 2, display: "flex", flexDirection: "column" }}
    >
      <Box sx={{ flexGrow: 1, overflowY: "auto" }}>
        <Button
          onClick={() => handleDeleteClick(emails[0].id)}
          color="primary"
          variant="outlined"
          sx={{ mb: 2 }}
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
          <ReplySection
            emailArray={selectedEmails}
            threadId={emails[0].threadId}
            onClose={handleReplyClose}
          />
        )}
      </Box>
      {!replying && (
        <Box sx={{ display: "flex" }}>
          <Button
            onClick={handleReplyOpen}
            variant="contained"
            sx={{
              width: "auto",
              maxWidth: 200,
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
