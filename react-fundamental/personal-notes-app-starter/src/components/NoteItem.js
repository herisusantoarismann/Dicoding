import React from "react";
import { showFormattedDate } from "../utils";
import PropTypes from "prop-types";

const NoteItem = ({ data }) => {
  const { title, createdAt, body } = data;
  return (
    <article className="note-item">
      <h3 className="note-item__title">
        <a href="/notes/notes-1">{title}</a>
      </h3>
      <p className="note-item__createdAt">{showFormattedDate(createdAt)}</p>
      <p className="note-item__body">{body}</p>
    </article>
  );
};

NoteItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default NoteItem;
