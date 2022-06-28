// import { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import { useState, useEffect } from "react";
import NotebookPage from "./pages/NotebookPage/NotebookPage";
const uuid = require("uuid");

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: { uuid },
      text: "This is the first note",
      date: "7/2/2021",
    },
    {
      id: { uuid },
      text: "This is the second note",
      date: "7/3/2021",
    },
    {
      id: { uuid },
      text: "This is the third note",
      date: "7/4/2021",
    },
  ]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: { uuid },
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const [searchText, setSearchText] = useState("");

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-notes-app-data"));
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
  }, [notes]);

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className="app">
      <BrowserRouter>
        {/* <Header /> */}
        <Switch>
          <Route path="/" exact>
            <Dashboard />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>

          <Route
            path="/notebook"
            exact
            render={(routerProps) => (
              <div className={`${darkMode && "dark-mode"}`}>
                <div className="container">
                  <NotebookPage
                    notes={notes.filter((note) =>
                      note.text.toLowerCase().includes(searchText)
                    )}
                    handleToggleDarkMode={setDarkMode}
                    handleSearchNote={setSearchText}
                    handleAddNote={addNote}
                    handleDelete={deleteNote}
                    {...routerProps}
                  />
                </div>
              </div>
            )}
          />
        </Switch>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
};

export default App;
