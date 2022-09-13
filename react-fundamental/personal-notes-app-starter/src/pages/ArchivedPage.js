import React from "react";
import NoteList from "../components/NoteList";
import EmptyNotes from "../components/EmptyNotes";
import SearchBar from "../components/SearchBar";
import Loading from "../components/Loading";
import { useSearchParams } from "react-router-dom";
import { useNotes } from "../hooks/useNotes";

const ArchivedPage = () => {
  const [notes, loading] = useNotes("archived");
  const [filteredNotes, setFilteredNotes] = React.useState(notes);
  const [searchParams, setSearchParams] = useSearchParams();

  // karena pertama kali nilai notes array kosong
  React.useEffect(() => {
    setFilteredNotes(notes);
  }, [notes]);

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
      {loading ? (
        <Loading />
      ) : notes.length > 0 ? (
        <NoteList notes={filteredNotes} />
      ) : (
        <EmptyNotes />
      )}
    </section>
  );
};

export default ArchivedPage;
