import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import SpotifyHome from "./Components/SpotifyHome";
import NavBar from "./Components/NavBar";
import LeftDrawer from "./Components/LeftDrawer";
import SearchHomepage from "./Components/SearchHomepage";
function App() {
  const [leftDrawerMenu, setLeftDrawerMenu] = useState("Home");
  return (
    <>
      <NavBar />
      <LeftDrawer
        leftDrawerMenu={leftDrawerMenu}
        setLeftDrawerMenu={setLeftDrawerMenu}
      />
      {leftDrawerMenu === "Home" ? (
        <SpotifyHome
          leftDrawerMenu={leftDrawerMenu}
          setLeftDrawerMenu={setLeftDrawerMenu}
        />
      ) : leftDrawerMenu === "Search" ? (
        <SearchHomepage
          leftDrawerMenu={leftDrawerMenu}
          setLeftDrawerMenu={setLeftDrawerMenu}
        />
      ) : (
        ""
      )}
    </>
  );
}

export default App;
