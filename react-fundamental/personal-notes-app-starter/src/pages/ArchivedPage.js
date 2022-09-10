import React from "react";
import NoteList from "../components/NoteList";
import EmptyNotes from "../components/EmptyNotes";
import { getArchivedNotes } from "../utils/local-data";

const ArchivedPage = () => {
  const [notes, setNotes] = React.useState(getArchivedNotes());

  return (
    <section className="archived-page">
      <h2>Catatan Arsip</h2>
      <section className="search-bar">
        <input type="text" placeholder="Cari berdasarkan judul ..." />
      </section>
      {notes.length > 0 ? <NoteList notes={notes} /> : <EmptyNotes />}
      <div className="homepage__action">
        <button className="action" type="button" title="Tambah">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="none" d="M0 0h24v24H0V0z"></path>
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default ArchivedPage;
