import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Auth0Provider } from "@auth0/auth0-react";
// providers
import AppContextProvider from "./contexts/AppContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-nrq2svqql3gx0c0q.us.auth0.com"
    clientId="K5jPnWI9rhI2AyIgHZjGEuXmU9DSzcje"
    redirectUri={window.location.origin}
  >
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
