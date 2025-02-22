"use client";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

interface LoginFormProps {
  handleUserInputs: (event: React.FormEvent) => Promise<void>;
  userLogin: { userName: string; password: string };
  handleUserName: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleUserPassword: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleFormCancel: () => void;
  hasValidInputs: boolean;
}
const LoginForm = ({
  handleUserInputs,
  userLogin,
  handleUserName,
  handleUserPassword,
  handleFormCancel,
  hasValidInputs,
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
  );
};

export default LoginForm;
