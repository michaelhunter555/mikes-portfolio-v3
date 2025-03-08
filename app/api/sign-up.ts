import { NextApiRequest, NextApiResponse } from "next";

import User, { AccountTypes, IUser } from "@/models/User";
import { PaletteMode } from "@mui/material";

// eslint-disable-next-line import/no-anonymous-default-export
export default async function (req: NextApiRequest, res: NextApiResponse) {
  const { email, userName, password } = req.body;

  //check if user exists already
  try {
    const user = await User.findOne({ $or: [{ email }, { userName }] });

    if (user) {
      return res
        .status(403)
        .json({ error: "This user already exists", ok: false });
    }

    //TODO: remember to encrypt password
    const newUser = {
      email,
      userName,
      password,
      theme: "light" as PaletteMode,
      accountType: "subscriber" as AccountTypes,
    };

    const addNewUser = new User<Partial<IUser>>(newUser);
    await addNewUser.save();
    res.status(201).json({ message: "User added successfully", ok: true });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "error 500 creating new user.", ok: false });
  }
}
