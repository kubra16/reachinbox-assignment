import React from "react";
import { Container, Box, Button, Typography, Link } from "@mui/material";
import google from "../assets/google.svg";
import { useAuth } from "../context/Authcontext";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const { loginWithGoogle } = useAuth();
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    await loginWithGoogle();
  };
  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#1c1c1c",
          padding: 8,
          borderRadius: 6,
          border: "1px solid #333",
        }}
      >
        <Typography
          component="h1"
          variant="h5"
          sx={{ color: "#fff", marginBottom: 2 }}
        >
          Create a new account
        </Typography>
        <Button
          variant="outlined"
          startIcon={
            <img
              src={google}
              alt="Google Icon"
              style={{ width: 22, height: 22 }}
            />
          }
          fullWidth
          onClick={handleGoogleLogin}
          sx={{
            mt: 1,
            mb: 2,
            p: 1,
            color: "#fff",
            borderColor: "#333",
            width: 400,
          }}
        >
          Sign Up with Google
        </Button>
        <Button
          variant="contained"
          color="primary"
          sx={{
            mb: 2,
            mt: 1,
            p: 1.5,
            fontSize: "12px",
            fontWeight: 700,
            background: "linear-gradient(to left, #0033A0, #0056D2)",
            color: "#fff",
            "&:hover": {
              background: "linear-gradient(to left, #002C8A, #0043B6)",
            },
          }}
        >
          Create an Account
        </Button>
        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
          sx={{ mt: 2 }}
        >
          <Link href="#" color="inherit">
            Already have an account? Sign In
          </Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default LoginPage;
