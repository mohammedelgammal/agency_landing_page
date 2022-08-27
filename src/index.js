import React from "react";
import ReactDOM from "react-dom/client";
import "./dist/styles/index.css";
import App from "./Containers/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
