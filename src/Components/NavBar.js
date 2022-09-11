import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import logo from "../assests/Spotify_Logo_RGB_White.png";
import Divider from "@mui/material/Divider";
import "./navbar.css";
export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{ backgroundColor: "#0a0a0a", boxShadow: "none" }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <img width="131px" src={logo} alt="logo" />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          ></Typography>
          <Button className="nav-menu-text" color="inherit">
            Premium
          </Button>
          <Button className="nav-menu-text" color="inherit">
            Support
          </Button>
          <Button className="nav-menu-text" color="inherit">
            Download
          </Button>
          <Divider
            light={false}
            orientation="vertical"
            variant="middle"
            sx={{ minHeight: 30, width: 2 }}
          />
          <Button className="nav-menu-text" color="inherit">
            Sign up
          </Button>
          <Button className="login-btn-nav" color="inherit">
            Sign in
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
