"use client";
import type { InputHandler, State } from "@/types";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

interface LoginFormProps {
  handleUserInputs: (event: React.FormEvent) => Promise<void>;
  formState: State;
  isLogin: boolean;
  inputHandler: InputHandler;
  handleFormCancel: () => void;
}
const LoginForm = ({
  handleUserInputs,
  formState,
  inputHandler,
  isLogin,
  handleFormCancel,
}: LoginFormProps) => {
  return (
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
            Username or E-mail
          </Typography>
          <TextField
            id="userName"
            type="text"
            value={formState?.inputs?.username?.value}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              inputHandler(
                "userName",
                event.target.value,
                event.target.value !== ""
              )
            }
            fullWidth
          />
        </Box>
        {!isLogin && (
          <Box>
            <Typography variant="subtitle2" color="text.secondary">
              E-mail
            </Typography>
            <TextField
              id="email"
              type="email"
              value={formState?.inputs?.email?.value}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                inputHandler(
                  "email",
                  event.target.value,
                  event.target.value !== ""
                )
              }
              fullWidth
            />
          </Box>
        )}
        <Box>
          <Typography variant="subtitle2" color="text.secondary">
            Password
          </Typography>
          <TextField
            id="password"
            type="password"
            value={formState?.inputs?.password?.value}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              inputHandler(
                "password",
                event.target.value,
                event.target.value?.length > 5
              )
            }
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
            disabled={!formState?.isValid}
            variant="filled"
            color="primary"
            component="button"
            clickable
            type="submit"
            label="Login"
          />
        </Stack>
      </Box>
    </Paper>
  );
};

export default LoginForm;
