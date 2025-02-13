"use client";

import React, { useContext, useState } from "react";

import Link from "next/link";

import { AuthContext, AuthState } from "@/context/auth-context";
import Grid from "@mui/material/Grid2";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";

import { mainMenuItems } from "./menuItems";

const Header = () => {
  const auth = useContext(AuthContext);
  const { isLoggedIn } = auth?.state as AuthState;
  const [mobile, setMobile] = useState(false);
  const handleMobileClick = () => setMobile(!mobile);

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ borderBottom: "1px solid black", padding: 1 }}
    >
      <Grid size={4}>
        <Link href="/">
          <Typography variant="h6" component="h1">
            &lt;MichaelHunter /&gt;
          </Typography>
        </Link>
      </Grid>

      <Grid size={6}>
        <List sx={{ display: "flex", flexDirection: "row" }}>
          {mainMenuItems?.map((menu, index) => (
            <ListItem className="link" key={`${menu}--${index}`}>
              <Link href={`${menu.route}`}>{menu.text}</Link>
            </ListItem>
          ))}
          <ListItem>{isLoggedIn ? "Log out" : "Login"}</ListItem>
        </List>
        <div className="hamburger-icon" onClick={handleMobileClick}>
          {/* {mobile ? (
            <FaTimes size={20} style={{ color: "white" }} />
          ) : (
            <FaBars size={20} style={{ color: "white" }} />
          )} */}
        </div>
      </Grid>
    </Grid>
  );
};

export default Header;
