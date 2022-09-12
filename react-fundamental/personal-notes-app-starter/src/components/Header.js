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
      <nav class="navigation">
        <ul>
          <li>
            <Link to="/archives">Terarsip</Link>
          </li>
        </ul>
      </nav>
      <button class="toggle-locale" type="button">
        <SiGoogletranslate />
      </button>
      <button class="toggle-theme" type="button">
        <FiSun />
      </button>
      <button class="button-logout" type="button">
        <FiLogOut />
        ini
      </button>
    </header>
  );
};

export default Header;
