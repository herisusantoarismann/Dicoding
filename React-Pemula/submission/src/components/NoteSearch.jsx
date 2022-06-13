import React from "react";

export const NoteSearch = ({ keyword, onChange }) => {
  return (
    <div>
      <input
        type="text"
        name="keyword"
        value={keyword}
        placeholder="Search your note"
        onChange={onChange}
      />
    </div>
  );
};
