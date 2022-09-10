import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import EmptyNotes from "../components/EmptyNotes";
import NoteList from "../components/NoteList";
import SearchBar from "../components/SearchBar";
import { getActiveNotes } from "../utils/local-data";

const HomePage = () => {
  const notes = getActiveNotes();
  const [filteredNotes, setFilteredNotes] = React.useState(getActiveNotes());
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
        </Link>
      </div>
    </section>
  );
};

export default HomePage;
