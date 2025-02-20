"use client";
import React, { useState } from "react";

import { useRouter } from "next/navigation";

import { useUser } from "@/hooks/user-hook";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

const Login = () => {
  const router = useRouter();
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
      const userAuth = await login(userName, password);

      if (userAuth) {
      }
    }
  };

  const handleFormCancel = () => {
    router.back();
  };

  const hasValidInputs = userLogin.password && userLogin.userName;

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

          <Stack direction="row" spacing={2} justifyContent="flex-end">
            <Chip
              variant="outlined"
              component="button"
              clickable
              onClick={handleFormCancel}
              label="cancel"
              color="error"
            />
            <Chip
              disabled={!hasValidInputs}
              variant="filled"
              color="primary"
              component="button"
              clickable
              type="submit"
              label="Submit form"
            />
          </Stack>
        </Box>
      </Paper>
    </Box>
  );
};

export default Login;
