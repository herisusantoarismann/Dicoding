import React from "react";
import NoteList from "../components/NoteList";
import EmptyNotes from "../components/EmptyNotes";
import { getArchivedNotes } from "../utils/local-data";
import { FiPlus } from "react-icons/fi";

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
          <FiPlus />
        </button>
      </div>
    </section>
  );
};

export default ArchivedPage;
