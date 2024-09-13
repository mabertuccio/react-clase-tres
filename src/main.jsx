// src/main.jsx

import React from "react";
import ReactDOM from "react-dom/client"; // Cambia esto
import "./index.css";
import App from "./components/App";

// Obtén el contenedor raíz
const rootElement = document.getElementById("root");

// Crea el root y renderiza la aplicación
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
