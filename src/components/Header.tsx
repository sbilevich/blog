import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Header: React.FC = () => (
  <AppBar position="static" className="z-20">
    <Toolbar>
      <Link to="/">
        <Typography variant="h6" component="span">
          My Blog
        </Typography>
      </Link>
    </Toolbar>
  </AppBar>
);

export default Header;
