import React from "react";
import NoteItem from "./NoteItem";
import PropTypes from "prop-types";

const NoteList = ({ notes }) => {
  return (
    <section className="notes-list">
      {notes.map((note, i) => {
        return (
          <NoteItem
            id={note.id}
            title={note.title}
            createdAt={note.createdAt}
            body={note.body}
            key={i}
          />
        );
      })}
    </section>
  );
};

NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default NoteList;
