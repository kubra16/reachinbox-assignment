import React from "react";
import logo from "../assets/mail1.svg";
import { Box, Container, Typography } from "@mui/material";
const DefaultComponent = () => {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: 10,
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={logo} alt="Search User Icon" />
        <Typography
          sx={{ color: "#fff", marginBottom: 2 }}
          variant="h4"
          component="h4"
        >
          It is a begining of legendary sales pipeline
        </Typography>
        <Typography
          sx={{ color: "#9E9E9E", marginBottom: 2 }}
          variant="h6"
          component="h6"
        >
          When you have inbound E-mails youll see the here
        </Typography>
      </Box>
    </Container>
  );
};

export default DefaultComponent;
