import React from "react";
import { Link } from "react-router-dom";
import { SiGoogletranslate } from "react-icons/si";
import { FiSun, FiLogOut, FiMoon } from "react-icons/fi";
import { ThemeContext } from "../context/ThemeContext";
import { AuthContext } from "../context/AuthContext";

const Header = () => {
  const { theme, toggleTheme } = React.useContext(ThemeContext);
  const authed = React.useContext(AuthContext);

  return (
    <header>
      <h1>
        <Link to="/">Aplikasi Catatan</Link>
      </h1>
      <nav className="navigation">
        <ul>
          <li>
            <Link to="/archives">Terarsip</Link>
          </li>
        </ul>
      </nav>
      <button className="toggle-locale" type="button">
        <SiGoogletranslate />
      </button>
      <button className="toggle-theme" type="button" onClick={toggleTheme}>
        {theme === "light" ? <FiMoon /> : <FiSun />}
      </button>
      {authed.authed && (
        <button className="button-logout" type="button">
          <FiLogOut /> {authed.name}
        </button>
      )}
    </header>
  );
};

export default Header;
