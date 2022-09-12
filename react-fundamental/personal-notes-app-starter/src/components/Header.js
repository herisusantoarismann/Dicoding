import React from "react";
import { Link } from "react-router-dom";
import { SiGoogletranslate } from "react-icons/si";
import { FiSun, FiLogOut, FiMoon } from "react-icons/fi";
import { ThemeContext } from "../context/ThemeContext";

const Header = () => {
  const theme = React.useContext(ThemeContext);

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
      <button
        className="toggle-theme"
        type="button"
        onClick={theme.toggleTheme}
      >
        {theme === "light" ? <FiMoon /> : <FiSun />}
      </button>
      <button className="button-logout" type="button">
        <FiLogOut />
        ini
      </button>
    </header>
  );
};

export default Header;
