import { NextApiRequest, NextApiResponse } from "next";

import { PaletteMode } from "@mui/material";

import { findAuthByEmail } from "../../lib/findAuthByEmail";

// eslint-disable-next-line import/no-anonymous-default-export
export default async function (req: NextApiRequest, res: NextApiResponse) {
  const { email, password, userName } = req.body;

  try {
    const handleLoginValue = email ?? userName;
    const user = await findAuthByEmail(String(handleLoginValue), res);

    if (user && user.password !== password) {
      return res
        .status(403)
        .json({ error: "The password entered is incorrect", ok: false });
    }

    const userData = {
      name: user?.name,
      userName: user?.userName,
      email: user?.email,
      theme: user?.theme as PaletteMode,
      accountType: user?.accountType as "subscriber" | "admin" | null,
    };

    res.status(200).json({ userData, ok: true });
  } catch (err) {
    res.status(200).json({ error: "An error has occurred" + err, ok: true });
  }
}
