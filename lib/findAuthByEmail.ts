import { NextApiResponse } from "next";

import User, { IUser } from "../models/User";

export const findAuthByEmail = async (
  value: string,
  res: NextApiResponse
): Promise<IUser | void> => {
  try {
    const user = await User.findOne({
      $or: [{ value: value }, { userName: value }],
    });

    if (!user) {
      return res.status(404).json({ error: "user not found.", ok: false });
    }
    return user;
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "An error has occurred.", ok: false });
  }
};
