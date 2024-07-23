import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from "@mui/material";

const DeleteModal = ({ open, handleClose, handleDelete }) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="delete-dialog-title"
      aria-describedby="delete-dialog-description"
      PaperProps={{
        sx: {
          bgcolor: "#333",
          color: "white",
          borderRadius: 2,
        },
      }}
    >
      <DialogTitle
        id="delete-dialog-title"
        sx={{
          bgcolor: "#141517",
          p: 3,
          display: "flex",
          justifyContent: "center",
          fontSize: "24px",
          fontWeight: 700,
        }}
      >
        Are you sure ?
      </DialogTitle>
      <DialogContent sx={{ bgcolor: "#141517", pb: 2 }}>
        <DialogContentText
          id="delete-dialog-description"
          sx={{
            color: "#E8E8E8",
            bgcolor: "#141517",
            display: "flex",
            justifyContent: "center",
            fontSize: "13px",
            fontWeight: 400,
            px: 3,
          }}
        >
          Your selected email will be selected
        </DialogContentText>
      </DialogContent>
      <DialogActions
        sx={{
          bgcolor: "#141517",
          pb: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
        }}
      >
        <Button onClick={handleClose} sx={{ color: "#fff", fontSize: "12px" }}>
          Cancel
        </Button>
        <Button
          onClick={() => {
            handleDelete();
            handleClose();
          }}
          sx={{
            bgcolor: "#25262B",
            fontSize: "12px",
            color: "white",
            background: "linear-gradient(to left, #FA5252, #A91919)",
          }}
          variant="contained"
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteModal;
