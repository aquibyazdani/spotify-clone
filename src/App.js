import React, { useState, Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import SpotifyHome from "./Components/SpotifyHome";
import NavBar from "./Components/NavBar";
import LeftDrawer from "./Components/LeftDrawer";
import SearchHomepage from "./Components/SearchHomepage";
import BottomPlayer from "./Components/BottomPlayer";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {
  const [leftDrawerMenu, setLeftDrawerMenu] = useState("Home");
  return (
    <>
      <Router>
        <NavBar leftDrawerMenu={leftDrawerMenu} />
        <LeftDrawer
          leftDrawerMenu={leftDrawerMenu}
          setLeftDrawerMenu={setLeftDrawerMenu}
        />
        <BottomPlayer />
        {/* {leftDrawerMenu === "Home" ? (
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
        )} */}

        <Routes>
          <Route exact path="/search" element={<SearchHomepage />}></Route>
          <Route exact path="/" element={<SpotifyHome />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
