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

const DetailPage = () => {
  const { idnote } = useParams();
  const notes = getNote(idnote);
  const { id, title, createdAt, body, archived } = notes;
  const navigate = useNavigate();

  const onArchived = () => {
    archiveNote(id);
    navigate("/");
  };

  const onUnarchived = () => {
    unarchiveNote(id);
    navigate("/");
  };

  const onDelete = () => {
    deleteNote(id);
    navigate("/");
  };

  return (
    <section className="detail-page">
      <h3 className="detail-page__title">{title}</h3>
      <p className="detail-page__createdAt">{showFormattedDate(createdAt)}</p>
      <div className="detail-page__body">{body}</div>
      <div className="detail-page__action">
        {archived ? (
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
};

export default DetailPage;
