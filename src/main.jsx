import React from "react";
import ReactDOM from "react-dom/client";
import GifExpertApp from "./GifExpertApp";
import "./index.css";
// * React.StrictMode -> solo se aplica en desarrollo, en produccion se omite
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GifExpertApp />
  </React.StrictMode>
);
