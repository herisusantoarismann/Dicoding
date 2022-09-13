import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { showFormattedDate } from "../utils";
import {
  archiveNote,
  deleteNote,
  getNote,
  unarchiveNote,
} from "../utils/local-data";
import { BiArchiveIn, BiArchiveOut } from "react-icons/bi";
import { FiTrash } from "react-icons/fi";
import parse from "html-react-parser";
import NotFound from "./404";

const DetailPage = () => {
  const { idnote } = useParams();
  const note = getNote(idnote);
  const navigate = useNavigate();

  const onArchived = () => {
    archiveNote(note.id);
    navigate("/");
  };

  const onUnarchived = () => {
    unarchiveNote(note.id);
    navigate("/");
  };

  const onDelete = () => {
    deleteNote(note.id);
    navigate("/");
  };

  if (note === undefined) return <NotFound />;
  else {
    return (
      <section className="detail-page">
        <h3 className="detail-page__title">{note.title}</h3>
        <p className="detail-page__createdAt">
          {showFormattedDate(note.createdAt)}
        </p>
        {/* 2 kali parse karena nilai input memiliki html (mungkin), seperti &lt;p&gt;Ini adalah &lt;strong&gt; dst... */}
        {/* Maka parser pertama mengubah nilai tadi menjadi string html, seperti <p>Ini adalah <strong>contoh nilai string dst.... */}
        {/* Dan parser 2 menjadi jsx element */}
        <div className="detail-page__body">{parse(parse(note.body))}</div>
        <div className="detail-page__action">
          {note.archived ? (
            <button
              className="action"
              type="button"
              title="Arsipkan"
              onClick={() => onUnarchived()}
            >
              <BiArchiveOut />
            </button>
          ) : (
            <button
              className="action"
              type="button"
              title="Arsipkan"
              onClick={() => onArchived()}
            >
              <BiArchiveIn />
            </button>
          )}
          <button
            className="action"
            type="button"
            title="Hapus"
            onClick={() => onDelete()}
          >
            <FiTrash />
          </button>
        </div>
      </section>
    );
  }
};

export default DetailPage;
