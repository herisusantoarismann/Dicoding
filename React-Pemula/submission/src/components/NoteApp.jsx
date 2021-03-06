import React from "react";
import { getInitialData } from "../utils/index";
import { NoteEmptyMessage } from "./NoteEmptyMessage";
import { NoteHeader } from "./NoteHeader";
import { NoteInputBox } from "./NoteInputBox";
import { NoteItem } from "./NoteItem";

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
        // get dynamic name and value
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
        // filter data by id
        data: prevState.data.filter((item) => item.id !== id),
      };
    });
  };

  onArchived = (id, archived) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        // filer and change value data
        data: this.state.data.map((item) =>
          item.id === id ? { ...item, archived: archived } : item
        ),
      };
    });
  };

  render() {
    return (
      <div>
        <NoteHeader keyword={this.state.keyword} onChange={this.onChange} />
        <main className="note-app__body">
          <NoteInputBox
            title={this.state.title}
            body={this.state.body}
            maxLengthTitle={this.state.maxLengthTitle}
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
            <NoteEmptyMessage name="Catatan" />
          )}
          <h2>Arsip</h2>
          {/* checking archived data */}
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
            <NoteEmptyMessage name="Arsip" />
          )}
        </main>
      </div>
    );
  }
}

export default NoteApp;
