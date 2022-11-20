import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import logo from "../assests/Spotify_Logo_RGB_White.png";
import Divider from "@mui/material/Divider";
import { Row, Col } from "reactstrap";
import "./navbar.css";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
export default function NavBar(props) {
  const { user, isAuthenticated, isLoading } = useAuth0();

  const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();

    return (
      <Button
        className="login-btn-nav"
        color="inherit"
        onClick={() => loginWithRedirect()}
      >
        Log In
      </Button>
    );
  };

  const LogoutButton = () => {
    const { logout } = useAuth0();

    return (
      <Button
        className="login-btn-nav"
        color="inherit"
        onClick={() => logout({ returnTo: window.location.origin })}
      >
        Log Out
      </Button>
    );
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "#0a0a0a",
          boxShadow: "none",
        }}
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
          {props?.leftDrawerMenu === "Search" && (
            <Row className="searchbar-wrapper">
              <input
                className="search-bar-input"
                type="search"
                placeholder="What do you want to listen to?"
              />
              <span className="searchicon-searchbar">
                <SearchSharpIcon />
              </span>
            </Row>
          )}
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
          <Link
            style={{ textDecoration: "none" }}
            to="/sign-up"
            target="_blank"
          >
            <Button className="nav-menu-text" color="inherit">
              Sign up
            </Button>
          </Link>
          {isAuthenticated ? <LogoutButton /> : <LoginButton />}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
