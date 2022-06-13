import React from "react";
import { getInitialData } from "../utils/index";
import { NoteEmptyMessage } from "./NoteEmptyMessage";
import { NoteInput } from "./NoteInput";
import { NoteItem } from "./NoteItem";
import { NoteSearch } from "./NoteSearch";

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
          <NoteSearch keyword={this.state.keyword} onChange={this.onChange} />
        </header>
        <main className="note-app__body">
          <NoteInput
            title={this.state.title}
            body={this.state.body}
            onSubmit={this.onSubmit}
            onChange={this.onChange}
          />
          <h2>Catatan Aktif</h2>
          {this.state.data.filter((item) => !item.archived).length > 0 ? (
            <div className="notes-list">
              {this.state.data
                .filter(
                  (item) =>
                    !item.archived && item.title.includes(this.state.keyword)
                )
                .map((item) => (
                  <NoteItem
                    id={item.id}
                    title={item.title}
                    body={item.body}
                    createdAt={item.createdAt}
                    archived={item.archived}
                    onDelete={this.onDelete}
                    onArchived={this.onArchived}
                    key={item.id}
                  />
                ))}
            </div>
          ) : (
            <NoteEmptyMessage />
          )}
          <h2>Arsip</h2>
          {this.state.data.filter((item) => item.archived).length > 0 ? (
            <div className="notes-list">
              {this.state.data
                .filter(
                  (item) =>
                    item.archived && item.title.includes(this.state.keyword)
                )
                .map((item) => (
                  <NoteItem
                    id={item.id}
                    title={item.title}
                    body={item.body}
                    createdAt={item.createdAt}
                    archived={item.archived}
                    onDelete={this.onDelete}
                    onArchived={this.onArchived}
                    key={item.id}
                  />
                ))}
            </div>
          ) : (
            <NoteEmptyMessage />
          )}
        </main>
      </div>
    );
  }
}

export default NoteApp;
