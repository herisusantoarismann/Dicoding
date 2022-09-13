import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { showFormattedDate } from "../utils";
import { BiArchiveIn, BiArchiveOut } from "react-icons/bi";
import { FiTrash } from "react-icons/fi";
import parse from "html-react-parser";
import NotFound from "./404";
import { archiveNote, deleteNote, getNote, unarchiveNote } from "../utils/api";

const DetailPage = () => {
  const { idnote } = useParams();
  const [note, setNote] = React.useState(undefined);
  const navigate = useNavigate();

  React.useEffect(() => {
    getNote(idnote).then((res) => {
      if (!res.error) setNote(res.data);
    });
  }, []);

  const onArchived = () => {
    archiveNote(note.id).then((res) => {
      if (!res.error) navigate("/");
    });
  };

  const onUnarchived = () => {
    unarchiveNote(note.id).then((res) => {
      if (!res.error) navigate("/archives");
    });
  };

  const onDelete = () => {
    deleteNote(note.id).then((res) => {
      if (!res.error) navigate("/");
    });
  };

  if (note === undefined) return <NotFound />;
  else {
    return (
      <section className="detail-page">
        <h3 className="detail-page__title">{note.title}</h3>
        <p className="detail-page__createdAt">
          {showFormattedDate(note.createdAt)}
        </p>
        <div className="detail-page__body">
          {note.body !== undefined ? parse(note.body) : note.body}
        </div>
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
