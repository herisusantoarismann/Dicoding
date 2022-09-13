import React from "react";
import PropTypes from "prop-types";
import { LanguageContext } from "../context/LanguageContext";
import { content } from "../utils/content";

const SearchBar = ({ value, onChange }) => {
  const { language } = React.useContext(LanguageContext);

  return (
    <section className="search-bar">
      <input
        type="text"
        placeholder={content[language].search.placeholder}
        value={value}
        onChange={(e) => onChange(e)}
      />
    </section>
  );
};

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchBar;
