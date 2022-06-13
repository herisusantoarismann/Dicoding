import React from "react";
import { NoteSearch } from "./NoteSearch";

export const NoteHeader = ({ keyword, onChange }) => {
  return (
    <header className="note-app__header">
      <h1>Note App</h1>
      <NoteSearch keyword={keyword} onChange={onChange} />
    </header>
  );
};
