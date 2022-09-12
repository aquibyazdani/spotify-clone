import React, { useState, Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import SpotifyHome from "./Components/SpotifyHome";
import NavBar from "./Components/NavBar";
import LeftDrawer from "./Components/LeftDrawer";
import SearchHomepage from "./Components/SearchHomepage";
import BottomPlayer from "./Components/BottomPlayer";
import SignUp from "./Components/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [leftDrawerMenu, setLeftDrawerMenu] = useState("Home");

  console.log("rote path", window.location.pathname);
  return (
    <>
      <Router>
        {window.location.pathname !== "/sign-up" && (
          <NavBar leftDrawerMenu={leftDrawerMenu} />
        )}
        {window.location.pathname !== "/sign-up" && (
          <LeftDrawer
            leftDrawerMenu={leftDrawerMenu}
            setLeftDrawerMenu={setLeftDrawerMenu}
          />
        )}
        {window.location.pathname !== "/sign-up" && <BottomPlayer />}

        <Routes>
          <Route exact path="/search" element={<SearchHomepage />}></Route>
          <Route exact path="/" element={<SpotifyHome />}></Route>
          <Route exact path="/sign-up" element={<SignUp />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
