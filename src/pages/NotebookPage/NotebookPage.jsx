import "../../pages/NotebookPage/NotebookPage.scss";
import { Component } from "react";
import { MdSearch, MdDeleteForever } from "react-icons/md";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const NotebookPage = ({
  handleAddNote,
  handleSearchNote,
  handleToggleDarkMode,
  id,
  text,
  date,
}) => {
  const [notes, setNotes] = useState([
    {
      id: uuidv4(),
      text: "This is the first note",
      date: "7/2/2021",
    },
    {
      id: uuidv4(),
      text: "This is the second note",
      date: "7/3/2021",
    },
    {
      id: uuidv4(),
      text: "This is the third note",
      date: "7/4/2021",
    },
  ]);

  // const addNote = (text) => {
  //   const date = new Date();
  //   const newNotes = [...notes, newNote];
  //   setNotes(newNotes);
  // };

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-notes-app-data"));
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
  }, [notes]);

  const handleDeleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  const [noteText, setNoteText] = useState("");
  // const [notes, setNotes] = useState([]);
  const characterLimit = 10000;

  // const addNote = ({ handleAddNote, notes, setNotes }) => {};
  const handleChange = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };

  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      const newNote = {
        id: uuidv4(),
        text: noteText,
        date: new Date().toLocaleDateString(),
      };
      console.log("text");
      setNotes([...notes, newNote]);
      // setNoteText("");
    }
    //create function so if noteText.trim().length == 0 then add bookmark of timestamp
  };

  //state with empty array of notes
  //on save the state changes and the note persists, note added into the array
  return (
    <>
      <div className="header">
        <h1>Notebook</h1>
        <button
          onClick={() =>
            handleToggleDarkMode((previousDarkMode) => !previousDarkMode)
          }
          className="toggle"
        >
          Dark Mode
        </button>
      </div>
      <div className="search">
        <MdSearch className="search-icons" size="1.3em" />
        <input
          onChange={(event) => handleSearchNote(event.target.value)}
          type="text"
          placeholder="Search notes..."
        />
      </div>
      <div className="notebook">
        {notes?.map((note) => (
          <div className="note">
            <span>{note.text}</span>
            <div className="note-footer">
              <small> {note.date} </small>
              <MdDeleteForever
                onClick={() => handleDeleteNote(note.id)}
                className="delete-icon"
                size="1.3em"
              />
            </div>
          </div>
        ))}
        <div className="note new">
          <textarea
            rows="8"
            cols="10"
            placeholder="Add your note here"
            value={noteText}
            onChange={handleChange}
          ></textarea>
          <div className="note-footer">
            <small>{characterLimit - noteText.length} letters remaining</small>
            <button className="save" onClick={handleSaveClick}>
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotebookPage;
