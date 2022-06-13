import React from "react";
import { getInitialData, showFormattedDate } from "../utils/index";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: getInitialData(),
    };
  }

  render() {
    return (
      <div>
        <header className="note-app__header">
          <h1>Note App</h1>
          <div>
            <input type="text" placeholder="Search your note" />
          </div>
        </header>
        <main className="note-app__body">
          <div className="note-input">
            <h2 className="note-input__title">Buat Catatan</h2>
            <p className="note-input__title__char-limit">Sisa Karakter : 50</p>
            <form action="" className="note-input__body">
              <input type="text" placeholder="Masukkan Judul" />
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Masukkan Catatan...."
              ></textarea>
              <button>Buat</button>
            </form>
          </div>
          <div>
            <h2>Catatan Aktif</h2>
            <div className="notes-list">
              {this.state.data.map((item) => {
                return (
                  <div className="note-item">
                    <div className="note-item__content">
                      <h3 className="note-item__title">{item.title}</h3>
                      <p className="note-item__date">
                        {showFormattedDate(item.createdAt)}
                      </p>
                      <p className="note-item__body">{item.body}</p>
                    </div>
                    <div className="note-item__action">
                      <button className="note-item__delete-button">
                        Delete
                      </button>
                      <button className="note-item__archive-button">
                        Arsipkan
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <h2>Arsip</h2>
          </div>
        </main>
      </div>
    );
  }
}

export default NoteApp;
