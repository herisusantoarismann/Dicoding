import React from "react";
import { Link } from "react-router-dom";
import { SiGoogletranslate } from "react-icons/si";
import { FiSun, FiLogOut, FiMoon } from "react-icons/fi";
import { ThemeContext } from "../context/ThemeContext";
import { AuthContext } from "../context/AuthContext";
import { LanguageContext } from "../context/LanguageContext";
import { content } from "../utils/content";

const Header = () => {
  const { theme, toggleTheme } = React.useContext(ThemeContext);
  const { authUser, Logout } = React.useContext(AuthContext);
  const { language, toggleLanguage } = React.useContext(LanguageContext);

  return (
    <header>
      <h1>
        <Link to="/">{content[language].header.name}</Link>
      </h1>
      <nav className="navigation">
        <ul>
          <li>
            {authUser && (
              <Link to="/archives">{content[language].header.anchor}</Link>
            )}
          </li>
        </ul>
      </nav>
      <button className="toggle-locale" type="button" onClick={toggleLanguage}>
        <SiGoogletranslate />
      </button>
      <button className="toggle-theme" type="button" onClick={toggleTheme}>
        {theme === "light" ? <FiMoon /> : <FiSun />}
      </button>
      {authUser && (
        <button className="button-logout" type="button" onClick={Logout}>
          <FiLogOut /> {authUser.name}
        </button>
      )}
    </header>
  );
};

export default Header;
