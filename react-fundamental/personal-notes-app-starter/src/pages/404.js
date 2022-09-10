import React from "react";
import { FiHome } from "react-icons/fi";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>Ooopss...</h1>
      <p>Tampaknya anda tersesat. Ayo pulang ke rumah.</p>
      <Link to={"/"}>
        <p className="note-item__title">Home</p>
      </Link>
    </div>
  );
};

export default NotFound;
