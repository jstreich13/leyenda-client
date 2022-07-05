import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import { useState } from "react";
import NotebookPage from "./pages/NotebookPage/NotebookPage";
import MyBooksPage from "./pages/MyBooks/MyBooksPage";
import Reader from "./components/EReader/EReader";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

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
          <Route path="/books">
            <MyBooksPage />
          </Route>
          <Route path="/reader">
            <Reader />
          </Route>

          <Route
            path="/notebook"
            exact
            render={(routerProps) => (
              <div className={`${darkMode && "dark-mode"}`}>
                <div className="container">
                  <NotebookPage
                    // notes={notes.filter((note) =>
                    //   note.text.toLowerCase().includes(searchText)
                    // )}
                    handleToggleDarkMode={setDarkMode}
                    // handleSearchNote={setSearchText}
                    // handleAddNote={addNote}
                    // handleDelete={deleteNote}
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
