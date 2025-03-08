import mongoose from "mongoose";

import { PaletteMode } from "@mui/material";

export interface IUser extends mongoose.Document {
  email?: string | undefined | null;
  password?: string;
  userName?: string;
  name?: string | undefined | null;
  theme?: PaletteMode;
  accountType?: AccountTypes;
}

export type AccountTypes = "subscriber" | "admin" | null;

const UserSchema = new mongoose.Schema<IUser>({
  email: { type: String, required: true },
  name: { type: String, required: true },
  userName: { type: String, required: true },
  password: { type: String, required: true },
  theme: {
    type: String,
    required: true,
    defualt: "dark",
    enum: ["dark", "light"],
  },
  accountType: {
    type: String,
    required: true,
    default: "subscriber",
    enum: ["subscriber", "admin"],
  },
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
