import React from "react";

export const NoteInputBox = ({
  maxLengthTitle,
  title,
  body,
  onSubmit,
  onChange,
}) => {
  return (
    <div className="note-input">
      <h2 className="note-input__title">Buat Catatan</h2>
      <p className="note-input__title__char-limit">
        Sisa Karakter :{" "}
        {/* checking max length (if exceed maxLengthTitile will pop up an alert) */}
        {title.length <= maxLengthTitle
          ? maxLengthTitle - title.length
          : alert("Melewati maksimal karakter")}
      </p>
      <form action="" className="note-input__body" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Masukkan Judul"
          name="title"
          value={title}
          onChange={onChange}
        />
        <textarea
          name="body"
          value={body}
          cols="30"
          rows="10"
          placeholder="Masukkan Catatan...."
          onChange={onChange}
        ></textarea>
        <button type="submit">Buat</button>
      </form>
    </div>
  );
};
