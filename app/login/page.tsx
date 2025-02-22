"use client";
import React, { useState } from "react";

import { useRouter } from "next/navigation";

import LoginForm from "@/components/LoginForm/LoginForm";
import { useUser } from "@/hooks/user-hook";
import Box from "@mui/material/Box";

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
        router.push("/");
      }
    }
  };

  const handleFormCancel = () => {
    router.back();
  };

  const hasValidInputs = Boolean(userLogin.password && userLogin.userName);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
      }}
    >
      <LoginForm
        handleUserInputs={handleUserInputs}
        userLogin={userLogin}
        handleUserName={handleUserName}
        handleUserPassword={handleUserPassword}
        handleFormCancel={handleFormCancel}
        hasValidInputs={hasValidInputs}
      />
    </Box>
  );
};

export default Login;
