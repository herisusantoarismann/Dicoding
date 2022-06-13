import React from "react";
import { getInitialData, showFormattedDate } from "../utils/index";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: getInitialData(),
      title: "",
      body: "",
      maxLengthTitle: 50,
      archived: [],
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  onChange = (event) => {
    this.setState(() => {
      return {
        [event.target.name]: event.target.value,
      };
    });
  };

  onSubmit = (event) => {
    event.preventDefault();

    const newData = {
      id: +new Date(),
      title: this.state.title,
      body: this.state.body,
      createdAt: new Date(),
      archived: false,
    };

    this.setState((prevState) => {
      return {
        ...prevState,
        data: [...prevState.data, newData],
      };
    });
  };

  onDelete = (id) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        data: prevState.data.filter((item) => item.id !== id),
      };
    });
  };

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
            <p className="note-input__title__char-limit">
              Sisa Karakter :{" "}
              {this.state.maxLengthTitle - this.state.title.length}
            </p>
            <form
              action=""
              className="note-input__body"
              onSubmit={this.onSubmit}
            >
              <input
                type="text"
                placeholder="Masukkan Judul"
                name="title"
                value={this.state.title}
                onChange={this.onChange}
              />
              <textarea
                name="body"
                value={this.state.body}
                cols="30"
                rows="10"
                placeholder="Masukkan Catatan...."
                onChange={this.onChange}
              ></textarea>
              <button type="submit">Buat</button>
            </form>
          </div>
          {this.state.data.length > 0 ? (
            <>
              <div>
                <h2>Catatan Aktif</h2>
                <div className="notes-list">
                  {this.state.data.map((item) => {
                    return (
                      <div className="note-item" key={item.id}>
                        <div className="note-item__content">
                          <h3 className="note-item__title">{item.title}</h3>
                          <p className="note-item__date">
                            {showFormattedDate(item.createdAt)}
                          </p>
                          <p className="note-item__body">{item.body}</p>
                        </div>
                        <div className="note-item__action">
                          <button
                            className="note-item__delete-button"
                            onClick={() => this.onDelete(item.id)}
                          >
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
            </>
          ) : (
            <div className="notes-list__empty-message">
              <h3>Tidak ada Catatan</h3>
            </div>
          )}
        </main>
      </div>
    );
  }
}

export default NoteApp;
