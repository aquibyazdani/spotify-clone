import logo from "./logo.svg";
import "./App.css";
import SpotifyHome from "./Components/SpotifyHome";
import NavBar from "./Components/NavBar";
import LeftDrawer from "./Components/LeftDrawer";
function App() {
  return (
    <>
      <NavBar />
      <LeftDrawer />
      <SpotifyHome />
    </>
  );
}

export default App;
