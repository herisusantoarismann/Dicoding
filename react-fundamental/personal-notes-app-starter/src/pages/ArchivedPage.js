import React from "react";
import NoteList from "../components/NoteList";
import EmptyNotes from "../components/EmptyNotes";
import { getArchivedNotes } from "../utils/local-data";
import { FiPlus } from "react-icons/fi";
import SearchBar from "../components/SearchBar";
import { useSearchParams } from "react-router-dom";

const ArchivedPage = () => {
  const notes = getArchivedNotes();
  const [filteredNotes, setFilteredNotes] = React.useState(getArchivedNotes());
  const [searchParams, setSearchParams] = useSearchParams();

  const onChange = (e) => {
    setFilteredNotes(
      notes.filter((note) =>
        note.title.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );

    setSearchParams({ title: e.target.value });
  };

  return (
    <section className="archived-page">
      <h2>Catatan Arsip</h2>
      <SearchBar
        value={searchParams.get("title") ? searchParams.get("title") : ""}
        onChange={onChange}
      />
      {notes.length > 0 ? <NoteList notes={filteredNotes} /> : <EmptyNotes />}
      <div className="homepage__action">
        <button className="action" type="button" title="Tambah">
          <FiPlus />
        </button>
      </div>
    </section>
  );
};

export default ArchivedPage;
