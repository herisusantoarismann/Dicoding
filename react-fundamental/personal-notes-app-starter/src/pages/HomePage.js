import React from "react";
import { FiPlus } from "react-icons/fi";
import { Link, useSearchParams } from "react-router-dom";
import EmptyNotes from "../components/EmptyNotes";
import Loading from "../components/Loading";
import NoteList from "../components/NoteList";
import SearchBar from "../components/SearchBar";
import { useNotes } from "../hooks/useNotes";

const HomePage = () => {
  const [notes, loading] = useNotes("active");
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
    <section className="homepage">
      <h2>Catatan Aktif</h2>
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
      <div className="homepage__action">
        <Link to={"/notes/new"}>
          <button className="action" type="button" title="Tambah">
            <FiPlus />
          </button>
        </Link>
      </div>
    </section>
  );
};

export default HomePage;
