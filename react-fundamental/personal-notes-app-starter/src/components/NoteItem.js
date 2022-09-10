import React from "react";
import { showFormattedDate } from "../utils";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

const NoteItem = ({ data }) => {
  const { id, title, createdAt, body } = data;

  return (
    <article className="note-item">
      <h3 className="note-item__title">
        <Link to={`/notes/${id}`}>{title}</Link>
      </h3>
      <p className="note-item__createdAt">{showFormattedDate(createdAt)}</p>
      <p className="note-item__body">{parse(body)}</p>
    </article>
  );
};

NoteItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default NoteItem;
