import React from "react";
import { useNavigate } from "react-router-dom";
import { addNote } from "../utils/local-data";
import { FiCheck } from "react-icons/fi";

const AddNote = () => {
  const [note, setNote] = React.useState({
    title: "",
    body: "",
  });
  const navigate = useNavigate();

  const onChange = (e) => {
    setNote((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onInputBody = (e) => {
    setNote((prevState) => ({
      ...prevState,
      body: e.target.innerHTML,
    }));
  };

  const onSubmit = () => {
    addNote(note);
    navigate("/");
  };

  return (
    <section className="add-new-page">
      <div className="add-new-page__input">
        <input
          className="add-new-page__input__title"
          placeholder="Catatan rahasia"
          name="title"
          value={note.title}
          onChange={(e) => onChange(e)}
        />
        <div
          className="add-new-page__input__body"
          contentEditable="true"
          data-placeholder="Sebenarnya saya adalah ...."
          onInput={(e) => onInputBody(e)}
        ></div>
      </div>
      <div className="add-new-page__action">
        <button
          className="action"
          type="button"
          title="Simpan"
          onClick={() => onSubmit()}
        >
          <FiCheck />
        </button>
      </div>
    </section>
  );
};

export default AddNote;
