import React from "react";
import { Link } from "react-router-dom";
import { SiGoogletranslate } from "react-icons/si";
import { FiSun, FiLogOut } from "react-icons/fi";

const Header = () => {
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
      <button className="toggle-theme" type="button">
        <FiSun />
      </button>
      <button className="button-logout" type="button">
        <FiLogOut />
        ini
      </button>
    </header>
  );
};

export default Header;
