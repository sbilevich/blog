import { AddCircle, SpeakerNotes } from "@mui/icons-material";
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const drawerWidth = 240;

const Navigation: React.FC = () => (
  <Drawer
    variant="permanent"
    className="z-10"
    sx={{
      width: drawerWidth,
      flexShrink: 0,
      [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
    }}
  >
    <Toolbar />
    <Divider />
    <List>
      <ListItem disablePadding>
        <ListItemButton component={Link} to="/">
          <ListItemIcon>
            <SpeakerNotes />
          </ListItemIcon>
          <ListItemText primary="Posts" />
        </ListItemButton>
      </ListItem>

      <ListItem disablePadding>
        <ListItemButton component={Link} to="/create-post">
          <ListItemIcon>
            <AddCircle />
          </ListItemIcon>
          <ListItemText primary="Create Post" />
        </ListItemButton>
      </ListItem>
    </List>
  </Drawer>
);

export default Navigation;
