import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const Header: React.FC = () => (
  <AppBar position="static" className="z-20">
    <Toolbar>
      <Typography variant="h6">My Blog</Typography>
    </Toolbar>
  </AppBar>
);

export default Header;
