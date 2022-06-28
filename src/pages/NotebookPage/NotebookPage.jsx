import "../../pages/NotebookPage/NotebookPage.scss";
import { Component } from "react";
import { MdSearch, MdDeleteForever } from "react-icons/md";
import { useState, useEffect } from "react";

const NotebookPage = ({
  handleAddNote,
  handleSearchNote,
  handleToggleDarkMode,
  handleDeleteNote,
  notes,
  setNotes,
  id,
  text,
  date,
  noteText,
  setNoteText,
}) => {
  const addNote = ({ handleAddNote, notes, setNotes }) => {
    const [noteText, setNoteText] = useState("");
    // const [notesList, addNote] = useState([]);
    const characterLimit = 10000;

    const handleChange = (event) => {
      if (characterLimit - event.target.value.length >= 0) {
        setNoteText(event.target.value);
      }
    };

    const handleSaveClick = () => {
      if (noteText.trim().length > 0) {
        handleAddNote(noteText);
        setNoteText("");
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
          {/* {notes?.map((note) => ( */}
          <div className="note">
            <span>{text}</span>
            <div className="note-footer">
              <small> {date} </small>
              <MdDeleteForever
                onClick={() => handleDeleteNote(id)}
                className="delete-icon"
                size="1.3em"
              />
            </div>
          </div>
          <div className="note new">
            <textarea
              rows="8"
              cols="10"
              placeholder="Add your note here"
              value={noteText}
              onChange={handleChange}
            ></textarea>
            <div className="note-footer">
              <small>
                {characterLimit - noteText.length} letters remaining
              </small>
              <button
                className="save"
                onClick={(handleSaveClick, handleAddNote)}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </>
    );
  };
};

export default NotebookPage;
