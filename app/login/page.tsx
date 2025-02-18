"use client";
import React, { useState } from "react";

import { useUser } from "@/hooks/user-hook";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

const Login = () => {
  const [userLogin, setUserLogin] = useState<{
    userName: string;
    password: string;
  }>({ userName: "", password: "" });
  const { login } = useUser();

  const handleUserName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserLogin((prev) => ({ ...prev, userName: event.target.value }));
  };

  const handleUserPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserLogin((prev) => ({ ...prev, password: event.target.value }));
  };

  const handleUserInputs = async (event: React.FormEvent) => {
    event.preventDefault();
    const { userName, password } = userLogin;

    if (userName && password) {
      await login(userName, password);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
      }}
    >
      <Paper
        sx={{
          padding: 2,
          borderRadius: "15px",
          width: { xs: "100%", md: 350 },
        }}
      >
        <Box
          onSubmit={handleUserInputs}
          component="form"
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <Box>
            <Typography variant="subtitle2" color="text.secondary">
              Username
            </Typography>
            <TextField
              type="text"
              value={userLogin.userName}
              onChange={handleUserName}
              fullWidth
            />
          </Box>
          <Box>
            <Typography variant="subtitle2" color="text.secondary">
              Password
            </Typography>
            <TextField
              type="password"
              value={userLogin.password}
              onChange={handleUserPassword}
              fullWidth
            />
          </Box>

          <Chip
            component="button"
            clickable
            type="submit"
            label="Submit form"
          />
        </Box>
      </Paper>
    </Box>
  );
};

export default Login;
