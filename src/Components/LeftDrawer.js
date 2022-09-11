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

const drawerWidth = 242;

const leftDrawerFirstMenu = [
  {
    label: "Home",
    icon: <HomeIcon className="leftdrawer-menu-icon" />,
  },
  {
    label: "Search",
    icon: <SearchSharpIcon className="leftdrawer-menu-icon" />,
  },
  {
    label: "Your Library",
    icon: <StackedBarChartIcon className="leftdrawer-menu-icon" />,
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

export default function LeftDrawer() {
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
