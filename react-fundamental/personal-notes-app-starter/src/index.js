import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import AuthContextProvider from "./context/AuthContext";
import LanguageContextProvider from "./context/LanguageContext";
import ThemeContextProvider from "./context/ThemeContext";

import "./styles/style.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <ThemeContextProvider>
    <LanguageContextProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </LanguageContextProvider>
  </ThemeContextProvider>
);
