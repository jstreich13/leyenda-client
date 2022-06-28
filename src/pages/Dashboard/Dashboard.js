import "./Dashboard.scss";
import { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
          <p className="main-header">Leyenda</p>
          <div className="sub-header">
            <p className="sub-header__byline"> Knowledge </p>
            <p className="sub-header__byline"> Story </p>
          </div>
          <Link to="/login">Continue</Link>
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

    const { first_name, last_name, email, phone, address } = this.state.user;

    return (
      <main className="dashboard">
        <h1 className="dashboard__title">Dashboard</h1>
        <p>
          Welcome back, {first_name} {last_name}! 👋
        </p>
        <h2>My Profile</h2>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
        <p>Address: {address}</p>

        <button className="dashboard__logout" onClick={this.handleLogout}>
          Log out
        </button>
      </main>
    );
  }
}

export default Dashboard;
