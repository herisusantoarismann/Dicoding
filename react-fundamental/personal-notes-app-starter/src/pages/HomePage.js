import React from "react";
import { FiPlus } from "react-icons/fi";
import { Link, useSearchParams } from "react-router-dom";
import EmptyNotes from "../components/EmptyNotes";
import NoteList from "../components/NoteList";
import SearchBar from "../components/SearchBar";
import { getActiveNotes } from "../utils/api";

const HomePage = () => {
  const [notes, setNotes] = React.useState([]);
  const [filteredNotes, setFilteredNotes] = React.useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  React.useEffect(() => {
    getActiveNotes().then((res) => {
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
    <section className="homepage">
      <h2>Catatan Aktif</h2>
      <SearchBar
        value={searchParams.get("title") ? searchParams.get("title") : ""}
        onChange={onChange}
      />
      {notes.length > 0 ? <NoteList notes={filteredNotes} /> : <EmptyNotes />}
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
