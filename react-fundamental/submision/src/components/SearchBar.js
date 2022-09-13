import React from "react";
import PropTypes from "prop-types";

const SearchBar = ({ value, onChange }) => {
  return (
    <section className="search-bar">
      <input
        type="text"
        placeholder="Cari berdasarkan judul ..."
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
