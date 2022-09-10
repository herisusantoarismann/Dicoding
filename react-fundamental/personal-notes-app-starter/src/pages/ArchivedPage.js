import React from "react";
import NoteList from "../components/NoteList";
import EmptyNotes from "../components/EmptyNotes";
import { getArchivedNotes } from "../utils/local-data";
import { FiPlus } from "react-icons/fi";
import SearchBar from "../components/SearchBar";

const ArchivedPage = () => {
  const [notes, setNotes] = React.useState(getArchivedNotes());

  return (
    <section className="archived-page">
      <h2>Catatan Arsip</h2>
      <SearchBar />
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
