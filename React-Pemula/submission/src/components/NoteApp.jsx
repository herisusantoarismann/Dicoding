import React from "react";
import { getInitialData, showFormattedDate } from "../utils/index";
import { NoteInput } from "./NoteInput";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: getInitialData(),
      title: "",
      body: "",
      maxLengthTitle: 50,
      keyword: [],
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

  onArchived = (id, archived) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        data: this.state.data.map((item) =>
          item.id === id ? { ...item, archived: archived } : item
        ),
      };
    });
  };

  render() {
    return (
      <div>
        <header className="note-app__header">
          <h1>Note App</h1>
          <div>
            <input
              type="text"
              name="keyword"
              value={this.state.keyword}
              placeholder="Search your note"
              onChange={this.onChange}
            />
          </div>
        </header>
        <main className="note-app__body">
          <NoteInput
            onSubmit={this.onSubmit}
            onChange={this.onChange}
            {...this.state}
          />
          <h2>Catatan Aktif</h2>
          {this.state.data.filter((item) => !item.archived).length > 0 ? (
            <div className="notes-list">
              {this.state.data
                .filter(
                  (item) =>
                    !item.archived && item.title.includes(this.state.keyword)
                )
                .map((item) => {
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
                        <button
                          className="note-item__archive-button"
                          onClick={() => this.onArchived(item.id, true)}
                        >
                          Arsipkan
                        </button>
                      </div>
                    </div>
                  );
                })}
            </div>
          ) : (
            <div className="notes-list__empty-message">
              <h3>Tidak ada Catatan</h3>
            </div>
          )}
          <h2>Arsip</h2>
          {this.state.data.filter((item) => item.archived).length > 0 ? (
            <div className="notes-list">
              {this.state.data
                .filter(
                  (item) =>
                    item.archived && item.title.includes(this.state.keyword)
                )
                .map((item) => {
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
                        <button
                          className="note-item__archive-button"
                          onClick={() => this.onArchived(item.id, false)}
                        >
                          Arsipkan
                        </button>
                      </div>
                    </div>
                  );
                })}
            </div>
          ) : (
            <div className="notes-list__empty-message">
              <h3>Tidak ada Arsip</h3>
            </div>
          )}
        </main>
      </div>
    );
  }
}

export default NoteApp;
