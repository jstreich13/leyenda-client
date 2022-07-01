import "./Dashboard.scss";
import { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookOpenReader,
  faBook,
  faHandsPraying,
  faBrain,
} from "@fortawesome/free-solid-svg-icons";
import DreamCatcher from "../../components/DreamCatcher/DreamCatcher";
import DreamCatcherIcon from "../../visual assets/dreamcatcher-icon.png";

class Dashboard extends Component {
  state = {
    user: null,
    failedAuth: false,
  };

  componentDidMount() {
    const token = sessionStorage.getItem("token");

    if (!token) {
      this.setState({ failedAuth: true });
      return;
    }

    // Get the data from the API
    axios
      .get("http://localhost:8080/api/users/current", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        this.setState({
          user: response.data,
        });
      })
      .catch(() => {
        this.setState({
          failedAuth: true,
        });
      });
  }

  handleLogout = () => {
    sessionStorage.removeItem("token");
    this.setState({
      user: null,
      failedAuth: true,
    });
  };

  render() {
    if (this.state.failedAuth) {
      return (
        <main className="dashboard">
          <div className="dashboard-header">
            <DreamCatcher className="DreamCatcher" />
            <p className="main-header">Leyenda</p>
            <div className="sub-header">
              <p className="sub-header__byline"> Story </p>
              <Link className="continue-container" to="/login">
                <div className="sub-header-button">
                  <FontAwesomeIcon
                    className="continue-icon"
                    icon={faBookOpenReader}
                  />
                  <p className="continue-text">Onward</p>
                </div>
              </Link>
              <p className="sub-header__byline"> Knowledge </p>
            </div>
          </div>
        </main>
      );
    }

    if (!this.state.user) {
      return (
        <main className="dashboard">
          <p>Loading...</p>
        </main>
      );
    }

    const { first_name, last_name, email } = this.state.user;

    return (
      <main className="dashboard">
        <div className="dashboard__wrapper">
          <h1 className="dashboard__title">Dashboard</h1>
          <p className="dashboard__body">
            Welcome back to your Library, {first_name} {last_name}! 👋
          </p>
          <img className="icon" src={DreamCatcherIcon} />
          <div className="dashboard__profile">
            <h2>My Profile</h2>
          </div>
          <div className="dashboard__profile-items">
            <FontAwesomeIcon className="font-icons" icon={faBook} />
            <p className="dashboard__body">My Books</p>
          </div>
          <div className="dashboard__profile-items">
            <FontAwesomeIcon className="font-icons" icon={faBrain} />
            <p className="dashboard__body">My Notebooks</p>
          </div>
          <div className="dashboard__profile-items">
            <FontAwesomeIcon className="font-icons" icon={faHandsPraying} />
            <p className="dashboard__body">My Queue</p>
          </div>
          <button className="dashboard__logout" onClick={this.handleLogout}>
            Sign out
          </button>
        </div>
      </main>
    );
  }
}

export default Dashboard;
