"use client";
import React, { useEffect, useState } from "react";

import { useRouter } from "next/navigation";

import LoginForm from "@/components/LoginForm/LoginForm";
import { useForm } from "@/hooks/use-form";
import { useUser } from "@/hooks/user-hook";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

const Login = () => {
  const router = useRouter();
  const [formState, inputHandler, setFormData] = useForm(
    {
      userName: { value: "", isValid: false },
      password: { value: "", isValid: false },
    },
    false
  );

  const [isLogin, setIsLogin] = useState<boolean>(true);
  const { login } = useUser();
  useEffect(() => {
    if (
      formState?.isValid &&
      formState?.inputs?.password?.value &&
      formState?.inputs?.userName?.value
    ) {
      setFormData(
        {
          userName: {
            value: formState?.inputs?.userName?.value,
            isValid: true,
          },
          password: {
            value: formState?.inputs?.password?.value,
            isValid: true,
          },
        },
        true
      );
    }
  }, [
    formState?.isValid,
    formState?.inputs?.password?.value,
    formState?.inputs?.userName?.value,
    setFormData,
  ]);

  const handleUserInputs = async (event: React.FormEvent) => {
    event.preventDefault();
    const { userName, password } = formState?.inputs;
    await login(String(userName?.value), String(password?.value));
  };

  const handleFormCancel = () => {
    router.back();
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
        gap: 5,
      }}
    >
      <ButtonGroup>
        <Button
          variant={isLogin ? "contained" : "outlined"}
          onClick={() => setIsLogin(true)}
        >
          Login
        </Button>
        <Button
          variant={isLogin ? "outlined" : "contained"}
          onClick={() => setIsLogin(false)}
        >
          Sign-up
        </Button>
      </ButtonGroup>
      <LoginForm
        isLogin={isLogin}
        handleUserInputs={handleUserInputs}
        formState={formState}
        inputHandler={inputHandler}
        handleFormCancel={handleFormCancel}
      />
    </Box>
  );
};

export default Login;
