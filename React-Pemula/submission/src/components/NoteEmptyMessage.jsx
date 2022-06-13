import React from "react";

export const NoteEmptyMessage = ({ name }) => {
  return (
    <div className="notes-list__empty-message">
      <h3>Tidak ada {name}</h3>
    </div>
  );
};
