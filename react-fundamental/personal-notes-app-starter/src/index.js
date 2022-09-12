import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import AuthContextProvider from "./context/AuthContext";
import ThemeContextProvider from "./context/ThemeContext";

import "./styles/style.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <ThemeContextProvider>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </ThemeContextProvider>
);
