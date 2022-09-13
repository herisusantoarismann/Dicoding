import React from "react";
import NoteList from "../components/NoteList";
import EmptyNotes from "../components/EmptyNotes";
import SearchBar from "../components/SearchBar";
import { useSearchParams } from "react-router-dom";
import { getArchivedNotes } from "../utils/api";

const ArchivedPage = () => {
  const [notes, setNotes] = React.useState([]);
  const [filteredNotes, setFilteredNotes] = React.useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  React.useEffect(() => {
    getArchivedNotes().then((res) => {
      if (!res.error) {
        setNotes(res.data);
        setFilteredNotes(res.data);
      }
    });
  }, []);

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
    </section>
  );
};

export default ArchivedPage;
