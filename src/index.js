import React from "react";
import ReactDOM from "react-dom/client";
import "./theme.js";
import "@mantine/core/styles.css";
import App from "./App";

const sidebarData = [
  { label: "Movies", href: "#" },
  { label: "Rated movies", href: "#" },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App sidebarList={sidebarData} />
  </React.StrictMode>
);
