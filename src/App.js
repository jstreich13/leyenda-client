import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import { useState } from "react";
import NotebookPage from "./pages/NotebookPage/NotebookPage";
import MyBooksPage from "./pages/MyBooks/MyBooksPage";
import BookViewer from "./components/EReader/EReader";
import { Provider } from "react-redux";

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
            <BookViewer />
          </Route>
          <Route
            path="/notebook"
            exact
            render={(routerProps) => (
              <div className={`${darkMode && "dark-mode"}`}>
                <div className="container">
                  <NotebookPage
                    handleToggleDarkMode={setDarkMode}
                    {...routerProps}
                  />
                </div>
              </div>
            )}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
