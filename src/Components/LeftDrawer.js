import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import "./leftdrawer.css";
import HomeIcon from "@mui/icons-material/Home";
import StackedBarChartIcon from "@mui/icons-material/StackedBarChart";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import AddBoxIcon from "@mui/icons-material/AddBox";
import FavoriteIcon from "@mui/icons-material/Favorite";
import logo from "../assests/Spotify_Logo_RGB_White.png";
import { useNavigate } from "react-router-dom";
export default function LeftDrawer(props) {
  const navigate = useNavigate();

  const drawerWidth = 242;

  const leftDrawerFirstMenu = [
    {
      label: "Home",
      path: "/",
      icon: (
        <HomeIcon
          className="leftdrawer-menu-icon"
          sx={{ color: props?.leftDrawerMenu === "Home" ? "white" : "#A7A7A7" }}
        />
      ),
    },
    {
      label: "Search",
      path: "/search",

      icon: (
        <SearchSharpIcon
          className="leftdrawer-menu-icon"
          sx={{
            color: props?.leftDrawerMenu === "Search" ? "white" : "#A7A7A7",
          }}
        />
      ),
    },
    {
      label: "Your Library",
      path: "/your-library",

      icon: (
        <StackedBarChartIcon
          className="leftdrawer-menu-icon"
          sx={{
            color:
              props?.leftDrawerMenu === "Your Library" ? "white" : "#A7A7A7",
          }}
        />
      ),
    },
  ];

  const leftDrawerSecondMenu = [
    {
      label: "Create Playlist",
      icon: <AddBoxIcon className="leftdrawer-menu-icon" />,
    },
    {
      label: "Liked Songs",
      icon: <FavoriteIcon className="leftdrawer-menu-icon" />,
    },
  ];
  const leftDrawerThirdMenu = [
    {
      label: "Cookies",
    },
    {
      label: "Privacy",
    },
  ];

  const navigateLeftMenu = (path) => {
    navigate(path);
  };
  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        className="left-drawer"
        sx={{
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            position: "fixed",
            backgroundColor: "black",
            color: "#A7A7A7",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <ListItem className="pt-1" disablePadding>
          <ListItemButton>
            <img width="131px" src={logo} alt="logo" />
          </ListItemButton>
        </ListItem>

        <List className="mt-3">
          {leftDrawerFirstMenu?.map((item, index) => (
            <ListItem
              onClick={() => {
                navigateLeftMenu(item.path);
                props?.setLeftDrawerMenu(item?.label);
              }}
              key={index + item.label}
              disablePadding
            >
              <ListItemButton sx={{ textDecoration: "none" }}>
                <ListItemIcon
                  sx={{ minWidth: "fit-content", paddingRight: "0.7rem" }}
                >
                  {item?.icon}
                </ListItemIcon>
                <span
                  className="leftdrawer-menu-text"
                  style={{
                    color:
                      props?.leftDrawerMenu === item?.label
                        ? "white"
                        : "#A7A7A7",
                  }}
                >
                  {item?.label}
                </span>
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <List className="mt-2">
          {leftDrawerSecondMenu?.map((item, index) => (
            <ListItem key={index + item.label} disablePadding>
              <ListItemButton>
                <ListItemIcon
                  sx={{ minWidth: "fit-content", paddingRight: "0.7rem" }}
                >
                  {item?.icon}
                </ListItemIcon>
                <span className="leftdrawer-menu-text">{item?.label}</span>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <List className="mt-2 info-leftdrawer-wrapper">
          {leftDrawerThirdMenu?.map((item, index) => (
            <ListItem key={index + item.label} disablePadding>
              <ListItemButton>
                <span className="info-leftdrawer-text">{item?.label}</span>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
