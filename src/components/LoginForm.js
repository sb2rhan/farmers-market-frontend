import * as React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";

import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CircularProgress,
  Typography
} from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import { Form, required, TextInput, useTranslate, useLogin, useNotify } from "react-admin";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const translate = useTranslate();
  const notify = useNotify();
  const login = useLogin();
  const location = useLocation();

  const handleSubmit = auth => {
    setLoading(true);
    login(auth, location.state ? location.state.nextPathname : "/").catch(
      error => {
        setLoading(false);
        notify(
          typeof error === "string"
            ? error
            : error && error.message
            ? error.message
            : "ra.auth.sign_in_error",
          { type: "error" }
        );
      }
    );
  };

  return (
    <Form onSubmit={handleSubmit} noValidate>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          alignItems: "center",
          justifyContent: "center",
          background: "url('https://img.freepik.com/free-photo/arrangement-vegetable-basket-row-local-street-market_23-2148209771.jpg?t=st=1733050711~exp=1733054311~hmac=175674767d4e3b75dc607913d165c1d831180dcd8c91680a1a526aaef4f71a3b&w=1480')", // Unsplash Image URL
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          position: "relative",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Dark overlay for readability */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.4)", // Semi-transparent overlay
            zIndex: -1
          }}
        />

        {/* Welcome message above the login card */}
        <Box sx={{ marginBottom: "1em", textAlign: "flex", zIndex: 1 }}>
          <Typography variant="h4" sx={{ color: "green", fontWeight: 700 }}>
            Welcome to Farmers Market!
          </Typography>
          <Typography variant="h6" sx={{ color: "green", fontWeight: 300 }}>
            Please login to continue
          </Typography>
        </Box>

        <Card sx={{ minWidth: 300, marginTop: "2em", width: { xs: "90%", sm: "400px" } }}>
          <Box sx={{ margin: "1em", display: "flex", justifyContent: "center" }}>
            <Avatar sx={{ bgcolor: "green", width: 60, height: 60 }}>
              <LockIcon />
            </Avatar>
          </Box>

          <Box sx={{ marginTop: "1em", textAlign: "center" }}>
            <Typography variant="h5" sx={{ color: "#fff", fontWeight: 600 }}>
              Farmer's Market Login
            </Typography>
          </Box>

          <Box sx={{ padding: "0 1em 1em 1em", textAlign: "center" }}>
            <Box sx={{ marginTop: "1em" }}>
              <TextInput
                autoFocus
                source="username"
                label="Username"
                disabled={loading}
                validate={required()}
              />
            </Box>
            <Box sx={{ marginTop: "1em" }}>
              <TextInput
                source="password"
                label="Password"
                type="password"
                disabled={loading}
                validate={required()}
              />
            </Box>
          </Box>

          <CardActions sx={{ padding: "0 1em 1em 1em" }}>
            <Button
              variant="contained"
              type="submit"
              color="success"
              disabled={loading}
              fullWidth
              sx={{
                '&:hover': {
                  backgroundColor: '#45a049', // Darker green on hover
                }
              }}
            >
              {loading && <CircularProgress size={25} thickness={2} sx={{ marginRight: 1 }} />}
              Log In
            </Button>
          </CardActions>

          <Box sx={{ textAlign: "center", marginTop: "1em" }}>
            <Button
              sx={{
                color: "#fff",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "transparent",
                  textDecoration: "underline"
                }
              }}
              onClick={() => { /* Navigate to forgot password page */ }}
            >
              Forgot Password?
            </Button>
            <Box sx={{ marginTop: "1em" }}>
              <Button
                sx={{
                  color: "#fff",
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: "transparent",
                    textDecoration: "underline"
                  }
                }}
                onClick={() => { /* Navigate to sign up page */ }}
              >
                New here? Sign Up
              </Button>
            </Box>
          </Box>
        </Card>
      </Box>
    </Form>
  );
};

export default Login;
